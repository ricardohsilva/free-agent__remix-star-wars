import { PrismaClient } from '@prisma/client';
import { IImage } from '~/shared/interfaces/image.interface';
import { IToy } from '~/shared/interfaces/toy.interface';
const db = new PrismaClient();


async function seed() {
    await Promise.all(
        getToys().map(async toy => {
            await db.toy.create({ data: toy })
        })
    );

    await Promise.all(
        getImages().map(async image => {
            await db.image.create({ data: image })
        })
    );
}

seed();

function getToys() {
    const toys: IToy[] = [
        {
            id: 1,
            name: 'LEGO Imperial Star Destroyer',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 2,
            name: 'LEGO R2-D2',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 3,
            name: 'Boba Fett (Re-Armored)',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 4,
            name: 'The Child Real Moves Plush by Mattel',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 5,
            name: 'LEGO Darth Vader Helmet',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 6,
            name: 'LEGO Imperial Probe Droid',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 7,
            name: 'Darth Vader Diamond Gallery',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 8,
            name: 'The Mandalorian Talking Action Figure',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 9,
            name: 'Chewbacca Cuddleez Plush',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 10,
            name: 'Star Wars: Troopers Deluxe',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 11,
            name: 'The Child Bounty Collection',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 12,
            name: 'The Child with Frog Pop',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 13,
            name: 'LEGO Imperial Star Destroyer',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 14,
            name: 'LEGO R2-D2',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 15,
            name: 'Boba Fett (Re-Armored)',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 16,
            name: 'The Child Real Moves Plush by Mattel',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 17,
            name: 'LEGO Darth Vader Helmet',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 18,
            name: 'LEGO Imperial Probe Droid',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 19,
            name: 'Darth Vader Diamond Gallery',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 20,
            name: 'The Mandalorian Talking Action Figure',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 21,
            name: 'Chewbacca Cuddleez Plush',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 22,
            name: 'Star Wars: Troopers Deluxe',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 23,
            name: 'The Child Bounty Collection',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 24,
            name: 'The Child with Frog Pop',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 25,
            name: 'LEGO Imperial Star Destroyer',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 26,
            name: 'LEGO R2-D2',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 27,
            name: 'Boba Fett (Re-Armored)',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 28,
            name: 'The Child Real Moves Plush by Mattel',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 29,
            name: 'LEGO Darth Vader Helmet',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 30,
            name: 'LEGO Imperial Probe Droid',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 31,
            name: 'Darth Vader Diamond Gallery',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 32,
            name: 'The Mandalorian Talking Action Figure',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 33,
            name: 'Chewbacca Cuddleez Plush',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 34,
            name: 'Star Wars: Troopers Deluxe',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 35,
            name: 'The Child Bounty Collection',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 36,
            name: 'The Child with Frog Pop',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 37,
            name: 'LEGO Imperial Star Destroyer',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 38,
            name: 'LEGO R2-D2',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 39,
            name: 'Boba Fett (Re-Armored)',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 40,
            name: 'The Child Real Moves Plush by Mattel',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 41,
            name: 'LEGO Darth Vader Helmet',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 42,
            name: 'LEGO Imperial Probe Droid',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 43,
            name: 'Darth Vader Diamond Gallery',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 44,
            name: 'The Mandalorian Talking Action Figure',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 45,
            name: 'Chewbacca Cuddleez Plush',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 46,
            name: 'Star Wars: Troopers Deluxe',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 47,
            name: 'The Child Bounty Collection',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 48,
            name: 'The Child with Frog Pop',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 49,
            name: 'LEGO Imperial Star Destroyer',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 50,
            name: 'LEGO R2-D2',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 51,
            name: 'Boba Fett (Re-Armored)',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 52,
            name: 'The Child Real Moves Plush by Mattel',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 53,
            name: 'LEGO Darth Vader Helmet',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 54,
            name: 'LEGO Imperial Probe Droid',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 55,
            name: 'Darth Vader Diamond Gallery',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 56,
            name: 'The Mandalorian Talking Action Figure',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 57,
            name: 'Chewbacca Cuddleez Plush',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 58,
            name: 'Star Wars: Troopers Deluxe',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 59,
            name: 'The Child Bounty Collection',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 60,
            name: 'The Child with Frog Pop',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 61,
            name: 'LEGO Imperial Star Destroyer',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 62,
            name: 'LEGO R2-D2',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 63,
            name: 'Boba Fett (Re-Armored) - Promo Error',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 64,
            name: 'The Child Real Moves Plush by Mattel',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 65,
            name: 'LEGO Darth Vader Helmet',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 66,
            name: 'LEGO Imperial Probe Droid',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 67,
            name: 'Darth Vader Diamond Gallery',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 68,
            name: 'The Mandalorian Talking Action Figure',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 69,
            name: 'Chewbacca Cuddleez Plush',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 70,
            name: 'Star Wars: Troopers Deluxe',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 71,
            name: 'The Child Bounty Collection',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 72,
            name: 'The Child with Frog Pop',
            price: Math.floor(Math.random() * 700),
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]
    return toys
}

function getImages() {
    const images: IImage[] = [
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093169?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093169-1?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093169-6?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093841?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093841-3?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6106048384034?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6106048384034-1?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103045513521?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103045513521-1?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093784?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093784-1?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093786?fmt=webp&qlt=70&wid=2000&hei=2000",
            toyId: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093786-1?fmt=webp&qlt=70&wid=2000&hei=2000",
            toyId: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093786-6?fmt=webp&qlt=70&wid=2000&hei=2000",
            toyId: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047453425?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 7,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047453425-2?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 7,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047453425-3?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 7,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047624066?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 8,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047624066-2?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 8,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/1234041283434?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 9,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/1234041283434-3?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 9,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6107000443903?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6107000443903-1?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101045463896?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 11,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101045463896-2?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 11,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047373439?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 12,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093169?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 13,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093169-1?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 13,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093169-6?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 13,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093841?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093841-3?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6106048384034?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 15,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6106048384034-1?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 15,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103045513521?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 16,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103045513521-1?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 16,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093784?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 17,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093784-1?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 17,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093786?fmt=webp&qlt=70&wid=2000&hei=2000",
            toyId: 18,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093786-1?fmt=webp&qlt=70&wid=2000&hei=2000",
            toyId: 18,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093786-6?fmt=webp&qlt=70&wid=2000&hei=2000",
            toyId: 18,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047453425?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047453425-2?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047453425-3?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047624066?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047624066-2?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/1234041283434?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 21,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/1234041283434-3?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 21,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6107000443903?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 22,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6107000443903-1?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 22,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101045463896?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 23,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101045463896-2?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 23,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047373439?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 24,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093169?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 25,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093169-1?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 25,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093169-6?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 25,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093841?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 26,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093841-3?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 26,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6106048384034?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 27,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6106048384034-1?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 27,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103045513521?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 28,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103045513521-1?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 28,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093784?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 29,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093784-1?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 29,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093786?fmt=webp&qlt=70&wid=2000&hei=2000",
            toyId: 30,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093786-1?fmt=webp&qlt=70&wid=2000&hei=2000",
            toyId: 30,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093786-6?fmt=webp&qlt=70&wid=2000&hei=2000",
            toyId: 30,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047453425?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047453425-2?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047453425-3?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047624066?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 32,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047624066-2?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 32,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/1234041283434?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 33,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/1234041283434-3?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 33,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6107000443903?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 34,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6107000443903-1?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 34,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101045463896?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 35,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101045463896-2?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 35,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047373439?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 36,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093169?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 37,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093169-1?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 37,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093169-6?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 37,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093841?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093841-3?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6106048384034?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 39,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6106048384034-1?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 39,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103045513521?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103045513521-1?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093784?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 41,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093784-1?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 41,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093786?fmt=webp&qlt=70&wid=2000&hei=2000",
            toyId: 42,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093786-1?fmt=webp&qlt=70&wid=2000&hei=2000",
            toyId: 42,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093786-6?fmt=webp&qlt=70&wid=2000&hei=2000",
            toyId: 42,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047453425?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 43,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047453425-2?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 43,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047453425-3?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 43,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047624066?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 44,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047624066-2?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 44,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/1234041283434?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 45,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/1234041283434-3?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 45,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6107000443903?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 46,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6107000443903-1?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 46,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101045463896?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 47,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101045463896-2?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 47,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047373439?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 48,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093169?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093169-1?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093169-6?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093841?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 50,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093841-3?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 50,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6106048384034?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 51,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6106048384034-1?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 51,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103045513521?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 52,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103045513521-1?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 52,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093784?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 53,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093784-1?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 53,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093786?fmt=webp&qlt=70&wid=2000&hei=2000",
            toyId: 54,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093786-1?fmt=webp&qlt=70&wid=2000&hei=2000",
            toyId: 54,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093786-6?fmt=webp&qlt=70&wid=2000&hei=2000",
            toyId: 54,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047453425?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 55,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047453425-2?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 55,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047453425-3?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 55,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047624066?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 56,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047624066-2?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 56,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/1234041283434?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 57,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/1234041283434-3?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 57,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6107000443903?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 58,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6107000443903-1?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 58,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101045463896?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 59,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101045463896-2?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 59,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047373439?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 60,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093169?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 61,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093169-1?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 61,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093169-6?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 61,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093841?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 62,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093841-3?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 62,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6106048384034?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 63,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6106048384034-1?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 63,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103045513521?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103045513521-1?fmt=webp&qlt=70&wid=1030&hei=1030",
            toyId: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093784?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 65,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093784-1?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 65,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093786?fmt=webp&qlt=70&wid=2000&hei=2000",
            toyId: 66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093786-1?fmt=webp&qlt=70&wid=2000&hei=2000",
            toyId: 66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047093786-6?fmt=webp&qlt=70&wid=2000&hei=2000",
            toyId: 66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047453425?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 67,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047453425-2?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 67,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047453425-3?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 67,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047624066?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 68,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101047624066-2?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 68,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/1234041283434?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 69,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/1234041283434-3?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 69,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6107000443903?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 70,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6107000443903-1?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 70,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101045463896?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 71,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6101045463896-2?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 71,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            imageSrc: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6103047373439?fmt=webp&qlt=70&wid=1399&hei=1399",
            toyId: 72,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        



    ]
    return images
}