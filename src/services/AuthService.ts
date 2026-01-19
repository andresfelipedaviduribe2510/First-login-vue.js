import api from "./http";
import type{User} from "../models/User";

export class AuthService{

    static async login(email:string):Promise<User | null>{

        try {
            const response = await api.post<User>("/users/login", {
            email
            });

            const user = response.data;
            localStorage.setItem("user", JSON.stringify(user));

            return user;

        } catch (error) {
            console.log("Login error", error);
            return null;
        }
    }

    static async register(name:string, email:string):Promise<User | null>{
       try {
            const response = await api.post("/users/register",{
                name,
                email
            });

            const user = response.data;
            localStorage.setItem("user", JSON.stringify(user));

            return user;

        } catch (error) {
            console.error("register error", error);
            return null;
        }

    }

}