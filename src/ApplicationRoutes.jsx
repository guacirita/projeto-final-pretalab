import { BrowserRouter, Route, Routes,} from 'react-router-dom'

import Menu from './Components/Menu/Menu'
import Footer from './Components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Comments from './pages/Comments/Comments'
import Contact from './pages/Contact/Contact'
import Lista  from '../src/pages/List/Lista'


function ApplicationRoutes(){
    return(
        <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/list" element={<Lista />} />
        </Routes> 
        <Footer />
        </BrowserRouter>
    )
}

export default ApplicationRoutes