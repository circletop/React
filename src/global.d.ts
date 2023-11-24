export {}
 
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: function
    }
    type RootState = ReturnType<import("@/store").getState>
}
