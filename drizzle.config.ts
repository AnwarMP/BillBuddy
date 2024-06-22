// import type { Config } from "drizzle-kit";
// import { defineConfig } from "drizzle-kit"
// import * as dotenv from "dotenv";
// dotenv.config({ path: ".env" });

// export default {
//   driver: 'postgressql',
//   schema: './src/lib/db/schema.ts',
//   dbCredentials: {
//     connectionString: process.env.DATABASE_URL,
//   }

// } satisfies Config

import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config({ path: ".env" });

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined in the environment variables");
}

export default defineConfig({
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: databaseUrl,
  }
});


// npx drizzle-kit push:pg