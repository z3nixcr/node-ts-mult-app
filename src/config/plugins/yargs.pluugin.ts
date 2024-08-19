import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base de la tabla de multiplicación",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Límite de la tabla de multiplicación",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Mostrar la tabla de multiplicación",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "multiplication-table",
    describe: "Nombre de la tabla de multiplicación",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: "./outputs",
    describe: "Path de destino de la tabla de multiplicación",
  })
  .check((argv, _) => {
    if (isNaN(argv.b) || argv.b < 1)
      throw "Error: base must be greater than 0";
    if (isNaN(argv.l) || argv.l < 1)
      throw "Error: limit must be greater than 0";

    return true;
  })
  .parseSync();