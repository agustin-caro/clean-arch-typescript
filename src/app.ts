import express from 'express'
import { userRouter } from './infraestructure/routes/userRouter'
import { defaultRouter } from '~/infraestructure/routes/defaultRouter'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routing
app.use(defaultRouter)
app.use(userRouter)

app.listen(8080, () => {
  console.log('Server is running on port 8080')
}
)
