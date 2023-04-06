import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/prisma";

const authUserDelete = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "DELETE") {
        const { id } = req.query;
        const data = await client.user.delete({
            where: {
                id: id as any
            }
        })

        res.status(201).json({ succes: true, message: data })
    }
}

export default authUserDelete