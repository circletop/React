export {}
 
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: function;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: function
    }
    type RootState = ReturnType<import("@/store").getState>
}
