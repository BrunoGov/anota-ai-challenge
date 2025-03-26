export type ProductsResponse = {
  id: number;
  title: string;
  description: string;
  img: string;
  type: string;
};

export type SearchProducts = {
  target: { value: string };
};
