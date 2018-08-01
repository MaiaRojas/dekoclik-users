import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';
import { firestoreReducer as firestore } from 'redux-firestore';
import signin from './signin';
import exercise from './exercise';
import topbar from './top-bar';
import projects from './projects';
import project from './project';
import projectDeleteDialog from './project-delete-dialog';
import projectLockedDialog from './project-locked-dialog';
import confirmDialogOpen from './designer-confirm-dialog';
import designerDetailDialog from './designer-detail-dialog';
import projectUserMoveDialog from './project-user-move-dialog';
// import projectCourseAddDialog from './project-course-add-dialog';
import quizConfirmationDialog from './quiz-confirmation-dialog';
import unitCardAdmin from './unit-card-admin';


export default combineReducers({
  firebase,
  firestore,
  router,
  signin,
  exercise,
  topbar,
  projects,
  project,
  projectDeleteDialog,
  projectLockedDialog,
  confirmDialogOpen,
  designerDetailDialog,
  projectUserMoveDialog,
  // projectCourseAddDialog,
  quizConfirmationDialog,
  unitCardAdmin,
});
