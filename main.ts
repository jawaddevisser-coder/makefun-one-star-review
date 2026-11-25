import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Judge brief: deadpan one-star review of an everyday essential, at most 160 characters — a real complaint filed in earnest against a thing that cannot be fixed.
const LINE =
  "★☆☆☆☆ The sun: no dimmer switch, no off button, and it wakes me up every morning without asking.";

// Self-check: the sealed gate accepts UTF-8 text of 1 to 160 characters, not only white space.
if ([...LINE].length < 1 || [...LINE].length > 160 || LINE.trim().length === 0) {
  throw new Error("entry fails the 1-160 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
