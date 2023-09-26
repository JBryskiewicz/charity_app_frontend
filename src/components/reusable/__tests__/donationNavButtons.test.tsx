import {render, screen} from "@testing-library/react";
import {DonationNavButtons} from "@/components/reusable/DonationNavButtons";
import user from "@testing-library/user-event";

describe('Donation navigation button', () => {
    it('should render functional button of step 1 correctly',  function () {
        const setStep = jest.fn();

        render(<DonationNavButtons
            isFirst={true}
            isValidated={true}
            step={1}
            setStep={setStep}
        />)

        const formButton = screen.getByRole('button', { name: 'Dalej' });
        expect(formButton).toBeInTheDocument();

    });

    it('should call the step 1 button handler', async function () {
        const setStep = jest.fn();

        render(<DonationNavButtons
            isFirst={true}
            isValidated={true}
            step={1}
            setStep={setStep}
        />)

        const formButton = screen.getByRole('button', { name: 'Dalej' });
        await user.click(formButton);
        expect(setStep).toHaveBeenCalledTimes(1);
    });

    it('should render functional buttons of step 2 and further correctly',function () {
        const setStep = jest.fn();

        render(<DonationNavButtons
            isFirst={false}
            isValidated={true}
            step={1}
            setStep={setStep}
        />)

        const previousButton = screen.getByRole('button', { name: 'Wstecz' });
        const nextButton = screen.getByRole('button', { name: 'Dalej' });
        expect(previousButton).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
    });

    it('should call the step 2-5 buttons handlers', async function () {
        const setStep = jest.fn();

        render(<DonationNavButtons
            isFirst={false}
            isValidated={true}
            step={1}
            setStep={setStep}
        />)

        const previousButton = screen.getByRole('button', { name: 'Wstecz' });
        const nextButton = screen.getByRole('button', { name: 'Dalej' });
        await user.click(previousButton);
        await user.click(nextButton);
        expect(setStep).toHaveBeenCalledTimes(2);
    });
});