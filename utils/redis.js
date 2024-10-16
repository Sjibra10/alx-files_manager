// utils/redis.js
import { createClient } from 'redis';

class RedisClient {
  constructor() {
    this.client = createClient();

    // Handle Redis errors
    this.client.on('error', (err) => {
      console.error('Redis Client Error:', err);
    });

    // Connect Redis client
    this.client.connect().catch((err) => {
      console.error('Redis connection failed:', err);
    });
  }

  /**
   * Check if Redis client is alive (connected).
   * @returns {boolean} - True if connected, false otherwise.
   */
  isAlive() {
    return this.client.isOpen;
  }

  /**
   * Get the value for a given key from Redis.
   * @param {string} key - The Redis key.
   * @returns {Promise<string|null>} - The value stored for the key, or null if not found.
   */
  async get(key) {
    try {
      return await this.client.get(key);
    } catch (error) {
      console.error(`Error getting key "${key}":`, error);
      return null;
    }
  }

  /**
   * Set a key-value pair in Redis with an expiration time.
   * @param {string} key - The Redis key.
   * @param {string|number} value - The value to store.
   * @param {number} duration - Expiration time in seconds.
   * @returns {Promise<void>}
   */
  async set(key, value, duration) {
    try {
      await this.client.set(key, value, { EX: duration });
    } catch (error) {
      console.error(`Error setting key "${key}":`, error);
    }
  }

  /**
   * Delete a key from Redis.
   * @param {string} key - The Redis key.
   * @returns {Promise<void>}
   */
  async del(key) {
    try {
      await this.client.del(key);
    } catch (error) {
      console.error(`Error deleting key "${key}":`, error);
    }
  }
}

// Export an instance of RedisClient
const redisClient = new RedisClient();
export default redisClient;

