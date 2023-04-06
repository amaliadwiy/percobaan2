import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/prisma";

const authUserPost = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const body = req.body

        const user = await client.user.findUnique({
            where: {
                email: body.email
            }
        })

        if (user) return res.status(209).json({ success: false, message: "email telah digunakan" })

        await client.user.create({
            data: body
        })

        return res.status(201).json({ success: true, message: "data saved" })
    } else {
        return res.status(204).end()
    }
}

export default authUserPost