import express from "express"
import { SignUp } from "../../Controllers/UserControllers/userController";

const router = express.Router();

router.post("/signup", SignUp)

export default router;