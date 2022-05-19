import styles from "/styles/Home.module.css"
import MainForm from "../Home/MainForm";
import Stack from "./Stack";
import HexagonRoundedIcon from "@mui/icons-material/HexagonRounded";

const items = [
    {title: "فرم ثبت نام را با اطلاعات مورد نیاز پر کنید.", src: "/common/h1.png"},
    {title: "تیم ما با شما تماس گرفته و مشاوره تخصصی خود را در اختیار شما میگذارد.", src: "/common/h2.png"},
    {title: "همکاری مشترک شروع شد!", src: "/common/h3.png"},
]


export default function MainFormContainer() {
    return (
        <div>
            <div className = {styles.formContainer + " flex items-end justify-center pb-24"}>
                <div className = {" max-w-6xl flex flex-row justify-between items-center flex-wrap gap-8"}>
                    <div className = {" relative flex flex-col gap-10"}>
                        <div className = {"flex flex-row items-center gap-4"}>
                            <img src = "/common/h0.png" className = {"w-12 z-10"}/>
                            <p className = {styles.gradientText + " font-light text-2xl text-shades-10"}>شروع همکاری در
                                ۳
                                گام</p>
                        </div>

                        <div className = {"flex flex-col gap-10"}>
                            {
                                items.map((item) => {
                                        return (
                                            <div key = {item}
                                                 className = {"flex flex-row items-center gap-4"}>
                                                <img src = {item.src} className = {" w-12 z-10"}/>
                                                <p className = {"font-light text-lg text-primary"}>
                                                    {item.title}
                                                </p>
                                            </div>
                                        )
                                    }
                                )
                            }

                        </div>
                        <div className = {`absolute right-[23px] top-1 border-r-2 border-shades-60 h-[95%]`}/>


                    </div>
                    <MainForm/>
                </div>
            </div>
        </div>

    )
}