import {render, screen} from "@testing-library/react";
import {Footer} from "@/components/reusable/Footer";

describe("Footer", () => {
    it('should render footer component correctly', function () {
        render(<Footer />);

        const instagramButton = screen.getByRole('link', { name: 'instagram icon' });
        const facebookButton = screen.getByRole('link', { name: 'facebook icon' });
        expect(instagramButton).toBeInTheDocument();
        expect(facebookButton).toBeInTheDocument();
    });

    it('should render footer icon images correctly', function () {
        render(<Footer />);

        const instagramIcon = screen.getByAltText('instagram icon');
        const facebookIcon = screen.getByAltText('facebook icon');
        expect(instagramIcon).toBeInTheDocument();
        expect(facebookIcon).toBeInTheDocument();
    });
});