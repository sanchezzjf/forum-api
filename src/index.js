import express from 'express'
import { router } from './routes/router.js'

const mainRouter = router
const api = express()
const PORT = 3000

api.use("/api", mainRouter)

api.listen(PORT, () => {
    console.log("ok")
})