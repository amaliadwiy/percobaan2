import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/prisma";


// type ModelNama = {
//     name?: string
// }


// const namanya = {}
// const data:ModelNama = {}

const authUserGetById = async (req: NextApiRequest, res: NextApiResponse) => {
    const { userId } = req.query
    const user = await client.user.findUnique({
        where: {
            id: userId as any
        }
    })

    res.status(200).json(user)


}

export default authUserGetById