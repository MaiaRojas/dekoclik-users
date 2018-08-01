// Action types
const TOGGLE = 'www.laboratoriodigital.pe/designerDetailDialog/TOGGLE';
// const UPDATE_COURSE = 'www.laboratoriodigital.pe/designerDetailDialog/UPDATE_COURSE';
const RESET = 'www.laboratoriodigital.pe/designerDetailDialog/RESET';


// Action Creators
export const toggleDesignerDetailDialog = () => ({
  type: TOGGLE,
});

// export const updatedesignerDetailDialog = course => ({
//   type: UPDATE_COURSE,
//   payload: course,
// });

export const resetDesignerDetailDialog = () => ({
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
