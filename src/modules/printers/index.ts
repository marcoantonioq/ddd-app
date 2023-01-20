import { Module } from "@types";
import controller from "./infra/controller";

export const printer: Module = {
  controller: controller,
};
