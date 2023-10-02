import {locationSelect} from "@/utility/mocks/mockData";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {ChangeEvent, Dispatch, SetStateAction, useEffect} from "react";
import {setLocation} from "@/redux/donationSlice";

type Props = {
    setAreFieldsValidated: Dispatch<SetStateAction<boolean[]>>
}

export function FormStepThreeLocations({setAreFieldsValidated}: Props) {
    const location = useSelector((state: RootState) => state.donation.location);
    const dispatch = useDispatch();

    useEffect(() => {
        const validator = (!(location === "" || location === "Wybierz"));
        setAreFieldsValidated((prevState) => [validator, ...prevState.slice(1)])
    }, [location, setAreFieldsValidated])

    function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
        dispatch(setLocation(event.target.value));
        setAreFieldsValidated((prevState) => [true, ...prevState.slice(1)])
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
                                    value={element.name}
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