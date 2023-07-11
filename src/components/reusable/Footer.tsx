import instagram from "@/assets/images/Instagram.png";
import facebook from "@/assets/images/Facebook.png";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="flex justify-between mr-32 footer">
            <p className="text-lg">Copyright by Coders Lab</p>
            <div className="flex gap-8">
                <a href="https://instagram.com">
                    <Image
                        src={instagram}
                        alt="instagram icon"
                        className="footer-icon"
                    />
                </a>
                <a href="https://facebook.com/">
                    <Image
                        src={facebook}
                        alt="facebook icon"
                        className="footer-icon"
                    />
                </a>
            </div>
        </footer>
    );
}