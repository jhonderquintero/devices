import child, { ChildProcessWithoutNullStreams } from "child_process"

/**
 * Wrapper of the `child_process.spawn` method, to attach Standar I/O stream listeners and
 * error handlers.
 * @param {string} filePath The path that references the Python script to execute, from the
 * 'python_scripts' folder onwards. Example: `test/IR_sensor_test.py`.
 * @param {Array<string>} args The arguments to pass to the spawned Python script.
 */

export const executePythonScript = (
  filePath: string,
  args: string[] = [],
  type: string
): ChildProcessWithoutNullStreams => {
  const script: ChildProcessWithoutNullStreams = child.spawn("python", [
    `python_scripts/${filePath}`,
    ...args,
  ])

  script.stdout.on("data", (data = "") => {
    console.log(`Message from Python: ${data}`)
  })

  script.stderr.on("data", (data = "") => {
    console.error(`Error in Python: ${data}`)
  })

  script.addListener("exit", (code) => {
    console.log(`Script exit with code: ${code}, ${typeof code}`)
  })

  return script
}

/**
 *
 * @param {string} filePath
 * @returns {boolean}
 */
export const executeCameraScriptSync = (filePath: string): Boolean => {
  let state: Boolean = false

  try {
    const script = child.execSync(`raspistill -o ${filePath}`, {
      stdio: "ignore",
    })
    if (script) {
      state = true
    }
  } catch (error) {
    state = false
  }
  return true
}
