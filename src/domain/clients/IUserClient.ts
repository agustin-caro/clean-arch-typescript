import User from '../entities/user'

export default interface IUserClient {
    createUser(user: User): Promise<User>
    getUserById(id: number): Promise<User>
}
