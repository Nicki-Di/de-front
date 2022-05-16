import AccordionItem from "./AccordionItem";

export default function FAQ() {
    const items = [
        {
            question: "سرمایه‌گذاری خطرپذیر چیست؟",
            answer: "سرمایه‌گذاری خطرپذیر (Venture Capital) نوعی سرمایه‌گذاری با ریسک بالاست که بر روی ایده‌های خلاقانه و استارتاپ‌های نوپا با پتانسیل رشد انجام می‌شود. در این نوع سرمایه‌گذاری در صورت شکست ایده یا استارتاپ، بازگشت پولی وجود ندارد و به همین دلیل به آن سرمایه‌گذاری جسورانه یا سرمایه‌گذاری کارآفرینی نیز می‌گویند. همچنین در صورت موفقیت استارتاپ، بخشی از سهام آنها به‌صورت توافقی به سرمایه‌گذار تعلق می‌گیرد."
        },
        {
            question: "ریسک و بازده سرمایه‌گذاری خطرپذیر چقدر است؟",
            answer: "طبق آمارهای موجود در صنعت سرمایه‌گذاری خطرپذیر، بازده این نوع سرمایه‌گذاری بسیار کم یا صفر است اما در صورت موفقیت استارتاپ، می‌تواند سودی 3 تا 10 برابر آن چه سرمایه‌گذاری کرده‌اید به شما بدهد. در کل به دلیل جدید بودن صنعت استارتاپ‌ها، امکان ارائه یک عدد مشخص برای سرمایه‌گذاری خطرپذیر به‌صورت قطعی وجود ندارد. بااین‌حال برای شرح میزان ریسک و بازده سرمایه‌گذاری خطرپذیر شاید بهتر است برای شما یک مثال با رویکرد مارک اندریسن بزنیم. فرض کنید 2400 استارتاپ به دنبال جذب سرمایه هستند، پس از ارزیابی کسب‌وکار و ارزش‌گذاری بر روی استارتاپ‌ها تنها 120 مورد (5%) آن‌ها قابل سرمایه‌گذاری هستند. از این تعداد 111 استارتاپ شکست می‌خورند و فقط 9 استارتاپ (7.5%) می‌توانند تبدیل به شرکت‌های کوچک یا متوسط شوند. این 9 شرکت، 95 درصد سود پرتفوی شما را تشکیل خواهد داد. \n" +
                "اما چیزی که بالاتر به آن اشاره کردیم در خصوص سودی چندین برابری بود که اصطلاحاً به آن بازده افسانه‌ای می‌گویند. برای تفسیر میزان احتمال وقوع این بازده با فرض آمار مثال قبلی می‌توان گفت از هر 9 استارتاپ موفق به وجود آمده فقط 1 مورد آن امکان دارد که سود افسانه‌ای برای شما داشته باشد. در صورت وقوع این سود افسانه‌ای، خسارت ناشی از شکست 99 درصد سرمایه‌گذاری‌های استارتاپ‌های قبلی جبران می‌شود."
        },
        {
            question: "چگونه ایده را تبدیل به استارتاپ کنیم؟",
            answer: "هر ایده‌ای نیاز به پیاده‌سازی و تحقیق دارد. شما باید حتماً ایده خود را از جهات مختلف بررسی کنید و با دیگران مشورت کنید و پس از نوشتن آن به طور کامل در قسمت سرمایه‌پذیر فایل موردنظر را آپلود کنید. در این مرحله ایده شما مورد بررسی و تحقیق در بازارهای مالی قرار می‌گیرد اگر قابل اجرا باشد مراحل آماده‌سازی اسناد و جذب سرمایه‌گذار انجام می‌گردد و در صورت غیرقابل‌اجرا بودن موارد ضعف آن اعلام می‌گردد تا در صورت صلاحدید آن را اصلاح و مجدد جهت بررسی ارسال نمایید."
        },
        {
            question: "فرایند سرمایه‌گذاری خطرپذیر چقدر زمان می‌برد؟",
            answer: "به طور معمول فرایند سرمایه‌گذاری خطرپذیر و در نهایت خروج از استارتاپ با فروش سهام و رسیدن به سود می‌تواند چیزی حدود 5 تا 7 سال زمان ببرد. اما این میزان می‌تواند بسته به پروژه متغیر باشد."
        },
        {
            question: "روش‌های توسعه بازار چیست؟",
            answer: "توسعه بازار در راستای معرفی و فروش محصولات بیشتر در بازار انجام می‌شود که برای محقق شدن آن نیاز به استراتژی است. افزایش سهم در بازار به روش‌های مختلفی انجام می‌شود که از میان آن‌ها می‌توان به ساماندهی به تخمین مدیران بازاریابی و مالکین شرکت، استفاده از بانک سی آر ام برای پیش‌بینی آینده، رصد تغییرات رقبا و نیاز مشتریان، ملموس سازی بازار آینده محصول و غیره اشاره کرد."
        },
        {
            question: "شریک استراتژیک چیست؟",
            answer: "شریک استراتژیک، به سازمان یا شرکتی گفته می‌شود که به جهت اشتراک‌گذاری توانمندی و دانش، کاهش ریسک سرمایه‌گذاری، سهولت ورود به بازار، سوددهی بیشتر و دستیابی به اهداف به شرکتی دیگر توافق می‌کند. مرکز نوآوری و کسب‌وکار دیجیتال دنیای اقتصاد در حال حاضر خدمات مختلفی در زمینه توسعه بازار، بازاریابی، تبلیغات و غیره در قالب شراکت استراتژیک ارائه می‌کند. "
        },

    ]
    return (
        <div className = {"flex flex-col bg-shades-10 justify-center items-center"}>
            <div>
                <div className = {"border-b-2 border-shades-60"}>
                    <p className = {"text-primary text-4xl font-light mb-4"}>سوالات پرتکرار</p>
                </div>
                <div
                    className = {"grid grid-cols-1 md:grid-cols-2 gap-8 place-content-evenly justify-items-center place-items-center"}>
                    {
                        items.map(item => (
                            <AccordionItem key = {item.question} question = {item.question} answer = {item.answer}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}