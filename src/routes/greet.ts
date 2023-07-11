import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
    const name = req.query.name

    if (name) {
        return res.status(200).json({
            message: `Hey, ${name}!`,
        })
    } else {
        return res.status(200).json({
            message:
                'Try adding ?name= and your name at the end, so I can greet you!',
        })
    }
})

export default router
