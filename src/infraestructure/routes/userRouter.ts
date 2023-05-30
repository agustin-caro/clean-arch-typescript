import { Router } from 'express'
import UserHandler from '~/adapters/handlers/UserHandler'

const router = Router()
const handler = new UserHandler()
const validacion = () => {} // dummy middleware

router.post('/user', validacion, (request, response) => handler.createUser(request, response))
router.get('/user/:id', (request, response) => handler.getUserById(request, response))

export { router as userRouter }
