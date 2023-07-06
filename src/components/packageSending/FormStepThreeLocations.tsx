import {locationSelect} from "@/utility/mockData";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {ChangeEvent} from "react";
import {setLocation} from "@/redux/donationSlice";

export function FormStepThreeLocations() {
    const location = useSelector((state: RootState) => state.donation.location);
    const dispatch = useDispatch();

    function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
        dispatch(setLocation(event.target.value));
    }

    return (
        <>
            <h4 className="text-4xl">Lokalizacja:</h4>
            <div className="flex gap-2 mt-4 mb-8">
                <div className="location-input">
                    <select value={location} onChange={handleSelect}>
                        {
                            locationSelect.map((element) => (
                                <option
                                    key={element.value}
                                    value={element.value}
                                >
                                    {element.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </>
    );
}