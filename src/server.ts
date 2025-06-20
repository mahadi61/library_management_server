import { Server } from "http";
import app from "./app";

let server: Server;

const PORT = 5000;

async function main() {
  try {
    server = app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

main();
