import express, {Application} from "express"
import { Appconfig } from "./App"

const app: Application = express()
Appconfig(app)

const server = app.listen(2003, () => {
    console.log("Server is up and running")
})

process.on("uncaughtExeption", (err: Error) => [
    console.log("Shutting down"),
    console.log(err),
    process.exit(1)
])

process.on("uncaughtExeption", (err: Error) => [
    console.log("Shutting down"),
    console.log(err),
    
])