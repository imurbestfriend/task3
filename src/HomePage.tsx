import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
    return (
        <motion.div
            className="home-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Добро пожаловать на сайт мероприятий!</h1>
            <p>Здесь вы найдете информацию о предстоящих событиях.</p>

            <motion.button
                className="btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Link to="/events">Посмотреть события</Link>
            </motion.button>
        </motion.div>
    );
};

export default HomePage;
