// Action types
const TOGGLE = 'www.laboratoriodigital.pe/confirmDialogOpen/TOGGLE';
// const UPDATE_COURSE = 'www.laboratoriodigital.pe/confirmDialogOpen/UPDATE_COURSE';
const RESET = 'www.laboratoriodigital.pe/confirmDialogOpen/RESET';


// Action Creators
export const toggleConfirmDialogOpen = () => ({
  type: TOGGLE,
});

// export const updateconfirmDialogOpen = course => ({
//   type: UPDATE_COURSE,
//   payload: course,
// });

export const resetConfirmDialogOpen = () => ({
  type: RESET,
});


const initialState = {
  open: false,
  course: '',
};


// Reducer
export default (state = { ...initialState }, action = {}) => {
  switch (action.type) {
    case TOGGLE:
      return { ...state, open: !state.open };
    // case UPDATE_COURSE:
    //   return { ...state, course: action.payload };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
