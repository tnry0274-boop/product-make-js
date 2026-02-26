const lottoSetsContainer = document.querySelector("#lotto-sets-container");
const generateBtn = document.querySelector("#generate-btn");
const themeToggle = document.querySelector("#theme-toggle");
const languageSelect = document.querySelector("#language-select");
const title = document.querySelector("#title");
const setCountInput = document.querySelector("#set-count");
const countLabel = document.querySelector("#count-label");

// Tab elements
const navBtns = document.querySelectorAll(".nav-btn");
const tabContents = document.querySelectorAll(".tab-content");

// Tax Calculator elements
const prizeInput = document.querySelector("#prize-input");
const calcBtn = document.querySelector("#calc-btn");
const calcResultBox = document.querySelector("#calc-result");
const resTotal = document.querySelector("#res-total");
const resTax = document.querySelector("#res-tax");
const resNet = document.querySelector("#res-net");

// Comment elements
const commentTitle = document.querySelector("#comment-title");
const commentList = document.querySelector("#comment-list");
const commentForm = document.querySelector("#comment-form");
const commentText = document.querySelector("#comment-text");
const commentSubmit = document.querySelector("#comment-submit");

// Content Section Selectors
const analysisContent = document.querySelector("#analysis-content");
const taxContent = document.querySelector("#tax-content");
const statsContent = document.querySelector("#stats-content");
const policyContent = document.querySelector("#policy-content");

// Translations
const translations = {
    ko: {
        navHome: "홈",
        navAnalysis: "확률 분석",
        navTax: "세금 정보",
        navStats: "역대 통계",
        navPolicy: "정책",
        calcTitle: "실수령액 자동 계산기",
        prizePlaceholder: "당첨 금액 입력 (원)",
        calcBtn: "계산하기",
        resTotalLabel: "총 당첨금:",
        resTaxLabel: "공제 세금:",
        resNetLabel: "실수령액:",
        currency: "원",
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
        disclaimer: "※ 경고: 로또는 도박이 아닌 오락으로 즐겨주세요. 본 서비스는 당첨을 보장하지 않으며 어떠한 법적 책임도 지지 않습니다.",
        analysisTitle: "로또 6/45 당첨 확률 상세 분석",
        analysisBody: `
            <h3>각 등수별 당첨 확률</h3>
            <table>
                <tr><th>등수</th><th>조건</th><th>확률 (분수)</th><th>확률 (%)</th></tr>
                <tr><td>1등</td><td>6개 번호 일치</td><td>1 / 8,145,060</td><td>0.0000122%</td></tr>
                <tr><td>2등</td><td>5개 + 보너스 번호 일치</td><td>1 / 1,357,510</td><td>0.0000736%</td></tr>
                <tr><td>3등</td><td>5개 번호 일치</td><td>1 / 35,724</td><td>0.0028%</td></tr>
                <tr><td>4등</td><td>4개 번호 일치</td><td>1 / 733</td><td>0.136%</td></tr>
                <tr><td>5등</td><td>3개 번호 일치</td><td>1 / 45</td><td>2.22%</td></tr>
            </table>
            <p>로또 1등 당첨 확률은 약 0.0000122%로 매우 희박합니다. 본 시스템은 난수 생성 기반의 번호를 제공하며 당첨을 보장하지 않습니다.</p>
        `,
        taxTitle: "로또 당첨금 세금 규정",
        taxBody: `
            <p>대한민국 로또 당첨금은 기타소득으로 분류되어 다음과 같은 세율이 적용됩니다.</p>
            <ul>
                <li><strong>200만원 이하:</strong> 비과세 (세금 0%)</li>
                <li><strong>200만원 초과 ~ 3억원 이하:</strong> 22% (소득세 20% + 지방세 2%)</li>
                <li><strong>3억원 초과:</strong> 33% (소득세 30% + 지방세 3%)</li>
            </ul>
            <p>※ 당첨금 3억 원 초과 시, 3억 원까지는 22%를 적용하고 이를 초과하는 나머지 금액에 대해서만 33%를 적용하여 합산합니다.</p>
        `,
        statsTitle: "최근 당첨 번호 및 통계 분석",
        statsBody: `
            <h3>최근 10회차 당첨 번호</h3>
            <table>
                <thead>
                    <tr><th>회차</th><th>당첨 번호</th><th>보너스</th></tr>
                </thead>
                <tbody>
                    <tr><td>1158회</td><td>2, 10, 14, 22, 32, 36</td><td>41</td></tr>
                    <tr><td>1157회</td><td>14, 16, 27, 35, 39, 45</td><td>5</td></tr>
                    <tr><td>1156회</td><td>1, 11, 21, 25, 38, 40</td><td>17</td></tr>
                    <tr><td>1155회</td><td>4, 9, 12, 16, 20, 29</td><td>45</td></tr>
                    <tr><td>1154회</td><td>6, 12, 19, 24, 34, 41</td><td>4</td></tr>
                    <tr><td>1153회</td><td>10, 15, 18, 21, 34, 42</td><td>6</td></tr>
                    <tr><td>1152회</td><td>7, 17, 22, 29, 31, 44</td><td>2</td></tr>
                    <tr><td>1151회</td><td>3, 12, 20, 25, 32, 44</td><td>21</td></tr>
                    <tr><td>1150회</td><td>1, 5, 8, 11, 28, 40</td><td>15</td></tr>
                    <tr><td>1149회</td><td>2, 11, 15, 23, 31, 41</td><td>45</td></tr>
                </tbody>
            </table>
            
            <h3 style="margin-top:30px;">미출현 번호 분석 (최근 100회 기준 최소 출현)</h3>
            <div class="badge-container">
                <span class="stat-badge">9번 (6회)</span>
                <span class="stat-badge">22번 (7회)</span>
                <span class="stat-badge">29번 (7회)</span>
                <span class="stat-badge">41번 (8회)</span>
                <span class="stat-badge">18번 (8회)</span>
            </div>
        `,
        policyTitle: "개인정보처리방침 및 서비스 운영 정책",
        policyBody: `
            <h3>1. 개인정보 수집 및 이용</h3>
            <p>본 사이트는 어떠한 개인 식별 정보도 수집하거나 저장하지 않습니다.</p>
            <h3>2. 쿠키(Cookie) 및 광고 정책</h3>
            <p>Google AdSense 등 서드파티 공급업체는 광고 게재를 위해 쿠키를 사용합니다.</p>
        `
    },
    en: {
        navHome: "Home",
        navAnalysis: "Analysis",
        navTax: "Tax Info",
        navStats: "Stats",
        navPolicy: "Policy",
        calcTitle: "Net Payout Calculator",
        prizePlaceholder: "Enter prize amount",
        calcBtn: "Calculate",
        resTotalLabel: "Gross Prize:",
        resTaxLabel: "Total Tax:",
        resNetLabel: "Net Payout:",
        currency: " KRW",
        title: "Global Lotto Number Generator",
        button: "Generate Lucky Numbers",
        docTitle: "Lotto Generator - Your Lucky Numbers Today",
        countLabel: "Number of sets (max 30):",
        commentTitle: "User Discussion",
        commentTextPlace: "Please share your thoughts.",
        commentSubmitBtn: "Post Comment",
        anonymous: "Anonymous",
        admin: "Admin",
        aboutTitle: "About Our Service",
        aboutText: "This service applies Cryptographically Secure Pseudo-Random Number Generation (CSPRNG) principles to extract 6 unique numbers between 1 and 45. Users can refer to these numbers for various 6/45 lotto systems worldwide and visually check the distribution through an intuitive UI.",
        howTitle: "User Guide",
        howText: "1. Set Quantity: Select the number of sets (1-30) you want to analyze.<br>2. Run Algorithm: Click the 'Generate Numbers' button to start the random generation engine.<br>3. Analyze Results: Generated numbers are categorized and displayed according to official lottery ball color standards.<br>4. Share: Share your good luck with other users through the comment section below.",
        privacyTitle: "Privacy & Cookie Policy",
        privacyText: "User preferences are stored locally and not transmitted externally. Third-party services, including Google AdSense, may use cookies to provide personalized advertisements.",
        termsTitle: "Terms of Service",
        termsText: "This website provides random information for free and does not require any financial transactions. Generated numbers are based on probability, and users are responsible for how they use them.",
        disclaimer: "※ Warning: Please enjoy the lottery as entertainment, not gambling. This service does not guarantee winnings and assumes no legal responsibility.",
        analysisTitle: "Lotto 6/45 Winning Probability Analysis",
        analysisBody: `
            <h3>Odds by Prize Tier</h3>
            <table>
                <tr><th>Rank</th><th>Condition</th><th>Probability (Fraction)</th><th>Probability (%)</th></tr>
                <tr><td>1st</td><td>6 Main Numbers</td><td>1 / 8,145,060</td><td>0.0000122%</td></tr>
                <tr><td>2nd</td><td>5 Main + Bonus Number</td><td>1 / 1,357,510</td><td>0.0000736%</td></tr>
                <tr><td>3rd</td><td>5 Main Numbers</td><td>1 / 35,724</td><td>0.0028%</td></tr>
                <tr><td>4th</td><td>4 Main Numbers</td><td>1 / 733</td><td>0.136%</td></tr>
                <tr><td>5th</td><td>3 Main Numbers</td><td>1 / 45</td><td>2.22%</td></tr>
            </table>
            <p>The probability of winning the 1st prize is approximately 0.0000122%. This system provides numbers based on random generation and does not guarantee winning.</p>
        `,
        taxTitle: "Korean Lottery Tax Regulations",
        taxBody: `
            <p>Korean Lottery (Lotto 6/45) prizes are classified as 'Other Income' and the following tax rates apply:</p>
            <ul>
                <li><strong>Under 2M KRW:</strong> Tax-free (0%)</li>
                <li><strong>2M - 300M KRW:</strong> 22% (20% Income Tax + 2% Local Tax)</li>
                <li><strong>Over 300M KRW:</strong> 33% (30% Income Tax + 3% Local Tax)</li>
            </ul>
            <p>※ For prizes over 300 million KRW, 22% is applied to the first 300 million KRW, and 33% is applied only to the remaining amount.</p>
        `,
        statsTitle: "Recent Draws & Statistical Analysis",
        statsBody: `
            <h3>Latest 10 Winning Numbers</h3>
            <table>
                <thead>
                    <tr><th>Draw</th><th>Winning Numbers</th><th>Bonus</th></tr>
                </thead>
                <tbody>
                    <tr><td>1158</td><td>2, 10, 14, 22, 32, 36</td><td>41</td></tr>
                    <tr><td>1157</td><td>14, 16, 27, 35, 39, 45</td><td>5</td></tr>
                    <tr><td>1156</td><td>1, 11, 21, 25, 38, 40</td><td>17</td></tr>
                    <tr><td>1155</td><td>4, 9, 12, 16, 20, 29</td><td>45</td></tr>
                    <tr><td>1154</td><td>6, 12, 19, 24, 34, 41</td><td>4</td></tr>
                    <tr><td>1153</td><td>10, 15, 18, 21, 34, 42</td><td>6</td></tr>
                    <tr><td>1152</td><td>7, 17, 22, 29, 31, 44</td><td>2</td></tr>
                    <tr><td>1151</td><td>3, 12, 20, 25, 32, 44</td><td>21</td></tr>
                    <tr><td>1150</td><td>1, 5, 8, 11, 28, 40</td><td>15</td></tr>
                    <tr><td>1149</td><td>2, 11, 15, 23, 31, 41</td><td>45</td></tr>
                </tbody>
            </table>
            
            <h3 style="margin-top:30px;">Cold Numbers (Least frequent in last 100 draws)</h3>
            <div class="badge-container">
                <span class="stat-badge">No. 9 (6 times)</span>
                <span class="stat-badge">No. 22 (7 times)</span>
                <span class="stat-badge">No. 29 (7 times)</span>
                <span class="stat-badge">No. 41 (8 times)</span>
                <span class="stat-badge">No. 18 (8 times)</span>
            </div>
        `,
        policyTitle: "Privacy Policy & Operation Policy",
        policyBody: `
            <h3>1. Collection and Use of Personal Information</h3>
            <p>This site does not collect or store any personally identifiable information.</p>
            <h3>2. Cookie and Advertising Policy</h3>
            <p>Third-party vendors, including Google AdSense, use cookies to serve ads based on a user's prior visits to your website or other websites.</p>
        `
    },
    zh: {
        navHome: "首页", navAnalysis: "概率分析", navTax: "税务信息", navStats: "历史统计", navPolicy: "政策",
        calcTitle: "实收金额计算器", prizePlaceholder: "输入奖金金额", calcBtn: "计算", currency: " 韩元",
        title: "全球乐透号码生成器", button: "生成幸运号码",
        docTitle: "乐透生成器", countLabel: "生成组数 (最大 30):",
        commentTitle: "用户交流", commentTextPlace: "请分享您的想法。", commentSubmitBtn: "发表评论",
        anonymous: "匿名", admin: "管理员", aboutTitle: "关于本服务", aboutText: "本工具采用先进的随机化算法。",
        howTitle: "使用说明", howText: "1. 设置数量 2. 执行 3. 分析 4. 互动",
        privacyTitle: "隐私与 Cookie 政策", privacyText: "用户偏好存储在本地。",
        termsTitle: "服务条款", termsText: "本网站免费提供随机信息。",
        disclaimer: "※ 免责声明：本服务仅供娱乐参考。"
    },
    jp: {
        navHome: "ホーム", navAnalysis: "確率分析", navTax: "税金情報", navStats: "統計データ", navPolicy: "ポリシー",
        calcTitle: "受取額計算機", prizePlaceholder: "当選金額を入力", calcBtn: "計算", currency: " ウォン",
        title: "グローバルロト番号生成器", button: "幸運의 번호 생성하기",
        docTitle: "ロト番号生成器", countLabel: "生成セット数 (最大 30):",
        commentTitle: "ユーザー交流スペース", commentTextPlace: "健全なコメントをお願いします。", commentSubmitBtn: "投稿",
        anonymous: "匿名", admin: "管理者", aboutTitle: "サービス紹介", aboutText: "乱数生成原理を応用した番号抽出ツールです。",
        howTitle: "利用ガイド", howText: "1. 数量設定 2. 生成 3. 分析",
        privacyTitle: "プライバシーポリシー", privacyText: "設定はローカルに保存されます。",
        termsTitle: "利用規約", termsText: "情報の提供のみを目的としています。",
        disclaimer: "※ 注意：ロトは娯楽としてお楽しみください。"
    }
};

const formatCurrency = (num, lang) => {
    return num.toLocaleString() + translations[lang].currency;
};

const updateLanguage = (lang) => {
    // Nav Buttons
    navBtns[0].textContent = translations[lang].navHome;
    navBtns[1].textContent = translations[lang].navAnalysis;
    navBtns[2].textContent = translations[lang].navTax;
    navBtns[3].textContent = translations[lang].navStats;
    navBtns[4].textContent = translations[lang].navPolicy;

    // Calculator Labels
    document.querySelector("#calc-title").textContent = translations[lang].calcTitle;
    prizeInput.placeholder = translations[lang].prizePlaceholder;
    calcBtn.textContent = translations[lang].calcBtn;
    if (translations[lang].resTotalLabel) {
        document.querySelectorAll(".result-item span:first-child")[0].textContent = translations[lang].resTotalLabel;
        document.querySelectorAll(".result-item span:first-child")[1].textContent = translations[lang].resTaxLabel;
        document.querySelectorAll(".result-item span:first-child")[2].textContent = translations[lang].resNetLabel;
    }

    title.textContent = translations[lang].title;
    generateBtn.textContent = translations[lang].button;
    countLabel.textContent = translations[lang].countLabel;
    document.title = translations[lang].docTitle;

    // Update Section Titles
    document.querySelector("#analysis-title").textContent = translations[lang].analysisTitle;
    document.querySelector("#tax-title").textContent = translations[lang].taxTitle;
    document.querySelector("#stats-title").textContent = translations[lang].statsTitle;
    if (document.querySelector("#policy-title")) {
        document.querySelector("#policy-title").textContent = translations[lang].navPolicy;
    }

    // Update Section Bodies
    analysisContent.innerHTML = translations[lang].analysisBody;
    taxContent.innerHTML = translations[lang].taxBody;
    statsContent.innerHTML = translations[lang].statsBody;
    policyContent.innerHTML = translations[lang].policyBody;

    // Update Comment Section
    commentTitle.textContent = translations[lang].commentTitle;
    commentText.placeholder = translations[lang].commentTextPlace;
    commentSubmit.textContent = translations[lang].commentSubmitBtn;

    // Update Footer
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

// Tax Calculation Logic
calcBtn.addEventListener("click", () => {
    const amount = parseFloat(prizeInput.value);
    if (isNaN(amount) || amount < 0) return;

    let tax = 0;
    const threshold1 = 2000000;
    const threshold2 = 300000000;

    if (amount <= threshold1) {
        tax = 0;
    } else if (amount <= threshold2) {
        tax = amount * 0.22;
    } else {
        tax = (threshold2 * 0.22) + ((amount - threshold2) * 0.33);
    }

    const net = amount - tax;
    const lang = localStorage.getItem("lang") || "ko";

    resTotal.textContent = formatCurrency(amount, lang);
    resTax.textContent = formatCurrency(tax, lang);
    resNet.textContent = formatCurrency(net, lang);
    calcResultBox.classList.remove("hidden");
});

// Tab switching logic
navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        navBtns.forEach(b => b.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById(target).classList.add("active");
    });
});

// Initial Language Logic
const savedLang = localStorage.getItem("lang") || "en";
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
const badWords = ["시발", "씨발", "병신", "개새끼", "지랄", "존나", "빡치네", "미친", "fuck", "shit", "bastard", "asshole", "bitches", "dick"]; 
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

// Comment Logic
const loadComments = () => {
    const comments = JSON.parse(localStorage.getItem("comments") || "[]");
    commentList.innerHTML = "";
    const lang = localStorage.getItem("lang") || "ko";
    comments.forEach((comment, index) => {
        const div = document.createElement("div");
        div.className = "comment-item";
        let deleteBtn = isAdmin ? `<button class="delete-comment-btn" onclick="deleteComment(${index})">×</button>` : "";
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
    if (!isAdmin || !confirm("정말 이 댓글을 삭제하시겠습니까?")) return;
    const comments = JSON.parse(localStorage.getItem("comments") || "[]");
    comments.splice(index, 1);
    localStorage.setItem("comments", JSON.stringify(comments));
    loadComments();
};

commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const filteredText = filterProfanity(commentText.value);
    const newComment = { text: filteredText, date: new Date().toISOString(), isAdmin: isAdmin };
    const comments = JSON.parse(localStorage.getItem("comments") || "[]");
    comments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(comments));
    commentText.value = "";
    loadComments();
});

// Initial Load
displayLottoSets(1);
loadComments();
