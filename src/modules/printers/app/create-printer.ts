import {
  PrinterInterfaceRepository,
  Printer,
  PrinterProps,
} from "../domain/Printer";

export class CreatePrinterUseCase {
  constructor(private readonly repository: PrinterInterfaceRepository) {}

  async execute(dto: PrinterProps): Promise<Printer | null> {
    try {
      const printer = Printer.create(dto);
      const saved = await this.repository.create(printer);
      return saved;
    } catch (error: any) {
      return null;
      // return Result.fail(error.message);
    }
  }
}

export default CreatePrinterUseCase;
