import { use } from "react";
import { users } from "../../data";

export async function GET(req: Request, {params} : {
    params: Promise<{id : string}>
}) {
    const {id} =  await params;

    console.log("age: ", id)

    const filteredUsers = users.find((user) => user.age === parseInt(id));

    return  Response.json(filteredUsers)

}

export async function PATCH(req: Request, {params} : {
    params: Promise<{id: string}>
}) {
    const {id} = await params;

    const index = users.findIndex((user) => user.age == parseInt(id));

    console.log("index is: ", index);

    users[index] = {
        ...users[index],
        name: "Changed Name"
    }
    
    return Response.json(users[index]);
}

export async function DELETE(req: Request, {params} : {
    params: string
}) {
    const {id} = await params;

    const index = users.findIndex(user => user.age === parseInt(id));

    const removedUser = users[index];

    users.splice(index, 1);

    return Response.json(removedUser)
}