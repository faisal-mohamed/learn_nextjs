import { users } from "./data"



export  async function GET() {
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
