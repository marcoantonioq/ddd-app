import Printer, {
  PrinterProps,
  PrinterInterfaceRepository,
} from "../domain/Printer";

export class GetPrinters {
  constructor(private readonly repoPrinter: PrinterInterfaceRepository) {}

  async execute(): Promise<PrinterProps[] | []> {
    return (await this.repoPrinter.getPrinters()).map(
      (printer) => printer.props
    );
  }
}

export default GetPrinters;
