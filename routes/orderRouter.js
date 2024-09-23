import { Router } from "express";
const router = Router()
import { getAllOrders, getOrder, createOrder, updateOrder, getCurrentUserOrders } from "../controllers/orderController.js";
import { validateOrder, validateOrderIdParam } from "../middleware/validationMiddleware.js";
import { authenticateUser, authorizePermissions } from "../middleware/authMiddleware.js";


router.route('/').get(authenticateUser, authorizePermissions('admin'), getAllOrders).post(authenticateUser, createOrder)

router.route('/showAllMyOrders').get(authenticateUser, getCurrentUserOrders);

router.route('/:id').get(validateOrderIdParam, authenticateUser, getOrder).patch(validateOrderIdParam, authenticateUser, updateOrder)


export default router