import request from 'supertest';
import server from '../src/server';

import { describe, test } from '@jest/globals';

describe('User Authentication Tests', () => {
  test.todo('should create a new user');

  test.todo('should not allow duplicate user creation');

  test.todo('should log in an existing user');

  test.todo('should reject an incorrect login');
  test.todo('should sign up a new user');

  test.todo('should handle signup failure gracefully');
});
