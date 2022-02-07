import { IComment } from "./comment.interface";
import { IImage } from "./image.interface";

export interface IToy {
    id?: number
    name: string
    price: number
    images?: IImage[]
    comments?: IComment[]
    createdAt: Date
    updatedAt: Date
}