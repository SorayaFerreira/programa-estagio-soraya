import { exists } from "@std/fs";
import { App } from "./app.ts";
import { SqliteContaRepository } from "./data.ts";
import { HttpApp } from "./http.tsx";
import { Database } from "@db/sqlite";
import { CalculoSaldo } from "./core.ts";

async function main() {
  const existsDatabase = await exists("./bufunfa.db")

  const db = new Database("./bufunfa.db")

  if (!existsDatabase) {
    const schemaScript = await Deno.readTextFile("./schema.sql")

    db.exec(schemaScript)
  }

  const contaRepository = SqliteContaRepository({ db })
  const calculoSaldo = CalculoSaldo({contaRepository});
  const app = App({ contaRepository, calculoSaldo })
  const httpApp = HttpApp({ app })

  const server = Deno.serve(httpApp.fetch)

  await server.finished
}

main()