import express from "express"
import { getAllEvent } from "../../Controllers/Extern-API/Ticket-Master.Controller";

const router = express.Router()

router.get("/Ticket-Master/All-Event", getAllEvent)

export default router;