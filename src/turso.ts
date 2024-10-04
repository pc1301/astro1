import { createClient } from "@libsql/client/web";

export const turso = createClient({
  // url: import.meta.env.TURSO_DATABASE_URL,
  url: "libsql://mydb1-pc1301.turso.io",
  // authToken: import.meta.env.TURSO_AUTH_TOKEN,
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjgwNDE4OTcsImlkIjoiMjQyZGVjZmUtNDcxYy00ODkwLTkyZGYtMTU4Y2NhMTViYjUwIn0.XlALDRANudavZkkYf1r4Gt07IwUQm3IsoZ5JP5SieTmaXONCUwAIkpRq9Fo85MG5bWTXbhrQ7DR3ozWnbJcoAQ"
});