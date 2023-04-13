import express, {Application, Request, Response} from "express"
import cors from "cors"
import morgan from "morgan"
import ejs from "ejs"

const data = {
    name: "Savio",
    _id: 1234,
    color: "green"
}

export const Appconfig = (app: Application) => {
    app.use(express.json())
    .set("view engine", "ejs")
        .use(cors())
        .use(morgan(""))
        .use(express.static("public"))
        .use(express.static(`${__dirname} public/asset`))
        .use(express.static(`${__dirname} public/css`))
        

    app.get("/", (req: Request, res: Response) => {
        res.status(200).json({
            message: "Started and running"
        })
    })
        
app.get("/views", (req: Request, res: Response) => {
       res.render("index", data)
   })
    app.all("*", (req: Request, res: Response) => {
        res.json({message: `This route ${req.body} is not found` })
    })
}