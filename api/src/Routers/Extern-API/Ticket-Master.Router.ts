import express from "express"
import TicketMaster from "../../Controllers/Extern-API/Ticket-Master.Controller";

const router = express.Router()
router.get("/ticket-master/events", TicketMaster.getAllEvent)
router.get("/ticket-master/events/home", TicketMaster.getEventForHome)
router.get("/ticket-master/events/:id", TicketMaster.getEventById)
router.get("/ticket-master/events/arts", TicketMaster.getArtEvent)
router.get("/ticket-master/events/musics", TicketMaster.getMusicEvent)
router.get("/ticket-master/events/sports", TicketMaster.getSportEvent)
router.get("/ticket-master/events/query/:id", TicketMaster.getEventByQuery)

export default router;