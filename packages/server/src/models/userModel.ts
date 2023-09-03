import knexInstance from "./instance";
import { User } from "../utils"

class UserModel {
    private knex: Knex;

    constructor() {
        this.knex = knexInstance;
        this.createUserTable();
    }

    private async createUserTable() {
        const tableExists = await this.knex.schema.hasTable('users');

        if (tableExists) return;

        await this.knex.schema.createTable('users', (table) => {
            table.uuid('id').primary().defaultTo(this.knex.raw('gen_random_uuid()'));
            table.string('username');
            table.string('email').unique();
            table.string('password');
        });
    }


    async createUser(user: User): Promise<User | null> {
        try {
            const [userId] = await this.knex('users').insert(user);
            const newUser = await this.knex<User>('users').where({ id: userId }).first();
            return newUser || null;
        } catch (error) {
            console.error('Error creating user:', error);
            return null;
        }
    }

    async deleteUserById(id: string): Promise<User | null> {
        try {
            const userToDelete = await this.knex<User>('users').where({ id }).first();
            await this.knex('users').where({ id }).del();
            return userToDelete || null;
        } catch (error) {
            console.error('Error deleting user:', error);
            return null;
        }
    }

    async updateUserById(id: string, user: User): Promise<User | null> {
        try {
            await this.knex('users').where({ id }).update(user);
            const updatedUser = await this.knex<User>('users').where({ id }).first();
            return updatedUser || null;
        } catch (error) {
            console.error('Error updating user:', error);
            return null;
        }
    }
}

const userModel = new UserModel();
export default userModel;
