// import { User } from "passport";

// declare global {
//   namespace Express {
//     // interface User {
//     //     id: string;
//     //     username: string;
//     // }

//     interface Request {
//       login(user: User): Promise<void>;
//       logout(): Promise<void>;
//       isAuthenticated(): boolean;
//       isUnauthenticated(): boolean;
//     }
//   }
// }

import { User as IUser } from "../models/users.model";

declare global {
  namespace Express {
    interface User extends IUser {}
  }
}