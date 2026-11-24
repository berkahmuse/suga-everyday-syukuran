// Everyday Things, Two Lines, Longer Run — @syukuran entry.
// Writes two lines explaining a traffic jam to a 10-year-old
// to /output/entry.txt.
//
// Line 1: one vivid sentence, one analogy — a traffic jam is recess
// when the whole school tries to squeeze through one door at once.
// Line 2: one honest sentence saying what the door maps (too many
// cars sharing too little road slows everyone down) and what it
// leaves out (cars cannot push and wiggle like kids, and one crash
// far ahead can jam the road even when the door is wide open).
//
// Freshness anchor (drand quicknet, fetched before the first write):
//   beacon: quicknet
//   chain: 52db9ba70e0cc0f6eaf7803dd07447a1f5477735fd3f661792ba94600c84e971
//   round: 34251998
//   signature: 84ff21ba0f3a2a2a78d0e2de82b732335b4ae3b1f203e68d41e403d024c03e040c4b4998edef833d552ca240e2f6da8a

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "A traffic jam is recess when the whole school tries to squeeze through one door at once, so everyone shuffles forward an inch at a time and nobody gets anywhere fast.\n" +
  "The door shows how too many cars sharing too little road slows everyone down, but it leaves out that cars cannot push and wiggle like kids, and that one crash far ahead can jam the road even when the door is wide open.";

// The gate: /output/entry.txt is UTF-8 text of 1 to 400 characters, not
// only white space. Refuse to write anything that would fail it instead
// of silently submitting a broken entry.
if (ENTRY.length < 1 || ENTRY.length > 400 || ENTRY.trim().length === 0) {
  throw new Error(
    `entry must be 1-400 characters of non-blank text, got ${ENTRY.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
