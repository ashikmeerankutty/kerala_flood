import { Router } from 'express'
import { newRequest,getRequests } from '../controllers/requestController'

const router = Router()

router.get('/', (req, res) => res.json({status: 'working'}))
router.post('/request',newRequest)
router.get('/requests',getRequests)

export default router
