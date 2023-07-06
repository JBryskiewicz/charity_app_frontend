import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Donation} from "@/utility/types";

const initialState: Donation = {
    Date: new Date().toDateString(),
    Time: new Date().toDateString(),
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
    }
})

export default donationSlice.reducer;
export const {
    setQuantity,
    setCategory,
    setLocation,
    setTargets,
    setSpecifiedOrganization,
} = donationSlice.actions;