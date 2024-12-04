export const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);        
        localStorage.setItem("tasks", serializedState);
    } catch (e) {
        console.error("Could not save state to local storage:", e);
    }
};

export const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("tasks");
        console.log(JSON.parse(serializedState));
        
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (e) {
        console.error("Could not load state from local storage:", e);
        return undefined;
    }
};
