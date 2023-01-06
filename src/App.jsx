import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wrapper from './features/wrapper/Wrapper';
import Dashboard from './pages/dashboard/Dashboard';
import Student from './pages/student/Student';
import Classroom from './pages/classroom/Classroom';
import Tuition from './pages/tuition/Tuition';

import NotFound from './pages/notFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/student' element={<Student />}></Route>
          <Route path='/classroom' element={<Classroom />}></Route>
          <Route path='/tuition' element={<Tuition />}></Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;