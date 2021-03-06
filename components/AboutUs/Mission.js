import MissionStack from "./MissionStack";

const stack1 = [
    "ایجاد ارتباط بین بخش‌های سنتی و مدرن نظام اقتصادی",
    "تسهیل فرایند سرمایه‌پذیری و سرمایه‌گذاری",
    "ایجاد رشد اقتصادی و پیشرفت در صنعت فناوری"
];
const stack2 = [
    "سرمایه‌گذاران حقیقی و حقوقی، شتاب‌دهنده‌ها و سرمایه‌گذاران خطرپذیر",
    "شرکت‌های دانش‌بنیان، ایده‌پردازان و گروه‌های استارتاپی",
    "صاحبان کسب‌وکارها"
]

export default function Mission() {
    return (

        <div className = {"flex flex-col"}>
            <div
                className = {"flex flex-row items-center justify-start gap-8 border-b-2 border-shades-60 pb-6 mb-8"}>
                <img src = {"/about/mission.png"} className = {"brightness-0 invert w-16 mr-4"}/>
                <p className = {"text-right font-light text-shades-10 text-2xl md:text-4xl"}>ماموریت</p>
            </div>
            <div className = {"flex flex-col gap-16"}>

                <p className = {"text-justify font-light text-shades-20 text-sm md:text-lg"}>
                    باتوجه‌به پیشرفت علم و افزایش رقابت میان کسب‌وکارها، ما باور داریم که برای ماندگاری و به‌دست‌آوردن
                    سهم بازار، راهی به جز ورود به
                    <span className = {"text-accent"}> عرصه نوآوری و استفاده از فناوری‌های روز </span>
                    وجود ندارد.
                </p>

                <div className = {"flex flex-col lg:flex-row justify-start gap-24 lg:gap-52"}>
                    <MissionStack
                        title = {1} bodyItems = {stack1}/>

                    {/*<MissionStack*/}
                    {/*    title = {2}*/}
                    {/*    bodyItems = {stack2}/>*/}
                </div>

                <p className = {"text-justify font-light text-shades-20 text-sm md:text-lg"}>
                    حسن شهرت مجموعه ما در عرصه اقتصاد و صنعت باعث شده که همه گروه‌های هدف به‌آسانی بتوانند به
                    ما <span className = {"text-accent"}>اعتماد</span> کنند،
                    <br/>
                    زیرا هم تجربه تخصصی قابل اتکایی در حوزه اقتصاد داریم و هم به‌عنوان یک <span
                    className = {"text-accent"}>مرجع مهم در زمینه داده‌‌های اقتصادی</span> محسوب
                    می‌شویم.
                    <br/>
                    علاوه بر این‌ها شبکه گسترده‌ای از مخاطبان و مشتریان تخصصی در اختیار داریم و بسترهای مختلفی نیز
                    برای <span className = {"text-accent"}>معرفی محصولات و تبلیغات</span> و تأثیرگذاری در دسترس داریم.
                    <br/>
                    <br/>
                    به‌طورکلی فعالان اقتصادی می‌توانند بسته به نوع کسب‌وکار و نیاز خود از طریق سایت یا شبکه‌های
                    اجتماعی؛ <span className = {"text-accent"}>درخواست مشاوره</span> و یا همکاری برای ما ارسال کنند تا
                    در جلسات معارفه و مشاوره
                    اختصاصی نوع خدمت موردنیاز ایشان برآورد گردد.

                </p>
            </div>
        </div>

    )
}