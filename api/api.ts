export * from './projectController.service';
import { ProjectControllerService } from './projectController.service';
export * from './userController.service';
import { UserControllerService } from './userController.service';
export const APIS = [ProjectControllerService, UserControllerService];
