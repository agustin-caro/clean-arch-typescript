import IUserClient from '../clients/IUserClient'
import User from '../entities/user'
import IUserUseCase from './IUserUseCase'

export default class CreateUserUseCase implements IUserUseCase {
  private userClient: IUserClient

  constructor(userClient: IUserClient) {
    this.userClient = userClient
  }

  execute(input: unknown): unknown {
    const user = input as User
    return this.userClient.createUser(user)
  }
}
