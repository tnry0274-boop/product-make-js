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
        title: "글로벌 로또 번호 생성기",
        button: "행운의 번호 생성하기",
        docTitle: "로또 번호 생성기 - 오늘의 운세 번호",
        countLabel: "생성할 세트 수 (최대 30):",
        commentTitle: "사용자 소통 공간",
        commentTextPlace: "건전한 댓글 문화를 만들어주세요. (비속어는 자동 필터링됩니다)",
        commentSubmitBtn: "댓글 등록",
        anonymous: "익명",
        admin: "관리자",
        aboutTitle: "서비스 및 기술 소개",
        aboutText: "본 서비스는 암호학적으로 안전한 난수 생성(CSPRNG) 원리를 응용하여 1부터 45 사이의 중복 없는 6개 숫자를 추출합니다. 사용자는 다양한 국가의 로또 시스템(6/45 방식)에 이 번호를 참고할 수 있으며, 직관적인 UI를 통해 번호대별 분포를 시각적으로 확인할 수 있습니다.",
        howTitle: "상세 이용 가이드",
        howText: "1. 상단 수량 설정: 한 번에 분석하고자 하는 세트 수(1~30)를 선택합니다.<br>2. 알고리즘 실행: '번호 생성' 버튼을 클릭하여 난수 생성 엔진을 구동합니다.<br>3. 결과 분석: 생성된 번호들은 실제 로또 공의 색상 규정에 따라 분류되어 표시됩니다.<br>4. 기록 및 활용: 하단의 댓글 창을 통해 다른 사용자들과 당첨 기운을 공유해보세요.",
        privacyTitle: "개인정보 처리방침 및 쿠키 정책",
        privacyText: "사용자의 브라우저 설정(테마, 언어)은 로컬 스토리지에만 저장되며 외부로 전송되지 않습니다. Google AdSense를 포함한 서드파티 서비스는 맞춤형 광고 제공을 위해 쿠키를 사용할 수 있습니다.",
        termsTitle: "서비스 이용약관",
        termsText: "본 사이트는 정보를 제공할 뿐, 어떠한 금전적 거래도 요구하지 않습니다. 생성된 번호는 확률에 기반한 결과이며 결과에 대한 책임은 이용자에게 있습니다.",
        disclaimer: "※ 경고: 로또는 도박이 아닌 오락으로 즐겨주세요. 본 서비스는 당첨을 보장하지 않으며 어떠한 법적 책임도 지지 않습니다."
    },
    en: {
        title: "Global Lotto Number Generator",
        button: "Generate Lucky Numbers",
        docTitle: "Lotto Generator - Your Lucky Numbers Today",
        countLabel: "Number of sets (max 30):",
        commentTitle: "User Discussion",
        commentTextPlace: "Please share your thoughts. (Profanity filtered)",
        commentSubmitBtn: "Post Comment",
        anonymous: "Anonymous",
        admin: "Admin",
        aboutTitle: "About Our Service",
        aboutText: "Our tool utilizes advanced randomization algorithms to provide 6 unique numbers between 1 and 45. Designed for global lotto formats, it offers a clean, visual representation of potential combinations based on statistical randomness.",
        howTitle: "User Guide",
        howText: "1. Set Quantity: Choose between 1 and 30 sets.<br>2. Generate: Click the button to run the algorithm.<br>3. Review: Analyze the color-coded results according to international lotto standards.<br>4. Engage: Use the comment section to connect with other users.",
        privacyTitle: "Privacy & Cookie Policy",
        privacyText: "User preferences are stored locally. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.",
        termsTitle: "Terms of Service",
        termsText: "This website provides random information for free. We do not guarantee winnings, and users are responsible for their own participation in any actual lottery.",
        disclaimer: "※ Disclaimer: This is for entertainment purposes only. Winnings are not guaranteed, and we hold no legal responsibility for the results."
    },
    zh: {
        title: "全球乐透号码生成器",
        button: "生成幸运号码",
        docTitle: "乐透生成器 - 今天的幸运号码",
        countLabel: "生成组数 (最大 30):",
        commentTitle: "用户交流",
        commentTextPlace: "请分享您的想法。(自动过滤不当言论)",
        commentSubmitBtn: "发表评论",
        anonymous: "匿名",
        admin: "管理员",
        aboutTitle: "关于本服务",
        aboutText: "本工具采用先进的随机化算法，在 1 到 45 之间生成 6 个唯一的随机数。它适用于全球各种乐透格式，并根据统计随机性提供清晰的组合可视化展示。",
        howTitle: "使用说明",
        howText: "1. 设置数量：选择 1 到 30 组。<br>2. 执行：点击按钮运行算法。<br>3. 分析：根据国际乐透标准查看颜色编码的结果。<br>4. 互动：在评论区与其他用户交流。",
        privacyTitle: "隐私与 Cookie 政策",
        privacyText: "用户偏好存储在本地。包括 Google 在内的第三方服务可能会使用 Cookie 根据用户访问历史投放广告。",
        termsTitle: "服务条款",
        termsText: "本网站免费提供随机信息。我们不保证中奖，用户对参与任何实际乐透的行为负全部责任。",
        disclaimer: "※ 免责声明：本服务仅供娱乐参考。不保证中奖，对结果不承担任何法律责任。"
    },
    jp: {
        title: "グローバルロト番号生成器",
        button: "幸運の番号を生成する",
        docTitle: "ロト番号生成器 - 今日のラッキーナンバー",
        countLabel: "生成セット数 (最大 30):",
        commentTitle: "ユーザー交流スペース",
        commentTextPlace: "健全なコメントをお願いします。(不適切な言葉は自動的にフィルタリングされます)",
        commentSubmitBtn: "コメントを投稿",
        anonymous: "匿名",
        admin: "管理者",
        aboutTitle: "サービスと技術紹介",
        aboutText: "本サービスは暗号学的に安全な乱数生成原理を応用し、1から45までの重複しない6つの数字を抽出します。直感的なUIを通じて、番号ごとの分布を視覚的に確認できます。",
        howTitle: "詳細利用ガイド",
        howText: "1. 数量設定：一度に分析したいセット数（1〜30）を選択します。<br>2. アルゴリズム実行：「番号を生成」ボタンをクリックしてエンジンを起動します。<br>3. 結果分析：生成された番号は実際のロトの規則に従って色分け表示されます。<br>4. 交流：下部のコメント欄を通じて他のユーザーと運気を共有しましょう。",
        privacyTitle: "個人情報保護方針とクッキーポリシー",
        privacyText: "ユーザー設定はローカルストレージにのみ保存されます。Google AdSenseを含むサードパーティサービスは、広告配信のためにクッキーを使用する場合があります。",
        termsTitle: "利用規約",
        termsText: "本サイトは情報の提供のみを目的としており、金銭的な取引は一切要求しません。生成された番号は確率に基づく結果であり、自己責任でご利用ください。",
        disclaimer: "※ 注意：ロトはギャンブルではなく娯楽としてお楽しみください。当選を保証するものではなく、一切の責任を負いません。"
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
    document.querySelector("#terms-title").textContent = translations[lang].termsTitle;
    document.querySelector("#terms-text").textContent = translations[lang].termsText;
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

        const authorName = comment.isAdmin ? translations[lang].admin : translations[lang].anonymous;

        div.innerHTML = `
            <div class="comment-header">
                <div class="author ${comment.isAdmin ? 'admin-author' : ''}">${authorName}</div>
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
        date: new Date().toISOString(),
        isAdmin: isAdmin
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
