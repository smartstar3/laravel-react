import { Http } from "@/api/http";
import { ProductModel } from "@/resources/models";

export class ProductsApi {
  static async search(query = {}): Promise<ProductModel[]> {
    return Http.get('/products', query)
      .then(({products = []}) => products.map((item: any) => new ProductModel(item)));
  }

  static async toggleFavorite(id: string) {
    return Http.post(`/products/${id}/toggle-favorite`);
  }

  static async getFavoriteProducts(query = {}): Promise<ProductModel[]> {
    return Http.get('/products/favorites', query)
      .then(({products = []}) => products.map((item: any) => new ProductModel({...item, isFavorited: true})));
  }
}
