import Printer from "@modules/printers/domain/Printer";
import RepositoryInterface from "@modules/printers/domain/repository";
import PrinterModel from "./model";

export class Repository implements RepositoryInterface {
  constructor(private readonly db: Array<PrinterModel>) {}

  async getProductById(id: string): Promise<Printer | null> {
    const product = this.db.find((pd) => pd.id === id);
    if (!product) return null;
    return null;
  }

  async create(product: Printer): Promise<void> {
    this.db.push(product.toObject());
    // DomainEvents.dispatch({ eventName: "ProductCreated", id: product.id });
  }

  async getProducts(): Promise<PrinterModel[]> {
    return this.db;
  }

  async update(product: Printer): Promise<void> {
    const index = this.db.findIndex((pd) => pd.id === product.id.value());
    const exists = index !== -1;
    if (!exists) return;
    this.db.splice(index, 1);
    this.db.push(product.toObject());
  }
}

export default Repository;
