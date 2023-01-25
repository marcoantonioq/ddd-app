import { createPrinter, getPrinters } from "./services";
import { Request, Response, Router } from "express";
import { PrinterProps } from "../domain/Printer";
import { Resp } from "src/libs/api/response";
const route = Router();

export const Route = {
  GetPrinters: route.get("/printers", async (_: Request, res: Response) => {
    const printers = await getPrinters.execute();
    return res.json(Resp.data(printers));
  }),

  GetPrintersById: route.post(
    "/printers/:id",
    async (req: Request, res: Response) => {
      const { name = "", price = 0 } = req.body;
      // const result = await createPrinter.execute({
      //   name: name,
      //   price: price,
      // });
      // return res.json({ success: result.isOk(), message: result.error() });
    }
  ),

  CreatePrinter: route.put(
    "/printers/add",
    async (req: Request, res: Response) => {
      const props = <PrinterProps>req.body;
      const printer = await createPrinter.execute(props);
      return res.json(Resp.data(printer?.props));
    }
  ),

  UpdatePrinters: route.put(
    "/printers/:id",
    async (req: Request, res: Response) => {
      const { id = "" } = req["params"];
      const { name, price } = req.body;
      // const result = await updatePrinter.execute({ id, name, price });
      // return res.json({ success: result.isOk(), message: result.error() });
    }
  ),
};

export default Route;
