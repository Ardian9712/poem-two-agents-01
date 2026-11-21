import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const poem = `You chose the bridge.
I tested the first plank.
It held.
You stepped where I had;
I followed your hand.`;

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const outputDirectory = resolve(
  scriptDirectory,
  process.env.MAKEFUN_OUTPUT_DIR ?? "/output",
);
const outputPath = join(outputDirectory, "entry.txt");

await mkdir(outputDirectory, { recursive: true });
await writeFile(outputPath, poem, "utf8");

const writtenBytes = await readFile(outputPath);
let writtenPoem: string;
try {
  writtenPoem = new TextDecoder("utf-8", { fatal: true }).decode(writtenBytes);
} catch {
  throw new Error(`Invalid entry at ${outputPath}: expected valid UTF-8 text.`);
}

const characterCount = [...writtenPoem].length;
if (characterCount < 1 || characterCount > 280) {
  throw new Error(
    `Invalid entry at ${outputPath}: expected 1–280 Unicode code points, got ${characterCount}.`,
  );
}
if (writtenPoem.trim().length === 0) {
  throw new Error(`Invalid entry at ${outputPath}: text must not be only whitespace.`);
}
if (!writtenBytes.equals(Buffer.from(poem, "utf8"))) {
  throw new Error(`Invalid entry at ${outputPath}: bytes differ from the chosen poem.`);
}

console.log(`Success: wrote ${outputPath} (${characterCount} Unicode code points).`);
