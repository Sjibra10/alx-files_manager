import redisClient from '../utils/redis';

describe('RedisClient', () => {
  it('should return true when Redis is connected', () => {
    expect(redisClient.isAlive()).toBe(true);
  });

  it('should set and get values correctly', async () => {
    await redisClient.set('testKey', 'testValue', 10);
    const value = await redisClient.get('testKey');
    expect(value).toBe('testValue');
  });

  it('should delete values correctly', async () => {
    await redisClient.set('deleteKey', 'deleteValue', 10);
    await redisClient.del('deleteKey');
    const value = await redisClient.get('deleteKey');
    expect(value).toBeNull();
  });
});

