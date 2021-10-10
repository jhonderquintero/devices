import { Router } from "express"
import { imageGenerator } from "../controllers/devices/devices"
import { NeuralNetwork } from "../controllers/NN/NN"
import { validateErrors } from "../middlewares/errorsValidation"

const router: Router = Router()

router.get("/devices/image-generator", [validateErrors], imageGenerator)

// @ts-ignore
router.get("NN/classify", [validateErrors], NeuralNetwork)

export default router
