import express, { Request, Response } from "express"
import dotenv from "dotenv"
import TicketMasterRouter from "./Routers/Extern-API/Ticket-Master.Router"
import Authentication from "./Routers/UserRoutes/Auth.Router"
import Booking from "./Routers/Bookings/Booking.Router"

dotenv.config()

const app = express()
const PORT = 8080

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    return res.send("Hello World")
})
app.use("/user/", Authentication)
app.use("/extern-api/", TicketMasterRouter)
app.use("/booking/", Booking)

app.listen(PORT, () => {
    console.log(`Server run on: ${PORT}`)
})