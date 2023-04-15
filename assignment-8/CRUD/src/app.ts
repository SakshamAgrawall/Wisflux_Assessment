import express, { Application} from 'express'
import usersRouter from './Router/userRouter'

const app: Application = express()
const PORT: number =  4000

app.use(express.json())

app.use('/', usersRouter)

app.listen(PORT, (): void => {
    console.log(`Listening on ${PORT}`)
})