import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import CustomizedItSolutionsPage from './Pages/CustomizedItSolutionsPage';
import MobileAppDevelopmentPage from './Pages/MobileAppDevelopmentPage';
import SoftwareMaintenancePage from './Pages/SoftwareMaintenancePage';
import UiUxPage from './Pages/UiUxPage';
import ServicesPage from './Pages/ServicesPage';
import WebDesignPage from './Pages/WebDesignPage';
import WebDevelopmentPage from './Pages/WebDevelopmentPage';
import PortfolioPage from './Pages/PortfolioPage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/aboutUs' element={<AboutPage/>}/>
          <Route path='/customizedItSolutions' element={<CustomizedItSolutionsPage/>}/>
          <Route path='/mobileAppDevelopment' element={<MobileAppDevelopmentPage/>}/>
          <Route path='/softwareMaintenance' element={<SoftwareMaintenancePage/>}/>
          <Route path='/uiux' element={<UiUxPage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/webDesign' element={<WebDesignPage/>}/>
          <Route path='/webDevelopment' element={<WebDevelopmentPage/>}/>
          <Route path='/portfolio' element={<PortfolioPage/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
