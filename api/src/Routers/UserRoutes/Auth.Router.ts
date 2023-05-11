import express from "express"
import { SignIn, SignOut, SignUp } from "../../Controllers/AuthControllers/Auth.Controllers";

const router = express.Router();

router.post("/signUp", SignUp)
router.post("/signIn", SignIn)
router.post("/signOut", SignOut)

export default router;