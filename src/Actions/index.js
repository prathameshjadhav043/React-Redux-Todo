export const addTodo = (fname, lname, username, city, State, zip) => {
    return {
        type: 'add_Todo',
        payload: {
            id: new Date().getTime().toString(),
            fname: fname,
            lname: lname,
            username: username,
            city: city,
            State: State,
            zip: zip,
        }
    }
}
export const delTodo = (id) => {
    return {
        type: 'del_Todo',
        payload: {
            key: id
        }
    }
}