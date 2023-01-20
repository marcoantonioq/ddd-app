import RepositoryInterface, {
  PrinterModel,
} from "@modules/printers/domain/repository";
import { IUseCase } from "rich-domain/types";

export class GetProductsUseCase implements IUseCase<void, PrinterModel[]> {
  constructor(private readonly repo: RepositoryInterface) {}

  async execute(): Promise<PrinterModel[]> {
    return this.repo.getProducts();
  }
}

export default GetProductsUseCase;
