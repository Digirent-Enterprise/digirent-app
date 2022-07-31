export interface Filter<Item> {
  entities: Item[];
  pageItemcount: number;
  totalItemCount: number;
}

export interface Products {
  id: number;
  image: string;
  title: string;
  price: number;
}
