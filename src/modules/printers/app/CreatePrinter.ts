import { IUseCase, IHandle } from "rich-domain/types";
import { Result } from "types-ddd";
import Printer from "../domain/Printer";
import Repository from "../infra/repository";

export interface CreatePrinter {
  name: string;
  price: number;
}

export class CreatePrinterUseCase
  implements IUseCase<CreatePrinter, Result<void>>
{
  constructor(
    private readonly repo: Repository,
    private readonly event?: IHandle<Printer>
  ) {}

  async execute(dto: CreatePrinter): Promise<Result<void>> {
    try {
      const printer = Printer.create(dto).value();
      //   printer.addEvent(this.event);
      await this.repo.create(printer);
      return Result.Ok();
    } catch (error: any) {
      return Result.fail(error.message);
    }
  }
}

export default CreatePrinterUseCase;
