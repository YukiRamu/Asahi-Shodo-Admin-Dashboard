
const initialStudentList = {
  studentList: [],
  tuitionList: []
};
const classList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const StudentReducer = (state = initialStudentList, action) => {
  switch (action.type) {
    case 'getAllStudent':
      return { ...state, studentList: action.payload };
    case 'getAllTuition':
      return { ...state, tuitionList: action.payload };
    case 'sortDesc':
      if (action.payload === 'name') {
        return { ...state, studentList: state.studentList.sort((a, b) => b.name.localeCompare(a.name)) };
      } else if (action.payload === 'class') {
        return { ...state, studentList: state.studentList.sort((a, b) => classList.indexOf(b.class) > classList.indexOf(a.class) ? -1 : 1) };
      }
    case 'sortAsc':
      if (action.payload === 'name') {
        return { ...state, studentList: state.studentList.sort((a, b) => a.name.localeCompare(b.name)) };
      } else if (action.payload === 'class') {
        return { ...state, studentList: state.studentList.sort((a, b) => classList.indexOf(a.class) > classList.indexOf(b.class) ? -1 : 1) };
      }
    default:
      return state;
  }

};

export default StudentReducer; 