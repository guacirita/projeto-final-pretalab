import { BrowserRouter, Route, Routes,} from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Comments from './pages/Comments/Comments'
import Contact from './pages/Contact/Contact'

function ApplicationRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/contact" element={<Contact />} />
        </Routes> 
        </BrowserRouter>


    )
}

export default ApplicationRoutes