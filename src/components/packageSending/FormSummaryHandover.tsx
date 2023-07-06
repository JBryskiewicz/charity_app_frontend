import Image from "next/image";
import shirt from "@/assets/images/Icon_shirt@2x.png";
import circle from "@/assets/images/Icon_circle@2x.png";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

export function FormSummaryHandover() {
    const donation = useSelector((state: RootState) => state.donation);

    const toWhom = donation.charityTargets.join(', ');
    const donationSummary = `${donation.quantity} worki, ${donation.category}, przekazujesz ${toWhom}`

    return (
        <>
            <p className="text-2xl donation-summary-info">Oddajesz:</p>
            <div className="flex flex-col gap-6">
                <div className="donation-summary-box">
                    <Image
                        src={shirt}
                        alt="shirt icon"
                        className="donation-summary-icons"
                    />
                    <p>{donationSummary}</p>
                </div>
                <div className="donation-summary-box">
                    <Image
                        src={circle}
                        alt="circle icon"
                        className="donation-summary-icons"
                    />
                    <p>dla lokalizacji: {donation.location}</p>
                </div>
            </div>
        </>
    );
}