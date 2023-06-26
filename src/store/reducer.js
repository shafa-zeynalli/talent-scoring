const initialState = {
    selectValues: {
        select1: '',
        select2: '',
        select3: '',
        confirm: ''
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SELECT_VALUES':
            return {
                ...state,
                selectValues: action.payload, 
            };
        default:
            return state;
           
    }
};

export default reducer;
