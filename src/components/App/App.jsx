import React from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Feeling from '../Form/Feeling';
import Understanding from '../Form/Understanding';
import Support from '../Form/Support';
import Comments from '../Form/Comments';
import Review from '../Form/Review';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/feeling'} element={<Feeling />} />
          <Route path={'/understanding'} element={<Understanding />} />
          <Route path={'/support'} element={<Support />} />
          <Route path={'/comments'} element={<Comments />} />
          <Route path={'/review'} element={<Review />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
