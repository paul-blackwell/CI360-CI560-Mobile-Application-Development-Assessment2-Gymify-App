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
                sets: 0,
                reps: 0,
                maxWeight: 0,
                completed: false,
                images: [
                    { id: uuid(), source: require('../assets/images/plank-man.jpg'), alt: 'Man planking' },
                    { id: uuid(), source: require('../assets/images/plank-woman.jpg'), alt: 'Woman planking' }
                ],
                videos: []
            },
            {
                id: uuid(), title: 'Side lunges',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus orci, nulla magnis vulputate volutpat semper purus. Aliquam viverra orci,',
                time: 0.30,
                sets: 0,
                reps: 0,
                maxWeight: 0,
                completed: false,
                images: [
                    { id: uuid(), source: require('../assets/images/side-lunges-woman.jpg'), alt: 'Woman side lunge' },
                    { id: uuid(), source: require('../assets/images/side-lunges-man.jpg'), alt: 'Man side lunge' }
                ],
                videos: []
            },
            {
                id: uuid(), title: 'Pushups',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus orci, nulla magnis vulputate volutpat semper purus. Aliquam viverra orci,',
                time: 0,
                sets: 3,
                reps: 12,
                maxWeight: 0,
                completed: false,
                images: [
                    { id: uuid(), source: require('../assets/images/pushup-man-1.jpg'), alt: 'Man planking' },
                    { id: uuid(), source: require('../assets/images/pushup-man-2.jpg'), alt: 'Man planking' },
                    { id: uuid(), source: require('../assets/images/pushup-man-3.jpg'), alt: 'Man planking' }
                ],
                videos: []
            },
        ],
        exercises: [
            {
                id: uuid(), title: 'Bench press',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus orci, nulla magnis vulputate volutpat semper purus. Aliquam viverra orci,',
                time: 0,
                sets: 3,
                reps: 12,
                maxWeight: 30,
                completed: false,
                images: [
                    { id: uuid(), source: require('../assets/images/bench-press-man-1.jpg'), alt: 'Man bench press' },
                    { id: uuid(), source: require('../assets/images/bench-press-man-2.jpg'), alt: 'Man bench press' },
                ],
                videos: []
            },
            {
                id: uuid(), title: 'Chin up',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus orci, nulla magnis vulputate volutpat semper purus. Aliquam viverra orci,',
                time: 0,
                sets: 3,
                reps: 8,
                maxWeight: 0,
                completed: false,
                images: [
                    { id: uuid(), source: require('../assets/images/chin-up-man.jpg'), alt: 'Man Chin up' },
                ],
                videos: []
            },
            {
                id: uuid(), title: 'Treadmill',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus orci, nulla magnis vulputate volutpat semper purus. Aliquam viverra orci,',
                time: 10.00,
                sets: 0,
                reps: 0,
                maxWeight: 0,
                completed: false,
                images: [
                    { id: uuid(), source: require('../assets/images/treadmill-woman-1.jpg'), alt: 'Treadmill woman' },
                    { id: uuid(), source: require('../assets/images/treadmill-woman-2.jpg'), alt: 'Treadmill woman' },
                ],
                videos: []
            },
        ]
    },
]


export default defaultWorkouts;