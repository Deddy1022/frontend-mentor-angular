export type Product = {
  image: ProductImage;
  name: string;
  category: string;
  price: number;
}

type ProductImage = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export type OrderedProducts = {
  name: string;
  total: number;
  price: number;
  totalPrice: number;
}
