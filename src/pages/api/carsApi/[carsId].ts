// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { cars } from "../../../../products/cars.js";
type Data = {
  cars: any;
};

export default async function handler2(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const msg: any = { msg: "Error" };
  const { carsId }: any = req.query;
  const result: any = cars.find((i: any) => i.id == parseInt(carsId));
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json(msg);
  }
}
