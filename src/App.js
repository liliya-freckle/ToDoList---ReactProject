import './App.css';
import Header from './components/header/Header'
import NavBar from './components/navBar/NavBar'
import Content from './components/content/Content'
import LogInPage from './components/login/LogInPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Missing from './components/navBar/Missing';
import News from './components/news/News';
import NewsPage from './components/news/NewsPage';

function App() {
  let userLoggedIn = true;

  const news = [{
    id: 1,
    text: "homosapiens solo tundino",
  },
  {
    id: 2,
    text: "como so yamos",
  },
  {
    id: 3,
    text: "quanto pedro",
  }]

  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/news" element={<News news={news} />} />
          <Route path="/news/:id" element={<NewsPage news={news} />} />
          <Route path="*" element={<Missing />} />


        </Routes>



      </div>
    </Router>
  );
}

export default App;
