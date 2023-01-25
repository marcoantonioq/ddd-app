import { PrismaClient } from "@prisma/client";

export const data = new PrismaClient({
  log: ["info", "warn", "error"],
});
export default data;
