/*fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const wordsOriginal = document.getElementById('vocab-list');
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.word}: ${item.def}`;
      wordsOriginal.appendChild(li);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));*/

const wordsOriginal = [
  {"word": "آذین", "def": "زیب، زینت، آرایش، زیور"},
  {"word": "آرایه", "def": "زیب، زینت، زیور"},
  {"word": "آرمان", "def": "آرزو، امید"},
  {"word": "آمال", "def": "جمع امل؛ امید، آرزو"},
  {"word": "آمیخته", "def": "درهم ساختن و مخلوط کردن چند چیز باهم"},
  {"word": "آیات", "def": "نشانه‌ها، علامت‌ها؛ جمع آیه"},
  {"word": "آشفته", "def": "پریشان، مضطرب، شوریده، سرگردان"},
  {"word": "ابتذال", "def": "بی‌ارزش، مبتذل"},
  {"word": "اَبَر", "def": "بزرگ، کلان، نیرومند"},
  {"word": "ابهام", "def": "پوشیده و پیچیده سخن گفتن"},
  {"word": "اتباع", "def": "پیروی کردن، از پی رفتن"},
  {"word": "احاطه", "def": "گرداگرد چیزی را گرفتن"},
  {"word": "اختلال", "def": "بی‌نظمی، درهم برهم شدن"},
  {"word": "اختناق", "def": "خفه شدن، بند آمدن نفس"},
  {"word": "اختر", "def": "ستاره، بخت، طالع، اقبال"},
  {"word": "ادراک", "def": "فهمیدن، دریافتن، درک کردن"},
  {"word": "اسباب", "def": "جمع سبب؛ وسایل"},
  {"word": "استشهاد", "def": "شاهد آوردن از گفته کسی"},
  {"word": "اشتغال", "def": "مشغول شدن، کار کردن"},
  {"word": "اشراف", "def": "جمع شریف؛ نجبا، بلندپایگان"},
  {"word": "اشراق", "def": "درخشیدن، روشن شدن"},
  {"word": "اطلاق", "def": "استعمال کلمه‌ای به معنای خاص"},
  {"word": "اعتلا", "def": "بلندی، برتری یافتن"},
  {"word": "اعتیاد", "def": "عادت کردن، خو گرفتن"},
  {"word": "اعجاب", "def": "شگفت‌زده کردن، به حیرت واداشتن"},
  {"word": "اعجاز", "def": "انجام کاری که دیگران از آن عاجز باشند"},
  {"word": "اعراض", "def": "نشانه‌ها، علائم"},
  {"word": "اعم", "def": "شامل، فراگیر، عمومی"},
  {"word": "اعیان", "def": "بزرگان، اشراف"},
  {"word": "اغراق", "def": "مبالغه، گزاف‌گویی"},
  {"word": "افراط", "def": "زیاده‌روی"},
  {"word": "اقتضا", "def": "درخور بودن، مناسب بودن"},
  {"word": "اکراه", "def": "به زور واداشتن برخلاف میل"},
  {"word": "التزام", "def": "عهده‌دار شدن، متعهد شدن"},
  {"word": "القا", "def": "یاد دادن، آموختن"},
  {"word": "الگو", "def": "نمونه، طرح"},
  {"word": "املاح", "def": "جمع ملح؛ نمک‌ها، منرال‌ها"},
  {"word": "اوهام", "def": "جمع وهم؛ خیال، پندار"},
  {"word": "ایجاز", "def": "کوتاه و مختصر کردن سخن"},
  {"word": "ایقان", "def": "یقین داشتن، باور داشتن"},
  {"word": "ایما", "def": "اشاره کردن"},
  {"word": "بالغ", "def": "جوان"},
  {"word": "برازنده", "def": "شایسته، زیبنده، لایق"},
  {"word": "برهه", "def": "قسمتی از زمان، دوره‌ای"},
  {"word": "بسمل", "def": "حیوان ذبح‌شده یا نیمه‌جان"},
  {"word": "بصری", "def": "منسوب به بصر؛ آنچه با چشم درک می‌شود"},
  {"word": "بلیغ", "def": "رسا، فصیح"},
  {"word": "بهت", "def": "حیرت، شگفتی"},
  {"word": "بهره", "def": "سود، فایده"},
  {"word": "پذیره", "def": "استقبال، پیشواز"},
  {"word": "پژوهشگر", "def": "محقق"},
  {"word": "پویا", "def": "رونده، فعال، زنده"},
  {"word": "پیرایه", "def": "زینت، آرایش"},
  {"word": "پیشواز", "def": "استقبال، جلو آمدن"},
  {"word": "پیکر", "def": "جسم، هیکل"},
  {"word": "تأخر", "def": "عقب افتادن، دیرشدن"},
  {"word": "تأدیب", "def": "تربیت، تنبیه"},
  {"word": "تالار", "def": "سالن، اتاق بزرگ"},
  {"word": "تأمل", "def": "درنگ، اندیشه"},
  {"word": "تبلور", "def": "شفاف شدن، بلور شدن"},
  {"word": "تتبع", "def": "جست‌وجو، تحقیق"},
  {"word": "تحت الشعاع", "def": "زیر سایه، از رونق افتاده"},
  {"word": "تحریف", "def": "تغییر دادن، واژه‌ای را دگرگون کردن"},
  {"word": "تحقیر", "def": "کوچک شمردن، خوار کردن"},
  {"word": "تحلیل", "def": "تجزیه، گشودن"},
  {"word": "تذهیب", "def": "طلاکوبی، تزیین کتاب با طلا"},
  {"word": "ترسیخ", "def": "تثبیت، محکم کردن"},
  {"word": "تزریق", "def": "وارد کردن دارو به بدن، پیچکاری"},
  {"word": "تزکیه", "def": "پاک کردن، بی‌آلایش کردن"},
  {"word": "تسمم", "def": "زهرآلود شدن"},
  {"word": "تشریع", "def": "نمودار ساختن شریعت یا راه"},
  {"word": "تشریک", "def": "شریک ساختن"},
  {"word": "تشفیر", "def": "اشاره، شرمساری، اضطراب"},
  {"word": "تصحیح", "def": "درست کردن، اصلاح"},
  {"word": "تصحیف", "def": "خطا در نوشتن یا خواندن"},
  {"word": "تصلب", "def": "سخت شدن، محکم شدن"},
  {"word": "تعجیل", "def": "شتاب، عجله"},
  {"word": "تعزیه", "def": "سوگواری، عزاداری"},
  {"word": "تفریط", "def": "کوتاهی کردن"},
  {"word": "تفکر قدسی", "def": "اندیشه روحانی"},
  {"word": "تقدم", "def": "پیشی گرفتن"},
  {"word": "تقلا", "def": "تلاش، دست و پا زدن"},
  {"word": "تلطیف", "def": "لطیف ساختن، زیبا کردن"},
  {"word": "تلمیح", "def": "اشاره به داستان یا اصطلاح علمی در شعر"},
  {"word": "تمایز", "def": "تفاوت داشتن، جدا بودن"},
  {"word": "تناقض", "def": "ضد بودن، ناسازگاری"},
  {"word": "تهوع", "def": "استفراق، دل به هم خوردگی"},
  {"word": "توالی", "def": "پشت سر هم بودن"},
  {"word": "توأم", "def": "همراه، هم‌زمان"},
  {"word": "توفیق", "def": "موفق شدن، دست یافتن"},
  {"word": "توهم", "def": "خیال، گمان"},
  {"word": "تکلف", "def": "به زحمت انداختن، خلاف عادت کاری کردن"},
  {"word": "تکوین", "def": "پدید آوردن، آفرینش"},
  {"word": "تهذیب", "def": "پاکسازی، خالص کردن"},
  {"word": "ثغور", "def": "جمع ثغر؛ مرز، سرحد"},
  {"word": "جسورانه", "def": "با جسارت، بی‌باکانه"},
  {"word": "جعل", "def": "تقلب، ساختن چیزی خلاف واقع"},
  {"word": "چاشنی", "def": "مزه، طعم‌دهنده"},
  {"word": "چرخ", "def": "فلک، آسمان، روزگار"},
  {"word": "حجب", "def": "حیا، شرم، پنهان‌سازی"},
  {"word": "حریم", "def": "پیرامون، اطراف"},
  {"word": "حجت", "def": "برهان، دلیل"},
  {"word": "حسب", "def": "اندازه، قدر، شمار"},
  {"word": "حکمت", "def": "درستی، کلام موافق حق"},
  {"word": "حماسه", "def": "دلیری، شجاعت"},
  {"word": "خوارق", "def": "جمع خارق؛ کارهای خلاف عادت"},
  {"word": "داعی", "def": "دعوت‌کننده، خواهنده"},
  {"word": "داور", "def": "قاضی"},
  {"word": "دایم‌الخمر", "def": "همیشه شراب‌نوش"},
  {"word": "دایم‌الصوم", "def": "همیشه روزه‌دار"},
  {"word": "دیپو", "def": "انبار، محل ذخیره‌سازی"},
  {"word": "رأفت", "def": "رحمت، مهربانی"},
  {"word": "راغ", "def": "مرغزار، دامن سبز کوه، وصل به صحرا"},
  {"word": "رثا", "def": "گریه و شعر در رثای مرده، دلسوزی در مرگ کسی"},
  {"word": "رَجز", "def": "شعری در میدان جنگ برای فخر فروشی"},
  {"word": "رده", "def": "صف، قطار، درجه، دسته"},
  {"word": "رستگار", "def": "نجات‌یافته، آسوده، آزاد"},
  {"word": "روال", "def": "نظم، ترتیب، جریان، اسلوب"},
  {"word": "روایت", "def": "نقل حدیث یا خبر، حکایت"},
  {"word": "روند", "def": "روش، رفتار، طریقه"},
  {"word": "ریوی", "def": "منسوب به ریه، مربوط به شش"},
  {"word": "زلال", "def": "صاف، خوشگوار، گوارا"},
  {"word": "زوال", "def": "نیستی، نابودی، ناپایداری"},
  {"word": "ژست", "def": "طرز ایستادن، حرکات و رفتار شخصی"},
  {"word": "سانسور", "def": "تفتیش و کنترل مطالب توسط دولت"},
  {"word": "سبیل", "def": "راه آشکار، طریق"},
  {"word": "سترگ", "def": "بزرگ، عظیم، تنومند"},
  {"word": "سجایا", "def": "جمع سجیه؛ طبع، خلق، خوی"},
  {"word": "سده", "def": "دوره‌ی صدساله، قرن"},
  {"word": "سقم", "def": "بیماری، ناصحیح بودن، نادرستی"},
  {"word": "سلاله", "def": "نسل، نطفه، خلاصه"},
  {"word": "سمر", "def": "قصه شبانه، شب و تاریکی، دهر"},
  {"word": "سمعی", "def": "منسوب به سمع، قابل درک با گوش"},
  {"word": "سنت", "def": "طریقه و سیره پیامبر اسلام، آنچه پیامبر و اصحاب انجام داده‌اند"},
  {"word": "سوانح", "def": "جمع سانحه؛ واقعه، حادثه، رویداد ناگهانی"},
  {"word": "سور", "def": "جشن، مهمانی، عروسی"},
  {"word": "سوق", "def": "بازار، جای خرید و فروش"}
]

let quizData = [];
let correctCount = 0;
let attemptedCount = 0;
let mistakenSet = new Set();

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function prepareQuiz() {
    const defs = shuffle([...wordsOriginal]);
    quizData = [];

    defs.forEach((item, i) => {
    const question = (i % 2 === 0)
        ? {
            id: item.word + item.def,
            type: "def2word",
            question: `❓ معنی کدام لغت "${item.def}" است؟`,
            correct: item.word,
            choices: shuffle([
            item.word,
            ...shuffle(wordsOriginal.filter(w => w.word !== item.word)).slice(0, 3).map(w => w.word)
            ])
        }
        : {
            id: item.word + item.def,
            type: "word2def",
            question: `❓ معنی کلمه  "${item.word}" چیست"`,
            correct: item.def,
            choices: shuffle([
            item.def,
            ...shuffle(wordsOriginal.filter(w => w.word !== item.word)).slice(0, 3).map(w => w.def)
            ])
        };
    quizData.push(question);
    });

    correctCount = 0;
    attemptedCount = 0;
    mistakenSet.clear();
}

function loadQuestion() {
    if (quizData.length === 0) {
    showFinalScore();
    return;
    }

    const q = quizData[0];
    document.getElementById("question").innerText = q.question;
    const options = document.getElementById("options");
    options.innerHTML = "";

    q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => handleAnswer(btn, choice, q);
    options.appendChild(btn);
    });

    updateProgressBar();
}

function handleAnswer(selectedBtn, selectedChoice, q) {
    const buttons = document.querySelectorAll("#options button");

    buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === q.correct) {
        btn.classList.add("correct");
    } else if (btn === selectedBtn && selectedChoice !== q.correct) {
        btn.classList.add("incorrect");
    }
    });

    setTimeout(() => {
    if (selectedChoice === q.correct) {
        // Only count if not previously mistaken
        if (!mistakenSet.has(q.id)) {
        correctCount++;
        }
        quizData.shift(); // remove from front
    } else {
        mistakenSet.add(q.id); // mark as mistaken
        quizData.push(quizData.shift()); // move to end
    }

    attemptedCount++;
    loadQuestion();
    }, 1000);
}

function updateProgressBar() {
    const total = correctCount + quizData.length;
    const percent = Math.round((correctCount / total) * 100);
    document.getElementById("progress-bar").style.width = `${percent}%`;
}

function showFinalScore() {
    document.getElementById("quiz-box").style.display = "none";

    const percent = Math.round((correctCount / (correctCount + mistakenSet.size)) * 100);
    let message = "";

    if (percent === 100) {
    message = "حیرت‌انگیز! شما همه سوالات را درست پاسخ دادید!";
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } else if (percent >= 80) {
    message = "عالی! شما در این آزمون بسیار خوب عمل کردید!";
    } else if (percent >= 50) {
    message = "بد نیست! شما می‌توانید بهتر عمل کنید!";
    } else {
    message = "نگران نباشید! این یک فرصت برای یادگیری بیشتر است.";
    }

    document.getElementById("score").innerHTML = `
    <div style="margin-top: 20px;">
        <h2>تمرین تکمیل شد</h2>
        <p style="font-size: 22px;">نتیجه: <strong>${correctCount}/${correctCount + mistakenSet.size}</strong> (${percent}%)</p>
        <p style="font-size: 20px;">${message}</p>
    </div>
    `;
    document.getElementById("retake-btn").style.display = "inline-block";
}

function retakeQuiz() {
    prepareQuiz();
    document.getElementById("quiz-box").style.display = "block";
    document.getElementById("score").innerHTML = "";
    document.getElementById("retake-btn").style.display = "none";
    loadQuestion();
    }

    // Start
    prepareQuiz();
    loadQuestion();