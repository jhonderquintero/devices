import express, { Application } from "express"
import cors from "cors"
import dotenv from "dotenv"
import morgan from "morgan"
import devices from "./src/routes/devices"
dotenv.config()

const app: Application = express()

// Settings
app.set("port", process.env.PORT)

// Middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use("/", devices) // devices route

// Running server
app.listen(app.get("port"), () =>
  console.log("Server running at port " + app.get("port"))
)

export default app
