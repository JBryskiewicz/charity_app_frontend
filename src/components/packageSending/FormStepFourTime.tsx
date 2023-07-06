import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {ChangeEvent} from "react";
import {setCourierNote, setDate, setTime} from "@/redux/donationSlice";

export function FormStepFourTime() {
    const { date, time, courierNote } = useSelector((state: RootState) => state.donation);
    const dispatch = useDispatch();

    const handleInput = (identity: string) => (
        event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
        switch (identity) {
            case 'date':
                dispatch(setDate(event.target.value));
                break;
            case 'time':
                dispatch(setTime(event.target.value));
                break;
            case 'note':
                dispatch(setCourierNote(event.target.value));
                break;
            default:
                break;
        }
    }

    return (
        <div className="donation-address-box">
            <p>Termin odbioru:</p>
            <label
                htmlFor="date"
            >
                Data
                <input
                    id="date"
                    type="text"
                    value={date}
                    onChange={handleInput('date')}
                    placeholder="03.07.2023"
                />
            </label>
            <label
                htmlFor="time"
            >
                Godzina
                <input
                    id="time"
                    type="text"
                    value={time}
                    onChange={handleInput('time')}
                    placeholder="16:30"
                />
            </label>
            <label htmlFor="notes">
                Uwagi dla kuriera
                <textarea
                    id="notes"
                    value={courierNote}
                    onChange={handleInput('note')}
                />
            </label>
        </div>
    );
}