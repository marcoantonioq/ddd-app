import { Printer } from "../domain/Printer";
import RepositoryPrinterDataBase from "./repositories.database";
import GetPrintersByID from "../app/get-printers-by-id";
import GetPrinters from "../app/get-printers";
import CreatePrinter from "../app/create-printer";

export const database: Array<Printer> = [
  Printer.create({
    id: 0,
    allow: false,
    name: "",
    path: "",
    description: "",
    localization: "",
    connection: "",
    definitions: "",
    driver: "",
    groups: "",
    icon: "mdi-printer",
    status: false,
    selected: false,
    month_count: 0,
    quota_period: 0,
    page_limite: 0,
    k_limit: 0,
    modified: new Date(),
    created: new Date(),
  }),
];

const repository = new RepositoryPrinterDataBase(database);
export const getPrintersByID = new GetPrintersByID(repository);
export const getPrinters = new GetPrinters(repository);
export const createPrinter = new CreatePrinter(repository);
