import decoration from "@/assets/images/decoration-2x.png";

type Props = {
    className?: string
}
export function DecorativeImage({ className }: Props) {
    return (
        <img
            src={decoration.src}
            alt="decoration image"
            className={`mb-12 w-1/2 ${className}`}
        />
    );
}