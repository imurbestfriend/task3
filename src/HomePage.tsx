import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Добро пожаловать на сайт мероприятий</h1>
            <div>
                <h2>Категории мероприятий:</h2>
                <ul>
                    <li><Link to="/IT">IT</Link></li>
                    <li><Link to="/Esports">Киберспорт</Link></li>
                    <li><Link to="/Festivals">Фестивали</Link></li>
                </ul>
            </div>
        </motion.div>
    );
};

export default HomePage;
