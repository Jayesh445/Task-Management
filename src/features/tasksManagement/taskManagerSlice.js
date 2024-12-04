import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage, saveToLocalStorage } from "../../utils/LocalStorageSaver";

export const TaskStatus = Object.freeze({
    PENDING: 'pending',
    IN_PROCESS: 'inProcess',
    COMPLETED: 'completed',
});

const initialState = {
    tasks: loadFromLocalStorage() || []
}
const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log(action);
            state.tasks.push(action.payload)
            saveToLocalStorage(state.tasks);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
            saveToLocalStorage(state.tasks);
        },
        updateTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id)
            if (index > 0) {
                state.tasks[index] = action.payload
                saveToLocalStorage(state.tasks);
            }
        },
        toggleTaskStatus: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                if (task.status === TaskStatus.PENDING) {
                    task.status = TaskStatus.IN_PROCESS;
                } else if (task.status === TaskStatus.IN_PROCESS) {
                    task.status = TaskStatus.COMPLETED;
                } else {
                    task.status = TaskStatus.PENDING;
                }
                saveToLocalStorage(state.tasks);
            }
        },
    }
})

export const { addTask, deleteTask, updateTask, toggleTaskStatus } = taskSlice.actions;

export default taskSlice.reducer;