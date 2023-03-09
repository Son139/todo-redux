export const addTodo = (data) => {
    return {
        type: "todoList/addTodo",
        payload: data,
    };
};

export const toggleStatus = (id) => {
    return {
        type: "todoList/toggleStatus",
        payload: id,
    };
};

export const searchFilter = (text) => {
    return {
        type: "filters/searchFilter",
        payload: text,
    };
};

export const selectStatusFilter = (status) => {
    return {
        type: "filters/selectStatusFilter",
        payload: status,
    };
};

export const selectPriorityFilter = (priorities) => {
    return {
        type: "filters/selectPrioritiesFilter",
        payload: priorities,
    };
};
