import { ChildProcess, exec } from "child_process"
import { Request, Response } from "express"

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
  const script: ChildProcess = exec("ServoMotor.py", [
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
