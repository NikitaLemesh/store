export interface Item {
  id: number,
  brand: string,
  description: string,
  imageFirst: string,
  imageSecond: string,
  imageThird: string,
  stock: number,
  type: string,
  rating: number,
  price: number,
}

export interface ICard {
  card: Item
}

export interface NameImage {
  name: string,
  image?: string
}

export interface Info {
  stock?: number,
  type?: string,
  rating?: number,
  price?: number,
}
