import { NextApiRequest, NextApiResponse } from "next"
import client from "../../../lib/prisma"

const authUserUpdate = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const body = req.body
        await client.user.update({
            where: {
                id: body.id
            },
            data: {
                name: body.name
            }
        })
        res.status(201).json({ success: true })
    }
}

export default authUserUpdate