import { Router } from 'express'
import UserHandler from '~/adapters/handlers/userHandler'

const router = Router()
const handler = new UserHandler()

router.post('/user', (request, response) => handler.createUser(request, response))
router.get('/user', (request, response) => handler.getUserById(request, response))

export { router as userRouter }
