import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { eventData } from './data';

const EventPage = () => {
    const { titlePage } = useParams<{ titlePage: string }>();

    // Используем filter + [0] вместо find
    const filteredEvents = eventData.filter(event => event.title === titlePage);
    const event = filteredEvents[0]; // Исправлено

    if (!event) {
        return <div className="error-message">Событие не найдено</div>;
    }

    return (
        <motion.div
            className="event-container"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="event-title">{event.title}</h1>
            <p className="event-description">{event.description}</p>
            <p><strong>Дата:</strong> {event.date}</p>
            <p><strong>Место:</strong> {event.location}</p>

            <motion.button
                className="btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Зарегистрироваться
            </motion.button>
        </motion.div>
    );
};

export default EventPage;
