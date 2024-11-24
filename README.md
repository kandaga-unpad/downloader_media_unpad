
## Installation

Download Deno with your own Operating System

MacOS / Linux  :
```bash
  curl -fsSL https://deno.land/install.sh | sh
```

Windows (with PowerShell) :
```bash
  irm https://deno.land/install.ps1 | iex
```

then run the `main.ts` file with all permission :
```bash
  deno run -A main.ts
```

or you can compile it to exe if you want :
```bash
  deno compile -A main.ts
```

or if you want only specify the allowed permission :
```bash
  deno run --allow-net --allow-read --allow-write main.ts
```