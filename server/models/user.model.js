import bookshelf from '../config/bookshelf';

/**
 * User model.
 */
class User extends bookshelf.Model {
    get tableName() {
        return 'cadastro_funcionario';
    }

    get hasTimestamps() {
        return true;
    }

    verifyPassword(password) {
        return this.get('password') === password;
    }
}

export default User;