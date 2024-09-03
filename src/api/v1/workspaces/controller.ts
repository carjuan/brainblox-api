import { Request, RequestHandler, Response } from 'express';

interface IWorkspacesController {
  get: RequestHandler;
}

class WorkspacesController implements IWorkspacesController {
  get: RequestHandler = (req: Request, res: Response) => {
    console.log(req);
    res.send('you reached /api/v1/workspaces endpoint');
  };
}

const controller = new WorkspacesController();

export default controller;
