import { createStore } from "redux";
const tasks = [

]
const initialState = {
    tasks: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "load_tasks":
            return {
                ...state,
                tasks: tasks,
            };
        case "add_task":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        default:
            return state;
    }
};

export const loadTasks = () => ({
    type: "load_tasks"
});

export const addTask = (value) => ({
    type: "add_task",
    payload: value,
});

const store = createStore(reducer);

export default store;