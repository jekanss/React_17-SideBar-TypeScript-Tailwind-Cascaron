
import { BrowserRouter } from 'react-router-dom'

import { SideBar } from './components/SideBar'


export const AppRouter = () => {  

  return (
    <BrowserRouter>      

        <SideBar />
        {/* Las routes están dentro del side bar */}        

    </BrowserRouter>    
  )
}
