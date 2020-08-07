import express from "express";
import ClassesControler from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();
const classesControlers = new ClassesControler();
const connectionsControlers = new ConnectionsController();

routes.get("/classes", classesControlers.index);
routes.post("/classes", classesControlers.create);

routes.get("/connections", connectionsControlers.index);
routes.post("/connections", connectionsControlers.create);

export default routes;
