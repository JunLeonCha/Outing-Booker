import express from "express";
import { LoginWithGoogle } from "../../controllers/authentification/Login.js";

const router = express.Router();

// router.get("/", async (req, res) => {
//   // const { data, error } = await supabase.from('auth.users').select('*');
//   const {
//     data: { users },
//     error,
//   } = await supabase.auth.admin.listUsers();

//   res.json(data);
// });

router.post("/sign_up_google", LoginWithGoogle);

export default router;
