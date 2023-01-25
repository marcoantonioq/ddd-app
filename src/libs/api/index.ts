import { printer } from "@modules/printers";
import { Server } from "./express";
Server.build([printer]);
export default Server;
