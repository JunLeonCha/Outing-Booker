import express from "express"
import Booking from "../../Controllers/Bookings/Booking.Controller"

const router = express.Router()

router.post("/make_reservation", Booking.make_reserveration)

export default router