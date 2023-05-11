import express from "express"
import { newBooking } from "../../Controllers/Bookings/Booking.Controller"

const router = express.Router()

router.post("/newBooking", newBooking)

export default router