import express from "express";
import AuthentificationRoutes from "./routes/Authentification/AuthentificationRoutes.js";
import supabase from "./db.js";
// import { OAuth2Client } from "google-auth-library";
// import jwt from "jsonwebtoken";

const app = express();

app.use(express.json);

// app.use(
//   cors({
//     origin: ["http://localhost3000"],
//     methods: "GET,POST,PUT,DELETE,OPTIONS",
//   })
// );

app.listen(8000, () => {
  console.log("server is running");
});

console.log(supabase);

app.use("/server/user/", AuthentificationRoutes);
