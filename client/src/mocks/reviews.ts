import { Review } from "../types/review";

const reviews: Review[] = [
    {
        id: 'd9f4b091-24af-43c6-8adb-711db3fe6c5b',
        comment: 'The room was spacious and clean. The pool looked nothing like the photos.',
        date: "2023-06-29T21:00:00.465Z",
        user: {
            name: "Isaac",
            avatarUrl: "../img/avatar-max.jpg",
            isPro: true
        },
        rating: 4
    }
]

export { reviews };