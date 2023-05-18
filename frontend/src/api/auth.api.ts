import { Http } from "@/api/http";
import { UserModel } from "@/resources/models";

export class AuthApi {
  static async login(email: string, password: string) {
    return Http.post("/auth/login", { email, password });
  }

  static async getAccount() {
    return Http.get('/auth/me').then((data) => new UserModel(data));
  }

  static refreshToken(token: string) {
    return Http.post("/auth/refresh-token", { refreshToken: token });
  }
}
