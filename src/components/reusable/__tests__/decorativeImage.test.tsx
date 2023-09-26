import {render, screen} from "@testing-library/react";
import {DecorativeImage} from "@/components/reusable/DecorativeImage";

describe("Decorative Image component", () => {

    const MOCK_CLASS = 'contact-decorative-image';

    it('should render decorative image correctly', function () {
        render(<DecorativeImage className={MOCK_CLASS}/>);

        const imageElement = screen.getByAltText('decoration image');
        expect(imageElement).toBeInTheDocument();
    });
});