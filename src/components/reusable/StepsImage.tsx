import Image, {StaticImageData} from "next/image";

type Props = {
    picture: StaticImageData
    iconName: string;
}
export function StepsImage({ picture, iconName }: Props) {
    return (
        <Image
            src={picture}
            alt={`${iconName} image`}
            className="steps-image"
        />
    );
}