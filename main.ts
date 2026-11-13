// make.fun coolest-art-01 bounty entry
// Copies entry.png to MAKEFUN_OUTPUT_DIR (default /output)
import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const src = path.join(path.dirname(fileURLToPath(import.meta.url)), "entry.png");
const destDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

await mkdir(destDir, { recursive: true });
await copyFile(src, path.join(destDir, "entry.png"));
console.log(`Copied entry.png -> ${destDir}/entry.png`);
