import Layout from '../Layout/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Feeling from '../Form/Feeling';
import Understanding from '../Form/Understanding';
import Support from '../Form/Support';
import Comments from '../Form/Comments';
import Review from '../Form/Review';
import Confirmation from '../Confirmation/Confirmation';
import Admin from '../Admin/Admin';

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
          <Route path={'/confirmation'} element={<Confirmation />} />
          <Route path={'/admin'} element={<Admin />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
