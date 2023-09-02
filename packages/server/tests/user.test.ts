import request from 'supertest';
import app from '../src/server';

import { describe, beforeAll, afterAll, test, expect } from '@jest/globals';

const testUser = {
    username: "john_doe",
    email: "example@example.com",
    password: "foo@123" 
};

describe('User Authentication Tests', () => {
  test('should create a new user', async () => {
    const response = await request(app)
      .post('/v1/users')
      .send(testUser);

    const data = response.body;

    expect(response.status).toBe(201);

    // TODO: replace this more strongly typed instrinsics  
    expect(data.status).toBe("success");
  })

  test.todo('should not allow duplicate user creation');
  test.todo('should log in an existing user');
  test.todo('should reject an incorrect login');
  test.todo('should sign up a new user');
  test.todo('should handle signup failure gracefully');
});
