import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { MainPage } from './pages/MainPage';
import { MissionStoryPage } from './pages/MissionStoryPage';
import { TeamPartnersPage } from './pages/TeamPartnersPage';
import { DocsReportsPage } from './pages/DocsReportsPage';
import { CurrentProjectsPage } from './pages/CurrentProjectsPage';
import { SuccessfulStoriesPage } from './pages/SuccessfulStoriesPage';
import { ContactPage } from './pages/ContactPage';
import { ScrollHandler } from './components/ScrollHandler';







function App() {
  return (
    
      <BrowserRouter>
        <ScrollHandler>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route>
                <Route path='/mission' element={<MissionStoryPage />} />
                <Route path='/team' element={<TeamPartnersPage />} />
                <Route path='/docs' element={<DocsReportsPage />} />
                <Route path='/current' element={<CurrentProjectsPage />} />
                <Route path='/successful' element={<SuccessfulStoriesPage />} />
                <Route path='/contacts' element={<ContactPage />} />
            </Route>
            <Route path='*' element={<h1> ERROR 404 </h1>} />
        </Routes>
        </ScrollHandler>
    </BrowserRouter>
   
  
  );
}

export default App;
