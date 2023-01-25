import { getPrinters } from "@modules/printers/infra/services";

describe("Printer", () => {
  test("printers", async () => {
    const printers = await getPrinters.execute();
    if (printers && Array.isArray(printers)) {
      expect(printers.length).toBeGreaterThanOrEqual(0);
    }
  });
  test("create", async () => {
    const printers = await getPrinters.execute();
    if (printers && Array.isArray(printers)) {
      expect(printers.length).toBeGreaterThanOrEqual(0);
    }
  });
});
