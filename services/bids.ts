import axios from "axios";
import { Bid, User } from "types";

const BASE_URL =
  process.env.VERCEL_ENV === "development"
    ? "http://localhost:3000/api"
    : process.env.VERCEL_URL;

export function makeBid(user: User, amount: number, productId: string) {
  return axios.post<Bid>(`${BASE_URL}/bids`, {
    user,
    amount,
    productId,
  });
}
