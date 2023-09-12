import { promises as fs } from "fs";
import { join } from "path";

export async function GET(request: Request) {
  const filePath = join(
    process.cwd(),
    "public",
    "assets",
    "Kishan_Kumar_SDE_FullStack_Resume.pdf"
  );

  // Read the file as a Buffer
  const fileBuffer = await fs.readFile(filePath);

  return new Response(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        "inline; filename=Kishan_Kumar_SDE_FullStack_Resume.pdf",
    },
  });
}
