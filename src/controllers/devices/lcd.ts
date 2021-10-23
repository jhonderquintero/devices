import { ChildProcessWithoutNullStreams } from "child_process"
import { Request, Response } from "express"
import { executePythonScript } from "../../helpers/python_run"

export const LCDDisplay = (req: Request, res: Response) => {
  const queryParams = req.query
  const { text } = queryParams
  let script: ChildProcessWithoutNullStreams

  if (!text) return res.status(400).json({ error: "Missing text to display" })

  script = executePythonScript("devices/LCDDisplay.py", [`--text=${text}`])

  script.addListener("exit", (code) => {
    if (code == 0) {
      res.json({ done: true })
    } else {
      res.json({ done: false })
    }
  })
}
