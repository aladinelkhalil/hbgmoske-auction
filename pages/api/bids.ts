import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const BidsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const bid = await prisma.bid.create({
      data: {
        user: req.body.user,
        amount: req.body.amount,
        productId: req.body.productId,
      },
    });

    await prisma.product.update({
      where: {
        id: req.body.productId,
      },
      data: {
        highestBid: req.body.amount,
      },
    });

    return res.status(201).send(bid);
  }
};

export default BidsHandler;
