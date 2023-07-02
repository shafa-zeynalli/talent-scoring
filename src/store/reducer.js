const initialState = {
    selectValues: {
        num1: '',
        num2: '',
        num3: '',
        num4: '',
        name1: '',
        lname: '',
        select1: '',
        select2: '',
        select3: '',
        confirm: '',
        select4: '',
        select5: '',
        select6: '',
        confirm2: '',
    },
    langValues: {
        confirmlang1: '',
        confirmlang2: '',
        confirmlang3: '',
        selectLang: '',
        selectIelts: '',
        selectToefl: '',
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SELECT_VALUES':
            console.log(action.payload)
            return {
                ...state,
                selectValues: { ...state.selectValues, ...action.payload },

            };
        case 'UPDATE_LANG_VALUES':
            console.log(action.payload)
            return {
                ...state,
                langValues: { ...state.langValues, ...action.payload },

            };
        default:
            return state;

    }
};

export default reducer;
