import { Printer, PrinterInterfaceRepository } from "../domain/Printer";

export class GetPrintersByID {
  constructor(private readonly repoPrinter: PrinterInterfaceRepository) {}

  async execute(id: number): Promise<Printer | null> {
    return this.repoPrinter.getPrinterById(id);
  }
}

export default GetPrintersByID;
