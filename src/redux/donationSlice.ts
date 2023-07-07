import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Donation} from "@/utility/types";

const initialState: Donation = {
    date: "",
    time: "",
    category: "",
    charityTargets: [],
    city: "",
    courierNote: "",
    location: "",
    phoneNumber: "",
    postCode: "",
    quantity: "0",
    specifiedOrganization: "",
    street: ""
}

export const donationSlice = createSlice({
    name: "donation",
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        setQuantity: (state, action: PayloadAction<string>) => {
            state.quantity = action.payload;
        },
        setLocation: (state, action: PayloadAction<string>) => {
            state.location = action.payload;
        },
        setTargets: (state, action: PayloadAction<string[]>) => {
            state.charityTargets = action.payload;
        },
        setSpecifiedOrganization: (state, action: PayloadAction<string>) => {
            state.specifiedOrganization = action.payload;
        },
        setStreet: (state, action: PayloadAction<string>) => {
            state.street = action.payload;
        },
        setCity: (state, action: PayloadAction<string>) => {
            state.city = action.payload;
        },
        setPostCode: (state, action: PayloadAction<string>) => {
            state.postCode = action.payload;
        },
        setPhoneNumber: (state, action: PayloadAction<string>) => {
            state.phoneNumber = action.payload;
        },
        setDate: (state, action: PayloadAction<string>) => {
            state.date = action.payload;
        },
        setTime: (state, action: PayloadAction<string>) => {
            state.time = action.payload;
        },
        setCourierNote: (state, action: PayloadAction<string>) => {
            state.courierNote = action.payload;
        },
        RESET_STATE: () => initialState
    }
})

export default donationSlice.reducer;
export const {
    setQuantity,
    setCategory,
    setLocation,
    setTargets,
    setSpecifiedOrganization,
    setStreet,
    setCity,
    setPostCode,
    setPhoneNumber,
    setDate,
    setTime,
    setCourierNote,
    RESET_STATE
} = donationSlice.actions;