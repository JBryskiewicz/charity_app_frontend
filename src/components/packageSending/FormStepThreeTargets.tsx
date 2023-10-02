import {checkboxOptions} from "@/utility/mocks/mockData";
import {ChangeEvent, Dispatch, SetStateAction, useEffect} from "react";
import {setTargets} from "@/redux/donationSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";

type Props = {
    setAreFieldsValidated: Dispatch<SetStateAction<boolean[]>>
}

export function FormStepThreeTargets({setAreFieldsValidated}: Props) {
    const charityTargets = useSelector((state: RootState) => state.donation.charityTargets);
    const dispatch = useDispatch();

    useEffect(() => {
        const validator = !charityTargets.length ? false : true;
        setAreFieldsValidated((prevState) => [prevState[0], validator, ...prevState.slice(2)])
    }, [charityTargets, setAreFieldsValidated])

    function handleCheckbox(event: ChangeEvent<HTMLInputElement>){
        const value = event.target.value;
        const targetsCopy = [...charityTargets];

        setAreFieldsValidated((prevState) => [prevState[0], true, ...prevState.slice(2)])

        event.target.checked
            ? dispatch(setTargets([...targetsCopy, value]))
            : dispatch(setTargets(targetsCopy.filter((e) => e !== value)))

    }

    return (
        <div className="mb-8">
            <h5 className="text-2xl mb-4">Komu chcesz pomóc?</h5>
            <div className="flex flex-wrap w-1/2">
                {
                    checkboxOptions.map((element) => (
                        <label key={element} htmlFor={element} className="charity-target-label">
                            <input
                                id={element}
                                value={element}
                                type="checkbox"
                                className="charity-target-checkbox"
                                checked={charityTargets.includes(element)}
                                onChange={handleCheckbox}
                            />
                            {element}
                        </label>
                    ))
                }
            </div>
        </div>
    );
}