
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

## Edit Array of URL List
Before you can download, please add array of url you wanted to download : 
```typescript
  const urlList = [
    "link_to_media_unpad.pdf",
    "link_to_media_unpad_2.pdf",
  ]
```
change to :
```typescript
  const urlList = [
    "https://media.unpad.ac.id/path_you_want_to_download",
    "https://media.unpad.ac.id/path_you_want_to_download_2.pdf",
  ]
```

## Run File
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