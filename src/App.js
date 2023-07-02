import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Stage1 from './components/EducationItem/Stage1';
import Stage2 from './components/EducationItem/Stage2';
import Stage3 from './components/EducationItem/Stage3';
import Stage4 from './components/EducationItem/Stage4';
import Stage5 from './components/EducationItem/Stage5';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>,
    children: [
      {index: true, element: <Stage1/>},
      {path: 'stage2', element: <Stage2/>},
      {path: 'stage3', element: <Stage3/>},
      {path: 'stage4', element: <Stage4/>},
      {path: 'stage5', element: <Stage5/>},
    ]
  }
]);
function App() {
  
  return <RouterProvider router={router}/>
}

export default App;
