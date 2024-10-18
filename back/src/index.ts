

import dotenv from "dotenv";
dotenv.config({ path: "./src/config/.env" });

import { DB_PORT, PORT } from "./config/envs";
import { AppDataSource } from "./config/data-source";
import server from "./server/server";

(async () => {
  try {
    await AppDataSource.initialize(); 
    console.log(`Database connected on port ${DB_PORT}`);
    server.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
})();