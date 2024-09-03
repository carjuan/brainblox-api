import express from 'express';
import workspacesController from './controller';

const router = express.Router();

router.get('/', workspacesController.get);

export default router;
