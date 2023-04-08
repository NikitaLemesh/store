export interface Item {
  id: number,
  brand: string,
  description: string,
  imageFirst: string,
  imageSecond: string,
  imageThird: string,
  info: [{stock: number}, {type: string}, { rating: number}, {price: number}]
}
