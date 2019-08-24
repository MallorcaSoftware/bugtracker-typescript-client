export * from './bugEntryController.service';
import { BugEntryControllerService } from './bugEntryController.service';
export * from './bugEntryReportingController.service';
import { BugEntryReportingControllerService } from './bugEntryReportingController.service';
export * from './projectController.service';
import { ProjectControllerService } from './projectController.service';
export * from './userController.service';
import { UserControllerService } from './userController.service';
export const APIS = [BugEntryControllerService, BugEntryReportingControllerService, ProjectControllerService, UserControllerService];
