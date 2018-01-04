import { User } from "./user";

export class Menu {
    id: number;
    address: string;
    phone: string;
    operation: string;
    about: string;
    name: string;
    // Foreign Keys
    admin: User;
}
