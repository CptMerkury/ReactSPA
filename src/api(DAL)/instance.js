import * as axios from "axios";

//Мы создаем instance axios.create, чтобы один раз прописать в него параметры и не дублировать их в каждом запросе
export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        //мы добавляем в headers api-key, чтобы сервер мог понять кто обращается к серверу.
        'API-KEY': '3a48cb66-64d9-4e3b-a80f-5d88883726bc'
    }
})