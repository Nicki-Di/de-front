import styles from "/styles/Home.module.css"
import MainForm from "./MainForm";
import MainFormContainer from "../Common/MainFormContainer";


export default function MainFormSection() {
    return (
        <div>
            <MainFormContainer/>
            <div className={"hidden lg:block"}>
            <img src = {"/home/people.png"} className = {"w-full -mt-12"}/>
            <div className = {styles.formContainerDown + " flex items-end justify-center"}/>
            </div>
        </div>

    )
}