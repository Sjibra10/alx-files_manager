import request from 'supertest';
import app from '../server'; // Ensure your Express app is correctly exported

describe('API Endpoints', () => {
  it('GET /status should return 200', async () => {
    const res = await request(app).get('/status');
    expect(res.statusCode).toBe(200);
  });

  it('GET /stats should return 200', async () => {
    const res = await request(app).get('/stats');
    expect(res.statusCode).toBe(200);
  });

  it('POST /users should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ email: 'test@example.com', password: '123456' });
    expect(res.statusCode).toBe(201);
  });

  it('GET /connect should return 200', async () => {
    const res = await request(app).get('/connect');
    expect(res.statusCode).toBe(200);
  });

  it('GET /disconnect should return 200', async () => {
    const res = await request(app).get('/disconnect');
    expect(res.statusCode).toBe(200);
  });

  it('GET /users/me should return 200', async () => {
    const res = await request(app).get('/users/me');
    expect(res.statusCode).toBe(200);
  });

  it('POST /files should return 201', async () => {
    const res = await request(app)
      .post('/files')
      .send({ name: 'testFile', type: 'text', data: 'Hello, world!' });
    expect(res.statusCode).toBe(201);
  });

  it('GET /files/:id should return 200', async () => {
    const res = await request(app).get('/files/1');
    expect(res.statusCode).toBe(200);
  });

  it('GET /files with pagination should return 200', async () => {
    const res = await request(app).get('/files?page=1&limit=10');
    expect(res.statusCode).toBe(200);
  });

  it('PUT /files/:id/publish should return 200', async () => {
    const res = await request(app).put('/files/1/publish');
    expect(res.statusCode).toBe(200);
  });

  it('PUT /files/:id/unpublish should return 200', async () => {
    const res = await request(app).put('/files/1/unpublish');
    expect(res.statusCode).toBe(200);
  });

  it('GET /files/:id/data should return 200', async () => {
    const res = await request(app).get('/files/1/data');
    expect(res.statusCode).toBe(200);
  });
});

