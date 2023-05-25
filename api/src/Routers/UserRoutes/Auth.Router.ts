import express from "express"
import Authentication from "../../Controllers/AuthControllers/Auth.Controllers";

const router = express.Router();

router.post("/signUp", Authentication.SignUp)
router.post("/signIn", Authentication.SignIn)
router.post("/signOut", Authentication.SignOut)

export default router;