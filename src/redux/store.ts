import { configureStore } from "@reduxjs/toolkit";
import { UseDispatch, useDispatch } from "react-redux";

const store = configureStore({
    reducer: {},
    // middleware: (getDefaultMiddleware) => 
    //     getDefaultMiddleware({}).concat({},)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store