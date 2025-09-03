import express from "express";
import authRoutes from "./routes/authRoutes"
import bodyParser from 'body-parser';

const app = express();

app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});
app.use(express.json());
app.use(bodyParser.json());
app.use("/auth", authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});