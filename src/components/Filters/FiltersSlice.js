const initState = {
    filters: {
        search: "",
        status: "",
        priorities: [],
    },
};

const filtersReducer = (state = initState, action) => {
    switch (action.type) {
        case "filters/searchFilter":
            return { ...state, search: action.payload };
        case "filters/selectStatusFilter":
            return { ...state, status: action.payload };
        case "filters/selectPrioritiesFilter":
            return { ...state, priorities: action.payload };
        default:
            return state;
    }
};

export default filtersReducer;
