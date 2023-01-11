//data fetch

export const getData = async () => {
  try {
    //API data fetch
    const res = await fetch('https://randomuser.me/api/?results=50');
    if (!res.ok) {
      throw res.statusText;
    } else {
      const studentData = await res.json();
      return studentData.results;
    }
  } catch (error) {
    console.error(`Failed to fetch student Data. Error= ${error}`);
  }
};