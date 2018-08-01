// Action types

const TOGGLE = 'www.laboratoriodigital.pe/projectLockedDialog/TOGGLE';
// const UPDATE_CAMPUS = 'www.laboratoriodigital.pe/projectNewDialog/UPDATE_CAMPUS';
const RESET = 'www.laboratoriodigital.pe/projectLockedDialog/RESET';

// Action Creators
export const toggleProjectLockedDialog = () => ({
  type: TOGGLE,
});

// export const updateProjectNewDialogPublicAdmission = bool => ({
//   type: UPDATE_PUBLIC_ADMISSION,
//   payload: bool,
// });

export const resetProjectLockedDialog = () => ({
  type: RESET,
});


const initialState = {
  open: false,
  errors: {},
  key: '',
  isInProgress: false,
};

// Reducer
export default (state = { ...initialState }, action = {}) => {
  switch (action.type) {
    case TOGGLE:
      return { ...state, open: !state.open, key: '' };
    // case UPDATE_PUBLIC_ADMISSION:
    //   return { ...state, publicAdmission: !!action.payload };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
