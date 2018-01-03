import {Dish} from '../beans/dish';
import { User } from './user';

export class DishReview {
    id: number;
    description: string;
    rating: number;
    submitted: string;
    user: User;
    dish: Dish;
}
