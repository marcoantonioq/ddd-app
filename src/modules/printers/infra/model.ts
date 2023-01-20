import { PrinterModel as Model } from "@modules/printers/domain/repository";

export class PrinterModel implements Model {
  id!: string;
  name!: string;
  price!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

export default PrinterModel;
