import Printer from "./Printer";

export class PrinterModel {
  id!: string;
  name!: string;
  price!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

export interface DomainRepositoryInterface {
  create(product: Printer): Promise<void>;
  getProducts(): Promise<PrinterModel[]>;
  getProductById(id: string): Promise<Printer | null>;
  update(product: Printer): Promise<void>;
}

export default DomainRepositoryInterface;
