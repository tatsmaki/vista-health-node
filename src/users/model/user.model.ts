export class UserModel {
  static counter = 0;

  id: number;
  full_name: string;
  platform: string;

  constructor({ full_name, platform }: Omit<UserModel, 'id'>) {
    this.id = UserModel.counter += 1;
    this.full_name = full_name;
    this.platform = platform;
  }
}
