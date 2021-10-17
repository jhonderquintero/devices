import { Request, Response } from "express"
import { executeCameraScriptSync } from "../../helpers/python_run"
import path from "path"

export const imageGenerator = (req: Request, res: Response) => {
  const result = executeCameraScriptSync("~/devices/images/img.jpg")
  if (result)
    return res
      .status(200)
      .sendFile(path.join(__dirname, "../../../images/img.jpg"))
  else
    return res.status(500).json({
      ok: false,
      msg: "An error was ocurred",
    })
}
