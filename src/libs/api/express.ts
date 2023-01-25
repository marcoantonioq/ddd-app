import Express, { Express as IExpress } from "express";
import { Logger } from "types-ddd";
import { Module } from "../../types";
import express from "express";
import bodyParser from "body-parser";

export class Server {
  private constructor() {}

  static build(routes: Array<Module>): Server {
    if (!Server._app) Server._app = Express();
    Server.applyMiddleware(express.json);
    Server.applyMiddleware(bodyParser.json);
    Server.applyRoutes(routes);
    return Server;
  }

  private static applyRoutes(modules: Array<Module>): Server {
    modules.forEach((module) => {
      const { controller } = module;
      const methods: Array<keyof typeof controller> = Object.keys(
        controller
      ) as [];
      methods.forEach((method) => {
        Server._app.use(controller[method]);
      });
    });
    return Server;
  }

  public static applyMiddleware(middleware: any): void {
    Server._app.use(middleware());
  }

  static start(port: number = 8080): void {
    if (!Server._app) return Logger.error("Falha ao iniciar servidor!");
    const callback = () => Logger.info(`Executando na porta: ${port}`);
    Server._app.on("online", callback);
    Server._app.listen(port);
    Server._app.emit("online");
  }

  private static _app: IExpress;
}
