import { Router } from "express";
import passport from "passport";

const router = Router();

// Define your routes here
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect("/");
// });

export default router;
