import express from "express"
import dotenv from "dotenv"
import TicketMasterRouter from "./Routers/Extern-API/Ticket-Master.Router"

dotenv.config()

const app = express()
const PORT = process.env.PORT

// app.use("/")

app.listen(PORT, () => {
    console.log(`Server run on: ${PORT}`)
})