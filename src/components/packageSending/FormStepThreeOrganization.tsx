import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {ChangeEvent} from "react";
import {setSpecifiedOrganization} from "@/redux/donationSlice";

export function FormStepThreeOrganization() {
    const specifiedOrganization = useSelector((state: RootState) => state.donation.specifiedOrganization);
    const dispatch = useDispatch();

    function handleInput(event: ChangeEvent<HTMLInputElement>) {
        dispatch(setSpecifiedOrganization(event.target.value));
    }

    return (
        <div className="mb-8">
            <h5 className="text-2xl mb-4">Wpisz nazwę organizacji której chcesz pomóc (opcjonalne)</h5>
            <input
                value={specifiedOrganization}
                type="text"
                className="organization-input"
                onChange={handleInput}
            />
        </div>
    );
}