import { Request, Response } from "express"
import {
  executeCameraScriptSync,
  executePythonScript,
} from "../../helpers/python_run"

export const neuralNetwork = (req: Request, res: Response): void => {
  const result = executeCameraScriptSync("../../../images/NN.jpg")
  const NNInstance = executePythonScript("NN.py", [
    "--image_path=./images/NN.jpg",
  ])

  NNInstance.stdout.on("data", (data: string) => {
    console.log(data)

    // if (data.startsWith("--classification=")) {
    //   res.json({
    //     done: true,
    //     classification: data,
    //   })
    // }
  })
}
