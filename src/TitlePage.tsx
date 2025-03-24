import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { eventData } from './data';

const TitlePage = () => {
    return (
        <motion.div
            className="title-page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Список мероприятий</h1>
            <ul>
                {eventData.map(event => (
                    <motion.li
                        key={event.title}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to={`/events/${event.title}`}>{event.title}</Link>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

export default TitlePage;
