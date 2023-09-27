import {render, screen} from "@testing-library/react";
import {Hero} from "@/components/homepage/Hero";

describe("Hero component (homepage)", () => {
    it('should render component correctly', function () {
        render(<Hero/>);

        const backgroundImage = screen.getByAltText('background image');
        const header = screen.getByRole('heading');
        const description = screen.getByText('Oddaj niechciane rzeczy w zaufane ręce');
        const donationButton = screen.getByRole('button', { name: 'ODDAJ RZECZY' });
        const organizationButton = screen.getByRole('button', { name: 'ZORGANIZUJ ZBIÓRKĘ' });

        expect(backgroundImage).toBeInTheDocument();
        expect(header).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(donationButton).toBeInTheDocument();
        expect(organizationButton).toBeInTheDocument();
    });
});