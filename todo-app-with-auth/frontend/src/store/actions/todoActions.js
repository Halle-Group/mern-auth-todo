import instance from "../../api";

export const getTodos = () => {
    return(dispatch) => {
        instance.get('/todos')
        .then((todos) => {
            dispatch({
                type: "GET_TODOS",
                todos
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export const addTodo = (newTodo) => {
    return(dispatch) => {
        instance.post('/todos', newTodo)
        .then((todo) => {
            dispatch({
                type: "ADD_TODO",
                todo
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export const updateTodo = (updatedTodo, id) => {
    return(dispatch) => {
        instance.put(`/todos/${id}`, updatedTodo)
        .then((todo) => {
            dispatch({
                type: "UPDATE_TODO",
                todo
            })
        })
        .catch((error) => { 
            console.log(error)
        })
    }
}

export const deleteTodo = (id) => {
    return(dispatch) => {
        instance.delete(`/todos/${id}`)
        .then(() => {
            dispatch({
                type: "DELETE_TODO",
                id
            })
        })
        .catch((error) => { 
            console.log(error)
        })
    }
}