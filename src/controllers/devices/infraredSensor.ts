import { ChildProcessWithoutNullStreams } from "child_process"
import { Request, Response } from "express"
import { executePythonScript } from "../../helpers/python_run"

export const infraredSensorDetection = (req: Request, res: Response) => {
  const queryParams = req.query
  const { pin, timeout } = queryParams
  let script: ChildProcessWithoutNullStreams

  if (!pin) return res.status(400).json({ error: "Missing out pin" })

  if (!timeout) {
    script = executePythonScript("devices/infrared_sensor.py", [`--pin=${pin}`])
  } else {
    script = executePythonScript("devices/infrared_sensor.py", [
      `--pin=${pin}`,
      `--timeout_ms=${timeout}`,
    ])
  }

  script.addListener("exit", (code) => {
    if (code == 1) {
      res.json({ detection: true, error: false })
    } else if (code == 0) {
      res.json({ detection: false, error: false })
    } else {
      res.json({
        detection: undefined,
        error: true,
        errorMessage:
          "No pin selected, sensor cannot be executed without specify a pin",
      })
    }
  })
}
