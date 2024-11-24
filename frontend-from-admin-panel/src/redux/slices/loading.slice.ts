import { createSlice } from "@reduxjs/toolkit";

interface loading {
    [key: string]: boolean,
}
const initialState: loading = {
    nothing : true,
}
/**LOADING DETAILS SLICE */
export const LoadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoading: (state, { payload } : { payload: { [key: string] : boolean }}) => {
            const [key, value] = Object.entries(payload)[0]; // Assuming only one key-value pair
            state[key] = value;
        },
    },
});

/**ACTIONS FOR SLICE*/
export const { setLoading, } = LoadingSlice.actions;
