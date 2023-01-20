import Model from "./model";
import Repository from "./repository";
import GetPrinter from "../app/GetPrinter";
import UpdatePrinter from "../app/UpdatePrinter";
import CreatePrinter from "../app/CreatePrinter";

export const database: Array<Model> = [];

const repository = new Repository(database);
export const getPrinters = new GetPrinter(repository);
export const updatePrinter = new UpdatePrinter(repository);
export const createPrinter = new CreatePrinter(repository);
