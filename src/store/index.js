import { configureStore } from "@reduxjs/toolkit";
import movieStore from "./movieReducer"


export default configureStore({reducer:{MOVIES:movieStore}});