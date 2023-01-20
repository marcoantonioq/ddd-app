import { Aggregate, Ok, Result, UID } from "types-ddd";

export interface PrinterProps {
  id?: string;
  name: string;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Printer extends Aggregate<PrinterProps> {
  private constructor(props: PrinterProps) {
    super(props);
  }

  public static create(props: PrinterProps): Result<Printer> {
    return Ok(new Printer(props));
  }
}

export default Printer;
