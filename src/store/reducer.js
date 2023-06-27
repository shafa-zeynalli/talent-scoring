const initialState = {
    selectValues: {
        select1: '',
        select2: '',
        select3: '',
        confirm: '',
        select4: '',
        select5: '',
        select6: '',
        confirm2: ''
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SELECT_VALUES':
            console.log(action.payload)
            return {
                ...state,
                selectValues: action.payload, 

            };
        default:
            return state;
           
    }
};

export default reducer;
