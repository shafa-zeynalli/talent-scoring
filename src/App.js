import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
// import EducationList from './components/EducationList/EducationList'
import Stage1 from './components/EducationItem/Stage1'
import Stage2 from './components/EducationItem/Stage2'
import Stage3 from './components/EducationItem/Stage3'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>,
    // errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Stage1/>},
      {path: 'stage2', element: <Stage2/>},
      {path: 'stage3', element: <Stage3/>},
      // {path: 'products/:productId', element: <ProductDetailPage/>},
    ]
  }
]);
function App() {
  
  return <RouterProvider router={router}/>
}

export default App;
