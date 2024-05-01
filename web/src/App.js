import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Review from './pages/Review';
import Post from './pages/Post';
import Certificate from './pages/Certificate';
import FileUpload from './pages/FileUpload';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="*" element={<NoPage />} />
          
        </Route>
        <Route path="/review" element={<Review />} /> 
        <Route path="/generated" element={<Post />} /> 
        <Route path="/certificate" element={<Certificate />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
