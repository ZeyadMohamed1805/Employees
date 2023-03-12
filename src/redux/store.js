import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "./slices/employeesSlice";

const store = configureStore({
    reducer: {
        employees: employeesSlice
    }
});

export default store;