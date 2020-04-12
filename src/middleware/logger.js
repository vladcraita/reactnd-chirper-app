const logger = (store) => (next) => (action) => {
    console.group("The action: ", action);
    const value = next(action);
    console.log("The new state is: ", store.getState());
    console.groupEnd();
    return value;
};

export default logger;
