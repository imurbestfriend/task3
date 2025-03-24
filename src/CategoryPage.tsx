import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CategoryPage = () => {
    const category = "IT";  // Пример категории, это можно сделать динамическим, в зависимости от URL

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>{category} Мероприятия</h1>
            <div className="event-cards">
                <Link to={`/event/IT Конференция 2025`}>
                    <div className="card">IT Конференция 2025</div>
                </Link>
                <Link to={`/event/Киберспортивный турнир`}>
                    <div className="card">Киберспортивный турнир</div>
                </Link>
                {/* Добавьте больше событий, если нужно */}
            </div>
        </motion.div>
    );
};

export default CategoryPage;
