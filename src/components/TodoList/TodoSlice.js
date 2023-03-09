const initState = [
    { id: 1, name: "Learn Lol", completed: false, priority: "High" },
    { id: 2, name: "Learn Bia", completed: true, priority: "Medium" },
    { id: 3, name: "Learn Code", completed: false, priority: "Low" },
];

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return [...state, action.payload];

        case "todoList/toggleStatus":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo,
            );

        default:
            return state;
    }
};

export default todoListReducer;
