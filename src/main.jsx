import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'
import './index.css'
import AboutMe from './pages/about'
import Contact from './pages/contact'
import ProjectList from './pages/portfolio'
import Resume from './pages/resume'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        index: true,
        element:<AboutMe/>
      },
      {
        path:'/portfolio',
        element:<ProjectList/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/resume',
        element:<Resume/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
