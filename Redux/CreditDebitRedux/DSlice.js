import {creatSlice} from '@reduxjs/toolkit'

const initialState={
    inputs:{},
}

const DSlice = creatSlice({
    name:'debit',
    initialState,
    reducers:{
        setDebit(state,action){
            state.inputs = action.payload
        }
    }
})

export default DSlice.reducer;
export const {setDebit} = DSlice.actions;