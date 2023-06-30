import decoration from "@/assets/images/decoration-2x.png";
import Image from "next/image";

type Props = {
    className?: string
}
export function DecorativeImage({ className }: Props) {
    return (
        <Image
            src={decoration}
            alt="decoration image"
            className={className}
        />
    );
}