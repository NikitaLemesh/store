export interface Item {
  id: ID,
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

type ID = string | number;

export interface ICard {
  card: Item
}

export interface NameImages {
  name: string,
  imageFirst?: string
  imageSecond?: string,
  imageThird?: string,
}

export interface Info {
  stock?: number,
  type?: string,
  rating?: number,
  price?: number,
}


export interface IdDetailsPage {
  id: number
}
