import {Foundations} from "@/components/homepage/Foundations";
import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";

describe("Foundations component (homepage)", () => {
    it('should render component correctly', function () {
        render(<Foundations/>);

        const heading = screen.getByRole('heading');
        const foundationButton = screen.getByRole('button', { name: 'Fundacjom' });
        const institutionButton = screen.getByRole('button', { name: 'Organizacjom pozarządowym' });
        const localDonationButton = screen.getByRole('button', { name: 'Lokalnym zbiórkom' });
        const description = screen.getByText('W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi' +
            ' współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.');

        expect(heading).toBeInTheDocument();
        expect(foundationButton).toBeInTheDocument();
        expect(foundationButton).toHaveClass('btn-active');
        expect(institutionButton).toBeInTheDocument();
        expect(localDonationButton).toBeInTheDocument();
        expect(description).toBeInTheDocument();
    });

    it('buttons should set certain value upon being clicked', async function () {
        render(<Foundations/>);

        const institutionButton = screen.getByRole('button', { name: 'Organizacjom pozarządowym' });
        await user.click(institutionButton);
        expect(institutionButton).toHaveClass('btn-active');

        const localDonationButton = screen.getByRole('button', { name: 'Lokalnym zbiórkom' });
        await user.click(localDonationButton);
        expect(localDonationButton).toHaveClass('btn-active');

        const foundationButton = screen.getByRole('button', { name: 'Fundacjom' });
        await user.click(foundationButton);
        expect(foundationButton).toHaveClass('btn-active');
    });
});