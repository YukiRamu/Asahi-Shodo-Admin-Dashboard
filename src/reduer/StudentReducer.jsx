
const initialStudentList = [];
const classList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const StudentReducer = (state = initialStudentList, action) => {
  switch (action.type) {
    case 'getAllStudent':
      return action.payload;
    case 'sortDesc':
      if (action.payload === 'name') {
        return state.sort((a, b) => b.name.localeCompare(a.name));
      } else {
        return state.sort((a, b) => classList.indexOf(b.class) > classList.indexOf(a.class) ? -1 : 1);
      }
    case 'sortAsc':
      if (action.payload === 'name') {
        return state.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        return state.sort((a, b) => classList.indexOf(a.class) > classList.indexOf(b.class) ? -1 : 1);
      }
    default:
      return state;
  }

};

export default StudentReducer; 