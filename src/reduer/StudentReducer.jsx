
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
      console.log(action.payload);
      return { ...state, studentList: state.studentList.sort((a, b) => b[action.payload].localeCompare(a[action.payload])) };
    case 'sortAsc':
      console.log(action.payload);
      return { ...state, studentList: state.studentList.sort((a, b) => a[action.payload].localeCompare(b[action.payload])) };
    default:
      return state;
  }
};

export default StudentReducer; 