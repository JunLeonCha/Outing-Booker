import * as express from 'express';
import SNCF from './../../Controllers/Extern-API/SCNF.Controller';

const sncf = new SNCF();

const router = express.Router();

router.get("/sncf/base_departure_arrived", sncf.getDepartureArrived)

export default router