import { Module } from "@types";
import controller from "./infra/route.express";

export const printer: Module = {
  controller: controller,
};
