import './App.css';
import Gallery from './Component/Gallery';
import Header from './Component/Header';
import Body from './Component/Body';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Review from './Component/Review';
import Footer from './Component/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path='/' element={ <Header /> } />
        </Routes>
        
        <div className='gallery'>
          <Gallery />
        </div>
        <div className='body'>
          <Body />
        </div>
        <div className='review'> 
          <Review />
        </div>
        <div className='footer'> 
          <Footer />
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
