import { Printer as DBPrinter } from "@prisma/client";
import { IsString, IsBoolean } from "class-validator";

export interface PrinterProps extends DBPrinter {}

export class PrinterDTO implements PrinterProps {
  id!: number;
  @IsBoolean()
  allow!: boolean;
  @IsString()
  name!: string;
  @IsString()
  path!: string;
  @IsString()
  description!: string | null;
  @IsString()
  localization!: string | null;
  @IsString()
  connection!: string | null;
  @IsString()
  definitions!: string | null;
  @IsString()
  driver!: string | null;
  groups!: string | null;
  icon!: string | null;
  status!: boolean;
  selected!: boolean;
  month_count!: number;
  quota_period!: number;
  page_limite!: number;
  k_limit!: number;
  modified!: Date;
  created!: Date;
}

export class Printer {
  public props: Required<PrinterDTO>;
  private constructor(props: PrinterProps) {
    this.props = Object.assign(new PrinterDTO(), { ...props });
  }

  public static create(props: PrinterProps): Printer {
    return new Printer(props);
  }

  toJSON() {
    return JSON.stringify(this.props);
  }
}

export interface PrinterInterfaceRepository {
  getPrinterById(id: number): Promise<Printer | null>;
  create(printer: Printer): Promise<Printer | null>;
  getPrinters(): Promise<Printer[] | []>;
  update(printer: Printer): Promise<void>;
}

export default Printer;
