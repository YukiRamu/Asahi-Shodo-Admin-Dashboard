export const sortAsc = (item) => {
  return {
    type: "sortAsc",
    payload: item
  };
};

export const sortDesc = (item) => {
  return {
    type: "sortDesc",
    payload: item
  };
};

export const getAllStudent = (studentList) => {
  return {
    type: "getAllStudent",
    payload: studentList
  };
};

export const getAllTuition = (tuitionList) => {
  return {
    type: "getAllTuition",
    payload: tuitionList
  };
};


