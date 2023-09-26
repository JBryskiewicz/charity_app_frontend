import {render, screen} from "@testing-library/react";
import {StepsImage} from "@/components/reusable/StepsImage";
import shirt from "@/assets/images/Icon_shirt@2x.png";

describe('Steps Image Component', () => {
    it('should render component correctly', function () {
        render(<StepsImage picture={shirt} iconName={"shirt"}/>);

        const imageElement = screen.getByAltText('shirt image');
        expect(imageElement).toBeInTheDocument();
    });
});