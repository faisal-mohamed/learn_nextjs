import { users } from "./data"
import { NextRequest } from "next/server";



export  async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;

    const query = searchParams.get("query");
    if(query) {
        const filteredUsers = users.filter(user => user.age === parseInt(query));
        return Response.json(filteredUsers);
    }
    return  Response.json(users);
}


export async function POST(req: Request) {
    const res = await req.json();
    console.log(res)
    
    const newUser = {
        name: res.name,
        age: res.age
    }

    users.push(newUser);

    return  Response.json(newUser)
}
