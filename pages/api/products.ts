import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const ProductsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const products = await prisma.product.findMany();
    return res.send(products);
  }

  if (req.method === "POST") {
    const product = await prisma.product.create({
      data: {
        name: "Flying carpet",
        companyName: "Intensive Code",
        companyUrl: "https://intensivecode.se",
        description: "It flies really high, no fuel required",
        imageUrl: "https://picsum.photos/200",
        marketValue: 20000,
        minimumBid: 5000,
      },
    });
    return res.send(product);
  }
};

export default ProductsHandler;
