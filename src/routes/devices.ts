import { Request, Response, Router } from "express"
import { imageGenerator } from "../controllers/devices/devices"
import { validateErrors } from "../middlewares/errorsValidation"

const router: Router = Router()

router.get("/devices/image-generator", [validateErrors], imageGenerator)

export default router