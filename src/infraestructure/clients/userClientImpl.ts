import IUserClient from '~/domain/clients/IUserClient'
import User from '~/domain/entities/user'

export default class UserClientImpl implements IUserClient {
  createUser(user: User): Promise<User> {
    return new Promise((resolve) => {
      resolve(user)
    })
  }

  getUserById(id: number): Promise<User> {
    return new Promise((resolve) => {
      resolve(new User(id, 'John', 'mail'))
    })
  }
}
