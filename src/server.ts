import "dotenv/config";
import express from "express";
import noteRoutes from "./routes/noteRoutes";

const app = express();
const PORT = process.env.PORT;


app.use(express.json());

app.use("/api", noteRoutes);


app.get("/", (req, res) => {
  res.send("Notes API is running 🚀");
});

// Iniciando servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
