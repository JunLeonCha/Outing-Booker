import express from "express"
import dotenv from "dotenv"
import TicketMasterRouter from "./Routers/Extern-API/Ticket-Master.Router"
import Authentication from "./Routers/UserRoutes/Auth.Router"
import Booking from "./Routers/Bookings/Booking.Router"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json());

app.use("/api/user/", Authentication)
app.use("/api/extern-api/", TicketMasterRouter)
app.use("/api/booking/", Booking)

app.listen(PORT, () => {
    console.log(`Server run on: ${PORT}`)
})