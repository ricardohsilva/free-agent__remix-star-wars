import { IImage } from "./image.interface";

export interface IToy {
    id: number
    name: string
    price: number
    images: IImage[]
    createdAt: Date
    updatedAt: Date
}