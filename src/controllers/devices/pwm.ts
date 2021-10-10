import { ChildProcess } from "child_process"
import { Request, Response } from "express"
import { executePythonScript } from "../../helpers/python_run"

/**
 * @param req
 * @param res
 * @returns
 */
export const pwmGenerator = (req: Request, res: Response) => {
  const params = req.params
  const { pin, mode } = params

  if (!pin) return res.status(400).json({ error: "Missing PWM out pin" })

  if (!mode || (mode !== "mid" && mode !== "max" && mode !== "min")) {
    return res.status(400).json({ error: "Invalid PWM mode passed" })
  }

  // @ts-ignore
  const script: ChildProcess = executePythonScript("devices/servo.py", [
    `--GPIO_PIN=${pin}`,
    `--mode=${mode}`,
  ])

  script.addListener("exit", (code) => {
    if (code == 0) {
      res.json({ done: true })
    } else {
      res.json({ done: false })
    }
  })
}
