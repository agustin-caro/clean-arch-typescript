import User from '~/domain/entities/user'
import { Request, Response } from 'express'
import { createUserUseCaseInstance, getUseByIdUseCaseInstance } from '~/configs/UseCaseConfig'

class UserHandler {
  createUser(req: Request, res: Response) {
    const user = req.body as User
    createUserUseCaseInstance.execute(user)
    res.send(user)
  }

  getUserById(req: Request, res: Response) {
    const id = req.query.id as string
    const user = getUseByIdUseCaseInstance.execute(id)
    res.send(user)
  }
}

export default UserHandler
