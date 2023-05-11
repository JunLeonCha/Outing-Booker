import express from "express"
import { getAllEvent, getArtEvent, getEventById, getMusicEvent, getSportEvent } from "../../Controllers/Extern-API/Ticket-Master.Controller";

const router = express.Router()

router.get("/Ticket-Master/All-Event", getAllEvent)
router.get("/Ticket-Master/getEventById/:id", getEventById)
router.get("/Ticket-Master/Art-Event", getArtEvent)
router.get("/Ticket-Master/Music-Event", getMusicEvent)
router.get("/Ticket-Master/Sport-Event", getSportEvent)

export default router;