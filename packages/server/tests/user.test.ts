import request from 'supertest';
import app from '../src/server';

import { describe, beforeAll, afterAll, test, expect } from '@jest/globals';

import * as u from "../src/utils"

const testUser = {
    username: "john_doe",
    email: "example@example.com",
    password: "foobar@123" 
};

describe('User Authentication Tests', () => {
  test('should create a new user', async () => {
    const response = await request(app)
      .post('/v1/users')
      .send(testUser);

    const data = response.body;

    expect(response.status).toBe(201);
    expect(data.status).toBe(u.Status.SUCCESS);
  })

  test('should handle user creation failure gracefully', async () => {
    const response = await request(app)
      .post('/v1/users')
      .send({"this": "should error"});

    const data = response.body;

    expect(response.status).toBe(400);
    expect(data.status).toBe(u.Status.ERROR);
  });

  test.todo('should not allow duplicate user creation', async () => {
        const response = await request(app)
        .post('/v1/users')
        .send(testUser);

        const data = response.body;

        expect(response.status).toBe(400);
        expect(data.status).toBe(u.Status.ERROR);
        expect(data.code).toBe(u.ErrorCode.USER_ALREADY_EXISTS);
  });

  test.todo('should log in an existing user');
  test.todo('should reject an incorrect login');
  test.todo('should sign up a new user');
});
