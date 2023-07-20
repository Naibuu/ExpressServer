import { Router } from 'express'
import helmet from 'helmet'

require('dotenv').config()

import Greet from '@/routes/greet'

class Routes {
    private router: Router

    constructor() {
        this.router = Router()
        this.initializeMiddlewares()
        this.initializeRoutes()
    }

    private initializeMiddlewares() {
        this.router.use(helmet())
    }

    private initializeRoutes() {
        this.router.use('/', Greet)
    }

    public getRouter() {
        return this.router
    }
}

export default Routes
