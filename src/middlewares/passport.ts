import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import UserService from "../services/users.service";
import { User } from "../models/users.model";

const userService = new UserService();

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await userService.findUserByUsername(username);
      
      if (!user) {
        return done(null, false, { message: "Username doesn't exist" });
      }

      const passwordsMatch = await bcrypt.compare(password, user.password);
      if (passwordsMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password" });
      }
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user: Express.User, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await userService.findUserById(id);
    if (!user) {
      return done(new Error("User not found"), null);
    }
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;
