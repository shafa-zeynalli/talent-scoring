export const updateSelectValue = (selectValues) => {
    return {
        type: 'UPDATE_SELECT_VALUES',
        payload: selectValues,
    };
};
export const updateLangValue = (selectValues) => {
    return {
        type: 'UPDATE_LANG_VALUES',
        payload: selectValues,
    };
};

 