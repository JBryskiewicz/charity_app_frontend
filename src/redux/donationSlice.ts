import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Donation} from "@/utility/types";

const initialState: Donation = {
    Date: new Date(),
    Time: new Date(),
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
        }
    }
})

export default donationSlice.reducer;
export const {
    setQuantity,
    setCategory,
} = donationSlice.actions;