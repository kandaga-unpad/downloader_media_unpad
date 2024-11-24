const urlList = [
  "link_to_media_unpad.pdf",
  "link_to_media_unpad_2.pdf",
]

const folderPath = "./files";

try {
  const folderInfo = await Deno.stat(folderPath);
  if (!folderInfo.isDirectory) {
    throw new Error(`${folderPath} is not a directory`);
  }
} catch (error) {
  if (error instanceof Deno.errors.NotFound) {
    await Deno.mkdir(folderPath);
  } else {
    throw error;
  }
}
for (const url of urlList) {
  const fileName = url.split("/").pop();
  const filePath = `${folderPath}/${fileName}`;

  const response = await fetch(url);
  if (!response.ok) {
    console.error(`Failed to download ${url}: ${response.statusText}`);
    continue;
  }

  using file = await Deno.open(filePath, { create: true, write: true });
  const writableStream = file.writable.getWriter();
  const reader = response.body?.getReader();

  if (reader) {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      await writableStream.write(value);
    }
  }

  await writableStream.close();
  console.log("File downloaded: ", filePath);
}