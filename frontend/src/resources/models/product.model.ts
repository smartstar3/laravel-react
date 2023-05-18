export class ProductModel {
  id: string;
  title: string;
  category: string;
  price: number;
  isFavorited: boolean;

  constructor(init: any = {}) {
    const data = {
      id: "",
      title: "",
      category: "",
      price: 0,
      isFavorited: false,
      ...init,
    };

    this.id = data.id;
    this.title = data.title;
    this.category = data.category;
    this.price = data.price;
    this.isFavorited = data.isFavorited;
  }
}
