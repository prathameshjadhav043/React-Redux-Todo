const initialData = {
    data: []
}

const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case 'add_Todo':
            const { id, fname, lname, username, city, State, zip } = action.payload;
            return {
                ...state, data: [...state.data, {
                    id: id,
                    fname: fname,
                    lname: lname,
                    username: username,
                    city: city,
                    State: State,
                    zip: zip,
                }]
            }
        case 'del_Todo':
            const { key } = action.payload;
            const newdata = state.data.filter((e) => e.id !== key);
            return {
                ...state,
                data: newdata
            }

        default: return state;
    }
}

export default todoReducers;