export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Hot' | 'Cold' | 'drink' | 'Breakfast' |'Dessert' ; // Adjust as needed
  calorie: number;
  lat: number;   // latitude for map view
  lng: number;   // longitude for map view
  availability: boolean;
  rating?: number; // Optional, maybe we add user data ratings later for best sellers
  isBestSale: boolean;
}
