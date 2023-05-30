import express from "express"
import Booking from "../../Controllers/Bookings/Booking.Controller"

const router = express.Router()

router.post("/make_reservation", Booking.make_reserveration)
router.post("/get_users_list_bookings/", Booking.get_users_list_reservations)

export default router