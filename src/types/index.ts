export interface Property {
  id: string;
  user_id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  area: number;
  address: string;
  city: string;
  location: { lat: number; lng: number };
  images: string[];
  status: "pending" | "approved" | "hidden";
  created_at: string;
}

export interface Message {
  id: string;
  sender_id: string;
  receiver_id: string;
  property_id: string;
  content: string;
  created_at: string;
}
