import request from 'supertest';
import { Express } from 'express-serve-static-core';
import { createServer } from '@dtc/server';

let server: Express;

beforeAll(async () => {
  server = await createServer();
});

describe('GET /hello', () => {
  it('should return 200 & valid response if request param list is empty', async () => {
    const result = await request(server).get('/api/v1/hello');
    expect(result.statusCode).toEqual(200);
    expect(result.headers['content-type']).toContain('json');
    expect(result.body).toMatchObject({ 'message': 'Hello, stranger!' });
  });

  it('should return 200 & valid response if name param is set', async () => {
    const result = await request(server).get('/api/v1/hello?name=Test%20Name');
    expect(result.statusCode).toEqual(200);
    expect(result.headers['content-type']).toContain('json');
    expect(result.body).toMatchObject({ 'message': 'Hello, Test Name!' });
  });

  it('should return 400 & valid error response if name param is empty', async () => {
    const result = await request(server).get('/api/v1/hello?name=');
    expect(result.statusCode).toEqual(400);
    expect(result.headers['content-type']).toContain('json');
    expect(result.body).toMatchObject({
      'error': {
        type: 'request_validation',
        message: expect.stringMatching(/Empty.*'name'/),
        errors: expect.anything()
      }
    });
  });

});

describe('GET /goodbye', () => {
  it('should return 200 & valid response to authorization with fakeToken request', async () => {
    const result = await request(server).get('/api/v1/goodbye').set('Authorization', 'Bearer fakeToken');
    expect(result.headers['content-type']).toContain('json');
    expect(result.statusCode).toEqual(200);
    expect(result.body).toMatchObject( { 'message': 'Goodbye, fakeUserId!' } );
  });

  it('should return 401 & valid error response to invalid authorization token', async () => {
    const result = await request(server).get('/api/v1/goodbye').set('Authorization', 'Bearer invalidFakeToken');
    expect(result.headers['content-type']).toContain('json');
    expect(result.statusCode).toEqual(401);
    expect(result.body).toMatchObject( { error: { type: 'unauthorized', message: 'Authentication Failed' } });
  });

  it('should return 401 & valid error response if authorization header field is missed', async () => {
    const result = await request(server).get('/api/v1/goodbye');
    expect(result.headers['content-type']).toContain('json');
    expect(result.statusCode).toEqual(401);
    expect(result.body).toMatchObject( { 'error': {
      type: 'request_validation',
      message: 'Authorization header required',
      errors: expect.anything()
    } });
  });

});