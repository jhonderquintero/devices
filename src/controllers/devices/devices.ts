import { Request, Response } from "express"
import { executeCameraScriptSync } from "../../helpers/python_run"

export const imageGenerator = (req: Request, res: Response) => {
  const result = executeCameraScriptSync("img.jpg")
  if (result)
    return res.status(200).sendFile(path.join(__dirname, "../../../img.jpg"))
  else
    return res.status(500).json({
      ok: false,
      msg: "An error was ocurred",
    })
}
