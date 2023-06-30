import instagram from "@/assets/images/Instagram.png";
import facebook from "@/assets/images/Facebook.png";

export function Footer() {
    return (
        <footer className="flex justify-between mr-32 footer">
            <p className="text-lg">Copyright by Coders Lab</p>
            <div className="flex gap-8">
                <a href="https://instagram.com">
                    <img
                        src={instagram.src}
                        alt="instagram icon"
                        className="footer-icon"
                    />
                </a>
                <a href="https://facebook.com/">
                    <img
                        src={facebook.src}
                        alt="facebook icon"
                        className="footer-icon"
                    />
                </a>
            </div>
        </footer>
    );
}