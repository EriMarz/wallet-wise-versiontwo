import { Router } from "express";
// modify the import below for anything we need from the controller.
// createAdventure / UpdateAdventure / DeleteAdventure etc.
import { getAllAdventures, getAdventuresById, createAdventure, deleteAdventure} from "../controllers/adventureController";

const router = Router();

// Any future routes go down here. 
router.get("/adventures", getAllAdventures);
router.get("/adventures/:id", getAdventuresById);
router.post("/adventures", createAdventure);
router.delete("/adventures/:id", deleteAdventure);

// Export the router to be used in the main server file
export default router;