import express from "express"
import * as userController from '../Controller/userController'
const router = express.Router()

router.post('/create', userController.createUser)
router.put('/:email', userController.updateUser)
router.get('/all', userController.getUsers)
router.delete('/delete/:email', userController.deleteUser)
router.get('/find', userController.findUser)


export default router