import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

export function FormSummaryDate() {
    const donation = useSelector((state: RootState) => state.donation);

    return (
        <div className="form-summary-address-box">
            <p className="text-bold mb-4">Termin odbioru:</p>
            <div className="donation-details-box">
                <p>Data:</p>
                <p>{donation.date}</p>
            </div>
            <div className="donation-details-box">
                <p>Godzina:</p>
                <p>{donation.time}</p>
            </div>
            <div>
                <p>Uwagi dla kuriera:</p>
                <p>{donation.courierNote}</p>
            </div>
        </div>
    );
}