import { z } from 'zod';


const eventSchema = z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    location: z.string(),
});


export type EventType = z.infer<typeof eventSchema>;


export const eventData: EventType[] = [
    {
        title: 'IT Конференция 2025',
        description: 'Тема: инновации в IT',
        date: '01.04.2025',
        location: 'Москва, Россия'
    },
    {
        title: 'Киберспортивный турнир',
        description: 'Лучшие команды мира соревнуются',
        date: '15.05.2025',
        location: 'Санкт-Петербург, Россия'
    },
    {
        title: 'Фестиваль технологий',
        description: 'Выставка новейших разработок',
        date: '10.06.2025',
        location: 'Казань, Россия'
    }
];


eventData.forEach(event => {
    eventSchema.parse(event);
});
