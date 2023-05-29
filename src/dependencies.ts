import CreateUserUseCase from '~/domain/useCases/createUserUseCase'
import UserClientImpl from './infraestructure/clients/userClientImpl'
import GetUserByIdUseCase from './domain/useCases/getUserByIdUseCase'

const client = new UserClientImpl()

const createUserUseCaseInstance = new CreateUserUseCase(client)
const getUseByIdUseCaseInstance = new GetUserByIdUseCase(client)

export {
  createUserUseCaseInstance,
  getUseByIdUseCaseInstance
}
