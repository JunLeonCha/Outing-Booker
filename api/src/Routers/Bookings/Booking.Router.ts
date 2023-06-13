import express from "express"
import Booking from "../../Controllers/Bookings/Booking.Controller"

const router = express.Router()
const newBookings = new Booking

router.post("/make_reservation", newBookings.make_reservation)
router.post("/get_users_list_bookings/", newBookings.get_users_list_reservations)

export default router