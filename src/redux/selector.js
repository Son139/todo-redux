import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priorities;
// export const todoListSelector = (state) => {
//     const searchText = searchTextSelector(state);
//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(searchText);
//     });
//     return todoRemaining;
// };

// export const searchTextSelector = (state) => {
//     return state.filters.search;
// };

export const todoRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritySelector,
    (todoList, status, searchText, priorities) => {
        searchText = searchText || "";
        status = status || "All";
        priorities = priorities || [];
        // console.log(searchText);
        console.log(status);
        return todoList.filter((todo) => {
            if (status === "All") {
                // console.log(priorities);
                // console.log(todo.priority);
                return priorities.length
                    ? todo.name.includes(searchText) &&
                          todo.priority.includes(priorities)
                    : todo.name.includes(searchText);
                // return todo.name.includes(searchText);
            }
            return (
                todo.name.includes(searchText) &&
                (status === "Completed" ? todo.completed : !todo.completed) &&
                (priorities.length ? priorities.includes(todo.priority) : true)
            );
        });
    },
);
