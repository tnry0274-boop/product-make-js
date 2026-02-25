const lottoNumbersContainer = document.querySelector(".lotto-numbers");
const generateBtn = document.querySelector("#generate-btn");
const themeToggle = document.querySelector("#theme-toggle");
const languageSelect = document.querySelector("#language-select");
const title = document.querySelector("#title");

// Form elements
const partnershipTitle = document.querySelector("#partnership-title");
const formName = document.querySelector("#form-name");
const formEmail = document.querySelector("#form-email");
const formMessage = document.querySelector("#form-message");
const formSubmit = document.querySelector("#form-submit");

// Translations
const translations = {
    ko: {
        title: "로또 번호 추천",
        button: "번호 생성",
        docTitle: "로또 번호 생성기",
        partnership: "제휴 문의",
        namePlace: "성함",
        emailPlace: "이메일 주소",
        messagePlace: "문의 내용",
        submitBtn: "문의하기"
    },
    en: {
        title: "Lotto Number Recommendation",
        button: "Generate Numbers",
        docTitle: "Lotto Number Generator",
        partnership: "Partnership Inquiry",
        namePlace: "Your Name",
        emailPlace: "Your Email",
        messagePlace: "Your Message",
        submitBtn: "Send Inquiry"
    },
    zh: {
        title: "大乐透号码推荐",
        button: "生成号码",
        docTitle: "乐透号码生成器",
        partnership: "合作咨询",
        namePlace: "姓名",
        emailPlace: "电子邮件",
        messagePlace: "咨询内容",
        submitBtn: "提交咨询"
    }
};

const updateLanguage = (lang) => {
    title.textContent = translations[lang].title;
    generateBtn.textContent = translations[lang].button;
    document.title = translations[lang].docTitle;
    
    // Update Form Translations
    partnershipTitle.textContent = translations[lang].partnership;
    formName.placeholder = translations[lang].namePlace;
    formEmail.placeholder = translations[lang].emailPlace;
    formMessage.placeholder = translations[lang].messagePlace;
    formSubmit.textContent = translations[lang].submitBtn;

    localStorage.setItem("lang", lang);
    languageSelect.value = lang;
};

// Initial Language Logic
const savedLang = localStorage.getItem("lang") || "ko";
updateLanguage(savedLang);

languageSelect.addEventListener("change", (e) => {
    updateLanguage(e.target.value);
});

// Theme Logic
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
    themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
});

const generateLottoNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
};

const getNumberColor = (number) => {
    if (number <= 10) return "#fbc400";
    if (number <= 20) return "#69c8f2";
    if (number <= 30) return "#ff7272";
    if (number <= 40) return "#aaa";
    return "#b0d840";
};

const displayLottoNumbers = (numbers) => {
    lottoNumbersContainer.innerHTML = "";
    numbers.forEach(number => {
        const numberDiv = document.createElement("div");
        numberDiv.classList.add("lotto-number");
        numberDiv.textContent = number;
        numberDiv.style.backgroundColor = getNumberColor(number);
        lottoNumbersContainer.appendChild(numberDiv);
    });
};

generateBtn.addEventListener("click", () => {
    const lottoNumbers = generateLottoNumbers();
    displayLottoNumbers(lottoNumbers);
});

// Initial generation
displayLottoNumbers(generateLottoNumbers());
