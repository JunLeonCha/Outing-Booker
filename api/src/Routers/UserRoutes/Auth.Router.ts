import express from "express"
import Authentication from "../../Controllers/AuthControllers/Auth.Controllers";

const router = express.Router();
const newAuth = new Authentication
router.post("/signUp", newAuth.SignUp)
router.post("/signIn", newAuth.SignIn)
router.post("/signOut", newAuth.SignOut)

export default router;