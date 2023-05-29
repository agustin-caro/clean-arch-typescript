import IUserClient from '../clients/IUserClient'
import IUserUseCase from './IUserUseCase'

export default class GetUserByIdUseCase implements IUserUseCase {
  private userClient : IUserClient

  constructor(userClient: IUserClient) {
    this.userClient = userClient
  }

  execute(input: unknown): unknown {
    const id = input as number
    return this.userClient.getUserById(id)
  }
}
