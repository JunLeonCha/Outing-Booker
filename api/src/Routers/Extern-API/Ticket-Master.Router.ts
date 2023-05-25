import express from "express"
import TkMaster from "../../Controllers/Extern-API/Ticket-Master.Controller";

const router = express.Router()
const TicketMaster = new TkMaster();
router.get("/ticket-master/home-event", TicketMaster.getEventForHome)
router.get("/ticket-master/events", TicketMaster.getAllEvent)
router.get("/ticket-master/events/:id", TicketMaster.getEventById)
router.get("/ticket-master/events/arts", TicketMaster.getArtEvent)
router.get("/ticket-master/events/musics", TicketMaster.getMusicEvent)
router.get("/ticket-master/events/sports", TicketMaster.getSportEvent)

export default router;