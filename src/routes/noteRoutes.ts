import { Router } from "express";
import { newNota } from "../controllers/notesController";

const route= Router();
 route.get("/notes",newNota)

 export default route;