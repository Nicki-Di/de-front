import styles from "/styles/Home.module.css"
import StartupForm from "./StartupForm";
import PartnershipForm from "../Partnership/PartnershipForm";

export default function StartupFormContainer() {
    return (
        <div>
            <div className = {styles.formContainer + " hidden min-h-[200vh] lg:flex items-end justify-center pb-24"}>
                <div className = {" flex flex-row justify-between items-center gap-8"}>
                    <StartupForm/>
                </div>
            </div>

            <div className = {"lg:hidden pb-24"}>
                <img src={"/common/papercut-mobile.png"} className={"object-none"}/>
                <div className = {" flex flex-col justify-between items-center gap-8 bg-shades-10 pb-4"} id={"formMobile"}>
                    <StartupForm/>
                </div>
            </div>

        </div>

    )
}