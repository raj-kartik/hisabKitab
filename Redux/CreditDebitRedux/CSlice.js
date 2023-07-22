import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    inputs:[]
};

const CSlice = createSlice({
    name:'creditDebit',
    initialState,
    reducers:{
        setCredit(state,action){
            state.inputs = [...state.inputs,action.payload];
            console.log(state.inputs);
        },
    },
})

console.log(CSlice);

export default CSlice.reducer;
export const {setCredit} = CSlice.actions;