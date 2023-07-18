import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    inputs:{}
}

const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser(state,action){
            state.inputs = action.payload;
        }
    }
})

export default UserSlice.reducer;
export const {setUser} = UserSlice.actions;