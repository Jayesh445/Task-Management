import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "../features/tasksManagement/taskManagerSlice";
import { saveToLocalStorage } from "../utils/LocalStorageSaver";

const store = configureStore({
    reducer: TaskReducer
})

store.subscribe(() => {
    saveToLocalStorage(store.getState().tasks);
})

export default store;