import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchMovies=createAsyncThunk("fetchMovies",async(payload)=>{
  
    const response =await fetch("./data.json");
    return await response.json();
})

const initialState={
    error:null,
    data:[],
    isLoading:false
}
const movie=createSlice({
    name:"MOVIES",
    initialState,    
    extraReducers:(builder)=>{
        builder.addCase(fetchMovies.pending,(state,action)=>{
            state.isLoading=true;
            state.error=null;
            state.data=[];
        })
        .addCase(fetchMovies.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
            state.error=null;
        })
        .addCase(fetchMovies.rejected,(state,action)=>{
            state.isLoading=false;
            state.data=[];
            state.error=action.error;
        })

    }
})

export const {fetchData,fetchFail,fetchSuccess} = movie.actions
export default  movie.reducer