import { Router } from "express"
import { imageGenerator } from "../controllers/devices/cam"
import { infraredSensorDetection } from "../controllers/devices/infraredSensor"
import { LCDDisplay } from "../controllers/devices/lcd"
import { pwmGenerator } from "../controllers/devices/pwm"
import { setRaspberryPinOutput } from "../controllers/devices/raspberryOutput"
import { neuralNetwork } from "../controllers/NN/NN"
import { validateErrors } from "../middlewares/errorsValidation"

const router: Router = Router()

// GETS

router.get("/devices/IRsensor", [validateErrors], infraredSensorDetection)
router.get("/NN/classification", [validateErrors], neuralNetwork)
router.get("/devices/pwm-generator", [validateErrors], pwmGenerator)
router.get("/devices/lcd-display", [validateErrors], LCDDisplay)

// POSTS
router.post("/devices/setGPIO", [validateErrors], setRaspberryPinOutput)
router.post("/devices/image-generator", [validateErrors], imageGenerator)

export default router
