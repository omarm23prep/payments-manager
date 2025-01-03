import { hash } from 'bcrypt';
import { User } from '../models/users.model';
import usersModel from '../schemas/users.schema';
import { isEmpty } from '../utils/utils';
import { UserError } from '../errors/user.error';


type UserModel = User & {_id: string};
class UserService {
  public users = usersModel;

  public async findAllUser(): Promise<User[]> {
    const users = await this.users.find();
    return users.map(user => {
      return {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        username: user.username,
        password: user.password,
        role: user.role,
        age: user.age,
      } as User
    });
  }

  public async findUserById(userId: string): Promise<User> {
    if (isEmpty(userId)) throw new Error("userId is empty");

    const findUser: UserModel | null = await this.users.findOne({ _id: userId });
    if (!findUser) throw new Error("User doesn't exist");

    return {
      id: findUser._id,
      fullname: findUser.fullname,
      email: findUser.email,
      username: findUser.username,
      password: findUser.password,
      role: findUser.role,
      age: findUser.age,
    };
  }

  public async findUserByUsername(username: string): Promise<User> {
    if (isEmpty(username)) throw new Error("username is empty");

    const findUser: UserModel | null = await this.users.findOne({ username: username });

    if (!findUser) throw new Error("User doesn't exist");

    return {
      id: findUser._id,
      fullname: findUser.fullname,
      email: findUser.email,
      username: findUser.username,
      password: findUser.password,
      role: findUser.role,
      age: findUser.age,
    };
  }

  public async createUser(userData: User): Promise<User | null> {
    if (isEmpty(userData)) {
      throw new UserError({
        name: "USER_DATA_EMPTY",
        message: "User data is empty",
      });
    }

    const findUser: User | null = await this.users.findOne({ username: userData.username });
    // no permitir mismo username
    if (findUser) {
      throw new UserError({
        name: "USER_ALREADY_EXISTS",
        message: `El username: ${userData.email} ya existe`,
      });
    }

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: User = await this.users.create({ ...userData, password: hashedPassword });

    return createUserData;
  }

  public async removeUser(id: string): Promise<User | null> {
    try {
      const removedUser: User | null = await this.users.findOneAndDelete({_id: id});

      if (removedUser) console.log("Removed user:", removedUser);

      return removedUser;
    } catch (error: unknown) {
      console.error(error);
      return null;
    }
  }

  public async updateUser(id: string, userData: User): Promise<User | null> {
    try {
      const updatedUser: User | null = await this.users.findOneAndUpdate(
        { _id: id },
        { $set: userData }
      );

      return updatedUser;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

}

export default UserService;
