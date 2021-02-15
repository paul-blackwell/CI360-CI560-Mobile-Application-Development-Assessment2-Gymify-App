import uuid from '../utils/uuid';



const defaultWorkouts = [
    {
        id: uuid(),
        title: '1st workout',
        warmUp: [
            { 
                id: uuid(), title: 'Plank',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus orci, nulla magnis vulputate volutpat semper purus. Aliquam viverra orci,', 
                time: 0.30, 
                sets: 0 , 
                reps: 0,
                completed: false,
                images: [
                    {uri: 'https://www.pexels.com/photo/man-working-out-2294361/', alt: ''}
                ]
            },
        ],
        exercises: [
            { id: uuid(), title: 'Bench press' }
        ]
    },
]


export default defaultWorkouts;