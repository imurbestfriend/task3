import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TitlePage from './TitlePage';
import EventPage from './EventPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<TitlePage />} />
                <Route path="/events/:titlePage" element={<EventPage />} />
            </Routes>
        </Router>
    );
};

export default App;
