import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import UserService from "../services/users.service";
import { User } from "../models/users.model";


const userService = new UserService();

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = await userService.findUserByUsername(username);

    if (!user) { 
      done(null, false, { message: "Username doesn't exits" }); 
    }

    const passwordsMatch = await bcrypt.compare( 
      password, 
      user.password 
    );

    // If the passwords match, return the user object 
    if (passwordsMatch) {
        done(null, user);
    } else {
        // If the passwords don't match, return an error
        done(null, false, { message: "Incorrect password" });
    }
  } catch (error) {
    done(error);
  }
}));

passport.serializeUser((user: any, done: (error: any, user: any) => void): void => {
  done(null, user);
});


passport.deserializeUser(async (user: User, done) => {
    const u = await userService.findUserByUsername(user.username);
    done(null, u);
});

export default passport;
