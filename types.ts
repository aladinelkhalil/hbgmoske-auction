export interface Product {
  id: string;
  name: string;
  companyName: string;
  imageUrl: string;
  marketValue: number;
  minimumBid: number;
  companyUrl?: string;
  description?: string;
  highestBid?: number;
}

export interface Bid {
  id: string;
  user: User;
  productId: string;
  amount: number;
  timestamp?: Date;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
}
