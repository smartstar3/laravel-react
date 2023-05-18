export class UserModel {
  id: string;
  email: string;
  name: string;

  constructor(init: any = {}) {
    const data = {
      id: "",
      email: "",
      name: "",
      ...init,
    };

    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
  }
}
