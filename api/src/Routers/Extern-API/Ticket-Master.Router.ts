import express from "express"
import { getAllEvent, getArtEvent, getEventById, getMusicEvent, getSportEvent } from "../../Controllers/Extern-API/Ticket-Master.Controller";
import { getEventForHome } from './../../Controllers/Extern-API/Ticket-Master.Controller';

const router = express.Router()

router.get("/ticket-master/home-event", getEventForHome)
router.get("/ticket-master/events", getAllEvent)
router.get("/ticket-master/events/:id", getEventById)
router.get("/ticket-master/events/arts", getArtEvent)
router.get("/ticket-master/events/musics", getMusicEvent)
router.get("/ticket-master/events/sports", getSportEvent)

export default router;