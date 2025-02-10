import * as esbuild from "npm:esbuild@0.24.0";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader@^0.11.0";
import { parseArgs } from "jsr:@std/cli/parse-args";

const config: esbuild.BuildOptions = {
    plugins: [...denoPlugins()],
    entryPoints: ["./main.ts"],
    outfile: "./public/main.js",
    bundle: true,
    format: "esm",
}

const args = parseArgs(Deno.args)

if (args.watch || args.serve) {
    const ctx = await esbuild.context(config);

    await ctx.watch()
    console.log("[esbuild.config.ts] Watching changes on files")

    if (args.serve) {
        const { host = "0.0.0.0", port = "8000" } = args

        await ctx.serve({
            servedir: "./public",
            host,
            port: Number(port),
        })

        console.log(`[esbuild.config.ts] Server started on http://${host}:${port}`)
    }
} else {
    await esbuild.build(config);
    console.log(`[esbuild.config.ts] ${config.outfile} builded`)
}