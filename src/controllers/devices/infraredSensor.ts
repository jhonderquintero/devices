import { ChildProcessWithoutNullStreams } from "child_process"
import { Request, Response } from "express"
import { executePythonScript } from "../../helpers/python_run"

export const infraredSensorDetection = (req: Request, res: Response) => {
  const queryParams = req.query
  const { pin } = queryParams

  if (!pin) return res.status(400).json({ error: "Missing out pin" })
  console.log(pin)

  const script: ChildProcessWithoutNullStreams = executePythonScript("devices/infrared_sensor.py", [
    `--pin=${pin}`,
    // "--timeout_ms=5000",
  ])

  script.addListener("exit", (code) => {
    if (code == 1) {
      res.json({ detection: true })
    } else {
      res.json({ detection: false })
    }
  })
}
