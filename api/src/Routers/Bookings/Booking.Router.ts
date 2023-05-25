import express from "express"
import { make_reserveration } from "../../Controllers/Bookings/Booking.Controller"

const router = express.Router()

router.post("/make_reservation", make_reserveration)

export default router