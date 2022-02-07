import { db } from "./db.service"

export async function getToys(sortDirection: string | null) {
    const data = await new Promise(async (resolve) => {
        setTimeout(async () => {
            const data = {
                toys: await db.toy.findMany({
                    take: 30,
                    orderBy: { price: sortDirection === 'desc' || sortDirection === 'asc' ? sortDirection : 'desc' },
                    include: {
                        images: true,
                    }
                }),
                count: await db.toy.count()
            }
            resolve(data)
        }, 0)
    });
    return data;
}