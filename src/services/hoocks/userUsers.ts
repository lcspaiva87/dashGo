import { useQuery } from 'react-query';
import {api} from '../api'

type User ={
    createAt: string;
    email: string;
    id: string;
    name: string;

}
interface Data{
    users:User[]
}
async function getUser(): Promise<User[]> {
    const {data} = await api.get<Data>('users')
    console.log("data:",data)
    const users = data.users.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createAt: new Date(user.createAt).toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
            }),

        }

    })
    return users
}
export function userUsers() {
    return useQuery('users',getUser, {
        staleTime: 1000 * 5,  //5 seconds
    })
}