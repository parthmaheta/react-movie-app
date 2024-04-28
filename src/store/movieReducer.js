import { createSlice } from "@reduxjs/toolkit";


const initialState={
    error:null,
    data:[],
    isLoading:false
}
const movie=createSlice({
    name:"MOVIES",
    initialState,
    reducers:{
        fetchData(state,action){
            
        },
        fetchSuccess(state,action){

        },
        fetchFail(state,action){

        }
    }
})

export const {fetchData,fetchFail,fetchSuccess} = movie.actions
export default  movie.reducer