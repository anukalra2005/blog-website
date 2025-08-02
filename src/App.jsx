import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogList from './components/BlogList';
import Footer from './components/Footer';
import BlogDetail from './components/BlogDetail';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <div id="blogs">
  <BlogList />
</div>


            
          </>
        } />
        <Route path="/blogs/:id" element={<BlogDetail />} />
      </Routes>
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
