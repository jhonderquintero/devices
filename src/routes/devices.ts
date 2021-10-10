import { Router } from "express"
import { imageGenerator } from "../controllers/devices/cam"
import { pwmGenerator } from "../controllers/devices/pwm"
import { NeuralNetwork } from "../controllers/NN/NN"
import { validateErrors } from "../middlewares/errorsValidation"

const router: Router = Router()

// GETS
router.get("/devices/pwm-generator", [validateErrors], pwmGenerator)

// POSTS
router.post("/devices/image-generator", [validateErrors], imageGenerator)
// @ts-ignore
router.get("/NN/classify", [validateErrors], NeuralNetwork)

export default router
