const lottoSetsContainer = document.querySelector("#lotto-sets-container");
const generateBtn = document.querySelector("#generate-btn");
const themeToggle = document.querySelector("#theme-toggle");
const languageSelect = document.querySelector("#language-select");
const title = document.querySelector("#title");
const setCountInput = document.querySelector("#set-count");
const countLabel = document.querySelector("#count-label");

// Partnership Form elements
const partnershipTitle = document.querySelector("#partnership-title");
const formName = document.querySelector("#form-name");
const formEmail = document.querySelector("#form-email");
const formMessage = document.querySelector("#form-message");
const formSubmit = document.querySelector("#form-submit");

// Comment elements
const commentTitle = document.querySelector("#comment-title");
const commentList = document.querySelector("#comment-list");
const commentForm = document.querySelector("#comment-form");
const commentText = document.querySelector("#comment-text");
const commentSubmit = document.querySelector("#comment-submit");

// Translations
const translations = {
    ko: {
        title: "로또 번호 추천",
        button: "번호 생성",
        docTitle: "로또 번호 생성기",
        countLabel: "생성할 세트 수 (최대 30):",
        partnership: "제휴 문의",
        namePlace: "성함",
        emailPlace: "이메일 주소",
        messagePlace: "문의 내용",
        submitBtn: "문의하기",
        commentTitle: "댓글",
        commentTextPlace: "댓글을 입력하세요... (비속어는 자동 필터링됩니다)",
        commentSubmitBtn: "댓글 등록",
        anonymous: "익명",
        aboutTitle: "로또 번호 생성기 정보",
        aboutText: "이 도구는 1부터 45 사이의 무작위 번호 6개를 생성하여 로또 번호를 추천해 드립니다. 행운을 빌어요!",
        howTitle: "사용 방법",
        howText: "'번호 생성' 버튼을 클릭하면 새로운 무작위 번호 세트가 나타납니다. 최대 30세트까지 한 번에 생성할 수 있습니다.",
        privacyTitle: "개인정보 처리방침",
        privacyText: "본 사이트는 사용자에게 맞춤형 서비스를 제공하기 위해 쿠키를 사용할 수 있습니다. 수집된 정보는 서비스 개선 목적으로만 사용되며 제3자에게 제공되지 않습니다. Google AdSense 광고를 위해 Google에서 쿠키를 사용할 수 있습니다."
    },
    en: {
        title: "Lotto Number Recommendation",
        button: "Generate Numbers",
        docTitle: "Lotto Number Generator",
        countLabel: "Number of sets (max 30):",
        partnership: "Partnership Inquiry",
        namePlace: "Your Name",
        emailPlace: "Your Email",
        messagePlace: "Your Message",
        submitBtn: "Send Inquiry",
        commentTitle: "Comments",
        commentTextPlace: "Add a comment... (Profanity will be filtered)",
        commentSubmitBtn: "Post Comment",
        anonymous: "Anonymous",
        aboutTitle: "About Lotto Generator",
        aboutText: "This tool provides random lotto number recommendations by generating 6 unique numbers between 1 and 45. Good luck!",
        howTitle: "How to Use",
        howText: "Click the 'Generate Numbers' button to get new sets. You can generate up to 30 sets at once.",
        privacyTitle: "Privacy Policy",
        privacyText: "This site may use cookies to provide personalized services. Collected information is used solely for service improvement and is not shared with third parties. Google may use cookies for AdSense advertising."
    },
    zh: {
        title: "大乐透号码推荐",
        button: "生成号码",
        docTitle: "乐透号码生成器",
        countLabel: "生成组数 (最大 30):",
        partnership: "合作咨询",
        namePlace: "姓名",
        emailPlace: "电子邮件",
        messagePlace: "咨询内容",
        submitBtn: "提交咨询",
        commentTitle: "评论",
        commentTextPlace: "添加评论... (将过滤脏话)",
        commentSubmitBtn: "发表评论",
        anonymous: "匿名",
        aboutTitle: "关于乐透生成器",
        aboutText: "该工具通过在 1 到 45 之间生成 6 个唯一的随机数字来提供乐透号码推荐。祝你好运！",
        howTitle: "如何使用",
        howText: "点击'生成号码'按钮即可获得新的一组或多组数字。您可以一次生成多达 30 组数字。",
        privacyTitle: "隐私政策",
        privacyText: "本网站可能使用 Cookie 来提供个性化服务。收集的信息仅用于改进服务，不会与第三方共享。Google 可能会将 Cookie 用于 AdSense 广告。"
    }
};

const updateLanguage = (lang) => {
    title.textContent = translations[lang].title;
    generateBtn.textContent = translations[lang].button;
    countLabel.textContent = translations[lang].countLabel;
    document.title = translations[lang].docTitle;
    
    // Update Partnership Form
    partnershipTitle.textContent = translations[lang].partnership;
    formName.placeholder = translations[lang].namePlace;
    formEmail.placeholder = translations[lang].emailPlace;
    formMessage.placeholder = translations[lang].messagePlace;
    formSubmit.textContent = translations[lang].submitBtn;

    // Update Comment Section
    commentTitle.textContent = translations[lang].commentTitle;
    commentText.placeholder = translations[lang].commentTextPlace;
    commentSubmit.textContent = translations[lang].commentSubmitBtn;

    // Update AdSense Compliance Content
    document.querySelector("#about-title").textContent = translations[lang].aboutTitle;
    document.querySelector("#about-text").textContent = translations[lang].aboutText;
    document.querySelector("#how-title").textContent = translations[lang].howTitle;
    document.querySelector("#how-text").textContent = translations[lang].howText;
    document.querySelector("#privacy-title").textContent = translations[lang].privacyTitle;
    document.querySelector("#privacy-text").textContent = translations[lang].privacyText;

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

// Lotto Logic
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

const displayLottoSets = (count) => {
    lottoSetsContainer.innerHTML = "";
    const validatedCount = Math.min(Math.max(count, 1), 30);
    
    for (let i = 0; i < validatedCount; i++) {
        const numbers = generateLottoNumbers();
        const setDiv = document.createElement("div");
        setDiv.className = "lotto-set";
        
        numbers.forEach(number => {
            const numberDiv = document.createElement("div");
            numberDiv.classList.add("lotto-number");
            numberDiv.textContent = number;
            numberDiv.style.backgroundColor = getNumberColor(number);
            setDiv.appendChild(numberDiv);
        });
        
        lottoSetsContainer.appendChild(setDiv);
    }
};

generateBtn.addEventListener("click", () => {
    const count = parseInt(setCountInput.value) || 1;
    displayLottoSets(count);
});

// Profanity Filter
const badWords = [
    // Korean common profanity (Add more as needed)
    "시발", "씨발", "병신", "개새끼", "지랄", "존나", "빡치네", "미친",
    // English common profanity
    "fuck", "shit", "bastard", "asshole", "bitches", "dick"
]; 

const filterProfanity = (text) => {
    let filteredText = text;
    badWords.forEach(word => {
        // Use regex to match words more accurately, including variations
        const regex = new RegExp(word, "gi");
        filteredText = filteredText.replace(regex, (match) => "*".repeat(match.length));
    });
    return filteredText;
};

// Admin Configuration
const ADMIN_KEY = "854494";
const urlParams = new URLSearchParams(window.location.search);
const isAdmin = urlParams.get("admin") === ADMIN_KEY;

if (isAdmin) {
    console.log("Admin mode activated via secret key");
}

// Lotto Logic...
// (Keep existing translations, lotto generation, and theme logic)

// Comment Logic
const loadComments = () => {
    const comments = JSON.parse(localStorage.getItem("comments") || "[]");
    commentList.innerHTML = "";
    const lang = localStorage.getItem("lang") || "ko";
    
    comments.forEach((comment, index) => {
        const div = document.createElement("div");
        div.className = "comment-item";
        
        let deleteBtn = "";
        if (isAdmin) {
            deleteBtn = `<button class="delete-comment-btn" onclick="deleteComment(${index})">×</button>`;
        }

        div.innerHTML = `
            <div class="comment-header">
                <div class="author">${translations[lang].anonymous}</div>
                ${deleteBtn}
            </div>
            <div class="text">${comment.text}</div>
        `;
        commentList.appendChild(div);
    });
};

window.deleteComment = (index) => {
    if (!isAdmin) return;
    if (!confirm("정말 이 댓글을 삭제하시겠습니까?")) return;
    
    const comments = JSON.parse(localStorage.getItem("comments") || "[]");
    comments.splice(index, 1);
    localStorage.setItem("comments", JSON.stringify(comments));
    loadComments();
};

commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const filteredText = filterProfanity(commentText.value);
    
    const newComment = {
        text: filteredText,
        date: new Date().toISOString()
    };
    const comments = JSON.parse(localStorage.getItem("comments") || "[]");
    comments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(comments));
    
    commentText.value = "";
    loadComments();
});

// Initial Load
displayLottoSets(1);
loadComments();
