import { FullOffer } from "../types/offer";

export const offers: FullOffer[] = [
    {
        "id": "e15b4c79-2225-4bb3-91b9-1d0589e56f44",
        "title": "Элегантная студия рядом с Монмартром",
        "description": "Уютная студия в творческом районе Парижа. Идеально для пар или одиночных путешественников.",
        "type": "apartment",
        "price": 160,
        "city": {
            "name": "Amsterdam",
            "location": {
                "latitude": 52.3909553943508,
                "longitude": 4.85309666406198,
                "zoom": 13
            }
        },
        "location": {
            "latitude": 52.3909553943508,
            "longitude": 4.85309666406198,
            "zoom": 16
        },
        "isFavorite": false,
        "isPremium": true,
        "rating": 4.7,
        "bedrooms": 1,
        "goods": [
            "Air conditioning",
            "Washer",
            "Towels"
        ],
        "host": {
            "name": "Angelina",
            "avatarUrl": "../img/avatar-angelina.jpg",
            "isPro": true
        },
        "images": [
            "../img/1.png",
            "../img/2.png",
            "../img/3.png",
            "../img/4.png",
            "../img/5.png",
            "../img/6.png"
        ],
        "maxAdults": 2
    },
    {
        "id": "a6478fe2-9de7-4cfc-832e-98bbf1aef6ec",
        "title": "Современные апартаменты у озера Альстер",
        "description": "Просторная квартира с панорамными окнами и быстрым доступом к центру города.",
        "type": "apartment",
        "price": 190,
        "city": {
            "name": "Amsterdam",
            "location": {
                "latitude": 52.3609553943508,
                "longitude": 4.85309666406198,
                "zoom": 13
            }
        },
        "location": {
            "latitude": 52.3609553943508,
            "longitude": 4.85309666406198,
            "zoom": 16
        },
        "isFavorite": false,
        "isPremium": false,
        "rating": 4.6,
        "bedrooms": 2,
        "goods": [
            "Fridge",
            "Laptop friendly workspace",
            "Breakfast"
        ],
        "host": {
            "name": "Angelina",
            "avatarUrl": "../img/avatar-angelina.jpg",
            "isPro": true
        },
        "images": [
            "../img/1.png",
            "../img/2.png",
            "../img/3.png",
            "../img/4.png",
            "../img/5.png",
            "../img/6.png"
        ],
        "maxAdults": 4
    },
    {
        "id": "6bb871a6-514a-4f20-9a0b-8e67b7f1b1cb",
        "title": "Квартира на берегу канала",
        "description": "Живописный вид из окна, рядом исторический центр и музеи.",
        "type": "apartment",
        "price": 210,
        "city": {
            "name": "Amsterdam",
            "location": {
                "latitude": 52.3909553943508,
                "longitude": 4.929309666406198,
                "zoom": 13
            }
        },
        "location": {
            "latitude": 52.3909553943508,
            "longitude": 4.929309666406198,
            "zoom": 16
        },
        "isFavorite": true,
        "isPremium": true,
        "rating": 4.8,
        "bedrooms": 2,
        "goods": [
            "Breakfast",
            "Baby seat",
            "Towels"
        ],
        "host": {
            "name": "Angelina",
            "avatarUrl": "../img/avatar-angelina.jpg",
            "isPro": true
        },
        "images": [
            "../img/1.png",
            "../img/2.png",
            "../img/3.png",
            "../img/4.png",
            "../img/5.png",
            "../img/6.png"
        ],
        "maxAdults": 3
    },
    {
        "id": "cf16c7c0-3055-408b-afd4-b8e831344ef3",
        "title": "Просторная квартира у Кёльнского собора",
        "description": "Удобная квартира с видом на знаменитый собор. Идеально подходит для туристов и деловых поездок.",
        "type": "apartment",
        "price": 180,
        "city": {
            "name": "Amsterdam",
            "location": {
                "latitude": 52.3809553943508,
                "longitude": 4.939309666406198,
                "zoom": 13
            }
        },
        "location": {
            "latitude": 52.3809553943508,
            "longitude": 4.939309666406198,
            "zoom": 16
        },
        "isFavorite": true,
        "isPremium": false,
        "rating": 4.9,
        "bedrooms": 2,
        "goods": [
            "Breakfast",
            "Air conditioning",
            "Laptop friendly workspace",
            "Baby seat",
            "Washer",
            "Towels",
            "Fridge"
        ],
        "host": {
            "name": "Angelina",
            "avatarUrl": "../img/avatar-angelina.jpg",
            "isPro": true
        },
        "images": [
            "../img/1.png",
            "../img/2.png",
            "../img/3.png",
            "../img/4.png",
            "../img/5.png",
            "../img/6.png"
        ],
        "maxAdults": 3
    },
    {
        "id": "cf16c7c0-3055-408b-afd4-b1e8313441f3",
        "title": "Интересные аппартаменнты в Париже",
        "description": "Удобная квартира",
        "type": "apartment",
        "price": 170,
        "city": {
            "name": "Paris",
            "location": {
                "latitude": 48.5112,
                "longitude": 2.2055,
                "zoom": 13
            }
        },
        "location": {
            "latitude": 48.5112,
            "longitude": 2.2055,
            "zoom": 16
        },
        "isFavorite": true,
        "isPremium": false,
        "rating": 4.1,
        "bedrooms": 2,
        "goods": [
            "Breakfast",
            "Air conditioning",
            "Laptop friendly workspace",
            "Baby seat",
            "Washer",
            "Towels",
            "Fridge"
        ],
        "host": {
            "name": "Angelina",
            "avatarUrl": "../img/avatar-angelina.jpg",
            "isPro": true
        },
        "images": [
            "../img/1.png",
            "../img/2.png",
            "../img/3.png",
            "../img/4.png",
            "../img/5.png",
            "../img/6.png"
        ],
        "maxAdults": 3
    }
]