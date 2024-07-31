import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import database from "./database";

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: "/auth/google/callback",
    },
    async (token, tokenSecret, profile, done) => {
      try {
        const user = profile._json;
        const res = await database.query(
          "INSERT INTO users (google_id, name, email, picture) VALUES ($1, $2, $3, $4) ON CONFLICT (google_id) DO NOTHING RETURNING *",
          [user.sub, user.name, user.email, user.picture]
        );
        done(null, res.rows[0]);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const res = await database.query("SELECT * FROM users WHERE id = $1", [id]);
    done(null, res.rows[0]);
  } catch (err) {
    done(err, null);
  }
});
