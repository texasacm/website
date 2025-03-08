import Header from './Header';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Middle content or placeholder */}
      <main className="flex-1 p-4 bg-gray-100">
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/about' element={<About/>} />
          <Route path='/resources' element={<Resources/>} />
          <Route path='/faq' element={<Faq/>} />
          <Route path='/cs-a-to-z' element={<AtoZ/>} />
          <Route path='/calendar' element={<Calendar/>} />
          <Route path='/corporate' element={<Corporate/>} />
          <Route path='/forms' element={<Forms/>} /> */}
        </Routes>
        {/* You can put your main content or routes here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
