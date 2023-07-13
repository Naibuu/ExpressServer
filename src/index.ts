import express, { Application, Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'

require('dotenv').config()

import Logger from '@/utils/Logger'

import Routes from '@/routes'

class Server {
    public app: Application

    constructor(private port: number) {
        this.app = express()
        this.initializeMiddlewares()
        this.initializeRoutes()
        this.initializeErrorHandlers()
    }

    private initializeMiddlewares() {
        this.app.use(cors())
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(helmet())
    }

    private initializeRoutes() {
        const routes = new Routes()
        this.app.use(routes.getRouter())
    }

    private initializeErrorHandlers() {
        // Server error handler
        this.app.use(
            (err: any, req: Request, res: Response, next: NextFunction) => {
                console.error(err.stack)
                res.status(500).json({ message: 'Internal server error' })
            }
        )

        // Error handler
        this.app.use((req: Request, res: Response) => {
            res.status(404).json({ message: 'Not found' })
        })
    }

    public listen() {
        this.app.listen(this.port, () => {
            Logger.info(`Listening on port ${this.port}`)
        })
    }
}

const port = parseInt(process.env.PORT || '3000')

const server = new Server(port)
server.listen()
