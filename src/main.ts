import "reflect-metadata";
import "module-alias/register";
import { printer } from "@modules/printers";
import { Server } from "./server";

export const main = (): void => {
  Server.build([printer]);
  Server.start();
};
main();
