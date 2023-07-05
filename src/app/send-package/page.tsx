import {Header} from "@/components/reusable/Header";
import {FormIntro} from "@/components/packageSending/FormIntro";
import {Contact} from "@/components/homepage/Contact";
import {FormStepOne} from "@/components/packageSending/FormStepOne";
import formBackground from "@/assets/images/form-steps-background.png"
import {FormWarning} from "@/components/packageSending/FormWarning";

function PackageSending() {
    return (
        <>
            <Header isHome={false}/>
            <FormIntro/>
            <FormWarning/>
            <div style={{
                backgroundImage: `url(${formBackground.src})`,
                backgroundSize: 'cover'
            }}>
                <FormStepOne/>
            </div>
            <Contact/>
        </>
    );
}

export default PackageSending