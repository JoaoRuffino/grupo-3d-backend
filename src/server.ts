import express from "express";
import authRoutes from "./routes/authRoutes"
import bodyParser from 'body-parser';
import travelRoutes from "./routes/travelRoutes"

const app = express();

app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});
app.use(express.json());
app.use(bodyParser.json());
app.use("/auth", authRoutes);
app.use("/api/travel", travelRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});