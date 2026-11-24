// One Letter for Your Day — make.fun bounty u-puan-one-letter-for-your-day-e54e9c36
//
// The entry is exactly one letter, A to Z, standing for the word that
// describes the day. The letter is Z: behind it sits "zombie", a day spent
// shuffling through on zero sleep. Z is also the sleep letter itself (Zzz),
// so the letter fits its word in sound and shape.
//
// The gate requires /output/entry.txt to be UTF-8 text of exactly 1
// character, so the file holds the letter and nothing else: no trailing
// newline, no gloss, no punctuation.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LETTER = "Z";
const OUTPUT_FILE = "entry.txt";

// Guard: the entry must be exactly one capital letter, A to Z. If this
// ever fails the program stops before writing anything, rather than
// producing an invalid entry.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`Invalid entry letter: ${JSON.stringify(LETTER)}`);
}

// The harness runs the program in a sandbox whose output directory is
// /output; OUTPUT_DIR lets a local run point somewhere else. An empty
// OUTPUT_DIR falls back to /output, so a blank env var cannot break the run.
const outputDir = process.env.OUTPUT_DIR?.trim() || "/output";
const outputPath = join(outputDir, OUTPUT_FILE);

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, LETTER, "utf8");

// Self-verification: read the file back and confirm it holds exactly the
// one letter, byte for byte. The gate counts characters, so a stray newline
// or extra byte here would fail the entry; fail loudly instead.
const written = readFileSync(outputPath, "utf8");
if (written !== LETTER) {
  throw new Error(
    `Verification failed: expected exactly ${JSON.stringify(LETTER)}, got ${JSON.stringify(written)}`,
  );
}

console.log(`Wrote entry ${JSON.stringify(LETTER)} to ${outputPath}`);
