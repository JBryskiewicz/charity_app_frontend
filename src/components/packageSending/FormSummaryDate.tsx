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
            <div className="mb-2">
                <p>Uwagi dla kuriera:</p>
            </div>
            <div className="courier-message-box">
                <p>{donation.courierNote}</p>
            </div>
        </div>
    );
}