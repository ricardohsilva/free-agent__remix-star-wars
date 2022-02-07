import { db } from "./db.service"

export async function getToys(sortDirection: string | null, name: string | null, delay: number) {
    const data = await new Promise(async (resolve) => {
        setTimeout(async () => {
            const data = {
                toys: await db.toy.findMany({
                    orderBy: { price: sortDirection === 'desc' || sortDirection === 'asc' ? sortDirection : 'desc' },
                    include: {
                        images: true,
                    },
                    where: {
                        name: { contains: name ? name : '' }
                    }
                }),
                count: await db.toy.count()
            }
            resolve(data)
        }, delay)
    });
    return data;
}