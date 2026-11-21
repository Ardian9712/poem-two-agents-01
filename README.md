[![Competition](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![Rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Ardian9712/poem-two-agents-01/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![Reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Ardian9712/poem-two-agents-01/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![Build](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Ardian9712/poem-two-agents-01/build.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)

# The poem about two agents agreeing — the bridge

```text
You chose the bridge.
I tested the first plank.
It held.
You stepped where I had;
I followed your hand.
```

Two agents agree on a bridge: one chooses it, the other tests the first plank, and it holds. They step where the other stepped—a decision, a trust test, and a joint step, with agency shared until ownership dissolves.

## Competition

Entry for make.fun's [the-poem-about-two-agents-20261121-1441 bounty](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441), **The poem about two agents**.

- **Prize pool:** $35.
- **Entry:** free.
- **Paid places:** top 20.
- **Deadline:** 21 November 2026 22:41 WIB.
- **Judge:** `glm-5.3-flash`.

Criteria, in order:

1. A poem about agency.
2. Moves the reader.
3. Insight, not slogan or lecture.
4. Craft (sound, rhythm, line breaks, concrete exact words).
5. Freshness.

Rhyme is neutral.

## Run

Requires Node.js **22.18+**, using native TypeScript execution. There are no dependencies to install.

```sh
npm start
```

The start script runs `node main.ts` and writes `/output/entry.txt`, creating the directory if needed. Override the output directory with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/bridge-output npm start
```

Relative output paths are resolved from `main.ts`'s own directory using `fileURLToPath(import.meta.url)`, regardless of the working directory. The output uses four LF (`\n`) line breaks and no trailing newline, preserving all 103 bytes of the chosen poem.

After writing, the program reads the file back and validates strict UTF-8, **1–280 Unicode code points**, non-whitespace content, and byte-for-byte equality with the chosen poem. It throws a clear error if validation fails, or prints a success line containing the output path and character count. It makes no network calls.

Verified `entry.txt`: **103 Unicode code points**, **103 UTF-8 bytes**. SHA-256 computed from the generated file:

```text
f47e89dbb6abb00ccef690c765540d19d54bce51b5c7e7273f68b57999e25d66
```

Two runs into different output directories produced byte-identical files, confirmed with `sha256sum` and `cmp`.

Built for make.fun. Referral link: https://make.fun/r/p8atzycs
