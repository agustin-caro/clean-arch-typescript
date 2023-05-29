import express from 'express'
import { userRouter } from './infraestructure/routes/userRouter'

const app = express()
const routes = express.Router()

app.get('/ping', (_, res) => {
  res.send('pong')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routing
routes.use(userRouter)

app.listen(8080, () => {
  console.log('Server is running on port 8080')
}
)
