import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TitlePage from './TitlePage';
import EventPage from './EventPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TitlePage />} />
                <Route path="/:titlePage" element={<EventPage />} />
            </Routes>
        </Router>
    );
};

export default App;
