import { ChildProcess } from "child_process"
import { Request, Response } from "express"
import { executePythonScript } from "../../helpers/python_run"

export const setRaspberryPinOutput = (req: Request, res: Response) => {
  const bodyParams = req.body
  const { pin, status } = bodyParams
  console.log(req.body)
  if (!pin) return res.status(400).json({ error: "Missing out pin" })
  if (!status) return res.status(400).json({ error: "Missing out status" })

  const script: ChildProcess = executePythonScript("devices/GPIO.py", [
    `--GPIO_PIN=${pin}`,
    `--OUTPUT=${status}`,
  ])

  script.addListener("exit", (code) => {
    if (code == 1) {
      res.status(200).json({ done: true })
    } else {
      res.status(200).json({ done: false })
    }
  })
}
