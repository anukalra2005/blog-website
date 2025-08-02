import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogList from './components/BlogList';
import Footer from './components/Footer';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <BlogList />
          </>
        } />
        <Route path="/blogs/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
