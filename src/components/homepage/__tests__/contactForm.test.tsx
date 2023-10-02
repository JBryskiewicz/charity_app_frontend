import {ContactForm} from "@/components/homepage/ContactForm";
import {render, screen} from "@testing-library/react";
import axios from "axios";

const TEXTAREA_PLACEHOLDER = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Contact Form component (homepage)", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render component correctly', function () {
        render(<ContactForm/>)

        const nameField = screen.getByRole('textbox', { name: 'Wpisz swoje imię:' });
        expect(nameField).toBeInTheDocument();

        const emailField = screen.getByPlaceholderText('abc@xyz.pl');
        expect(emailField).toBeInTheDocument();

        const messageField = screen.getByPlaceholderText(TEXTAREA_PLACEHOLDER);
        expect(messageField).toBeInTheDocument();

        const sendButton = screen.getByRole('button', { name: 'Wyślij' });
        expect(sendButton).toBeInTheDocument();
    });
});