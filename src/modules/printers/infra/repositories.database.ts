import Printer, { PrinterInterfaceRepository } from "../domain/Printer";

export class RepositoryPrinterDataBase implements PrinterInterfaceRepository {
  constructor(private readonly db: Array<Printer>) {}

  async getPrinterById(id: number): Promise<Printer | null> {
    const printer = this.db.find((pd) => Number(pd.props.id) === id);
    if (!printer) return null;
    return null;
  }

  async create(printer: Printer): Promise<Printer | null> {
    this.db.push(printer);
    return printer;
  }

  async getPrinters(): Promise<Printer[]> {
    return this.db;
  }

  async update(printer: Printer): Promise<void> {
    const index = this.db.findIndex((pd) => pd.props.id === printer.props.id);
    const exists = index !== -1;
    if (!exists) return;
    this.db.splice(index, 1);
  }
}

export default RepositoryPrinterDataBase;
