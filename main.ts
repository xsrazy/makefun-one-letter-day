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

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LETTER = "Z";

// The harness runs the program in a sandbox whose output directory is
// /output; OUTPUT_DIR lets a local run point somewhere else.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, LETTER, "utf8");
