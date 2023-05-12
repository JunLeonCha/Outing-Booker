import express from "express"
import { newBooking } from "../../Controllers/Bookings/Booking.Controller"

const router = express.Router()

router.post("/new-booking", newBooking)

export default router