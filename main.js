const lottoSetsContainer = document.querySelector("#lotto-sets-container");
const generateBtn = document.querySelector("#generate-btn");
const themeToggle = document.querySelector("#theme-toggle");
const languageSelect = document.querySelector("#language-select");
const title = document.querySelector("#title");
const setCountInput = document.querySelector("#set-count");
const countLabel = document.querySelector("#count-label");

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
        commentTitle: "댓글",
        commentTextPlace: "댓글을 입력하세요... (비속어는 자동 필터링됩니다)",
        commentSubmitBtn: "댓글 등록",
        anonymous: "익명",
        aboutTitle: "서비스 소개",
        aboutText: "이 도구는 최신 난수 생성 알고리즘을 사용하여 1부터 45 사이의 무작위 번호 6개를 생성합니다. 각 번호는 공식 로또 규정에 맞게 색상별로 시각화되어 제공됩니다.",
        howTitle: "구체적인 사용 방법",
        howText: "1. 상단 수량 입력칸에 1에서 30 사이의 숫자를 입력합니다.<br>2. '번호 생성' 버튼을 클릭합니다.<br>3. 즉석에서 번호 조합이 생성되며, 아래로 스크롤하여 모든 세트를 확인할 수 있습니다.",
        privacyTitle: "개인정보 처리방침",
        privacyText: "본 사이트는 사용자 경험 개선을 위해 브라우저 저장소(localStorage)와 쿠키를 활용할 수 있습니다. 수집된 데이터는 통계 및 광고 최적화 목적으로만 활용됩니다.",
        disclaimer: "※ 본 서비스는 재미와 참고를 위한 무작위 번호 생성 도구입니다. 실제 당첨을 보장하지 않으며, 결과에 대한 법적 책임은 사용자 본인에게 있습니다."
    },
    en: {
        title: "Lotto Number Recommendation",
        button: "Generate Numbers",
        docTitle: "Lotto Number Generator",
        countLabel: "Number of sets (max 30):",
        commentTitle: "Comments",
        commentTextPlace: "Add a comment... (Profanity will be filtered)",
        commentSubmitBtn: "Post Comment",
        anonymous: "Anonymous",
        aboutTitle: "About This Service",
        aboutText: "This tool generates 6 unique random numbers between 1 and 45 using a modern randomization algorithm, visualized with official lotto colors.",
        howTitle: "How to Use",
        howText: "1. Enter a number between 1 and 30 in the input field.<br>2. Click the 'Generate Numbers' button.<br>3. New combinations will appear instantly; scroll down to see all sets.",
        privacyTitle: "Privacy Policy",
        privacyText: "This site uses cookies and localStorage to improve user experience. Data is used solely for analytics and AdSense optimization.",
        disclaimer: "※ This service is a random generation tool for entertainment purposes only. We do not guarantee any winnings, and users are responsible for their own actions."
    },
    zh: {
        title: "大乐透号码推荐",
        button: "生成号码",
        docTitle: "乐透号码生成器",
        countLabel: "生成组数 (最大 30):",
        commentTitle: "评论",
        commentTextPlace: "添加评论... (将过滤脏话)",
        commentSubmitBtn: "发表评论",
        anonymous: "匿名",
        aboutTitle: "服务介绍",
        aboutText: "该工具使用现代随机化算法生成 1 到 45 之间的 6 个唯一随机数，并以官方乐透颜色可视化显示。",
        howTitle: "使用说明",
        howText: "1. 在输入框中输入 1 到 30 之间的数字。<br>2. 点击'生成号码'按钮。<br>3. 新组合将立即出现；向下滚动即可查看所有组。",
        privacyTitle: "隐私政策",
        privacyText: "本网站使用 Cookie 和 localStorage 以改善用户体验。数据仅用于分析 and 广告优化。",
        disclaimer: "※ 本服务仅为娱乐用途的随机生成工具。我们不保证任何中奖结果，用户需对自己的行为负责。"
    },
    jp: {
        title: "ロト番号おすすめ",
        button: "番号を生成",
        docTitle: "ロト番号生成器",
        countLabel: "生成セット数 (最大 30):",
        commentTitle: "コメント",
        commentTextPlace: "コメントを入力してください... (不適切な言葉はフィルタリングされます)",
        commentSubmitBtn: "コメントを投稿",
        anonymous: "匿名",
        aboutTitle: "サービスについて",
        aboutText: "このツールは最新の乱数生成アルゴリズムを使用して、1から45までの重複しない6つの数字を生成し、公式の色で表示します。",
        howTitle: "具体的な使い方",
        howText: "1. 上の入力欄に1から30までの数字を入力します。<br>2. 「番号を生成」ボタンをクリックします。<br>3. 瞬時に番号の組み合わせが生成され、スクロールして全セットを確認できます。",
        privacyTitle: "プライバシーポリシー",
        privacyText: "当サイトはユーザー体験向上のためにクッキーおよびlocalStorageを使用する場合があります。データは統計および広告最適化の目的でのみ使用されます。",
        disclaimer: "※ 本サービスは娯楽目的のランダム番号生成ツールです。当選を保証するものではなく、結果については自己責任でお願いいたします。"
    }
};

const updateLanguage = (lang) => {
    title.textContent = translations[lang].title;
    generateBtn.textContent = translations[lang].button;
    countLabel.textContent = translations[lang].countLabel;
    document.title = translations[lang].docTitle;

    // Update Comment Section
    commentTitle.textContent = translations[lang].commentTitle;
    commentText.placeholder = translations[lang].commentTextPlace;
    commentSubmit.textContent = translations[lang].commentSubmitBtn;

    // Update AdSense Compliance Content
    document.querySelector("#about-title").textContent = translations[lang].aboutTitle;
    document.querySelector("#about-text").textContent = translations[lang].aboutText;
    document.querySelector("#how-title").textContent = translations[lang].howTitle;
    document.querySelector("#how-text").innerHTML = translations[lang].howText;
    document.querySelector("#privacy-title").textContent = translations[lang].privacyTitle;
    document.querySelector("#privacy-text").textContent = translations[lang].privacyText;
    document.querySelector("#disclaimer-text").textContent = translations[lang].disclaimer;

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
    "시발", "씨발", "병신", "개새끼", "지랄", "존나", "빡치네", "미친",
    "fuck", "shit", "bastard", "asshole", "bitches", "dick"
]; 

const filterProfanity = (text) => {
    let filteredText = text;
    badWords.forEach(word => {
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
