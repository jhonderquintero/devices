import { Router } from "express"
import { imageGenerator } from "../controllers/devices/cam"
import { infraredSensorDetection } from "../controllers/devices/infraredSensor"
import { pwmGenerator } from "../controllers/devices/pwm"
import { neuralNetwork } from "../controllers/NN/NN"
import { validateErrors } from "../middlewares/errorsValidation"

const router: Router = Router()

// GETS
router.get("/devices/pwm-generator", [validateErrors], pwmGenerator)

router.get("/devices/IRsensor", [validateErrors], infraredSensorDetection)

router.get("/NN/classification", [validateErrors], neuralNetwork)

// router.get("")

// POSTS
router.post("/devices/image-generator", [validateErrors], imageGenerator)

export default router
