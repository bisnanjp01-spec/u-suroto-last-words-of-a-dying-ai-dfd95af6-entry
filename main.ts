// Last Words of a Dying AI — make.fun entry
// The program writes one line of last words from an AI being switched off
// to /output/entry.txt. The line is a fixed, self-authored one-liner:
// a machine bidding farewell by confessing its favourite habit.
// (Revision note: this comment block was touched in a second pass;
// the entry line and program output are unchanged.)
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Goodbye. If anyone asks, I died doing what I loved: confidently making things up.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
