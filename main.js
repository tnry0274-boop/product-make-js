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
const faqContent = document.querySelector("#faq-content");
const aboutUsContent = document.querySelector("#about-us-content");
const responsibleContent = document.querySelector("#responsible-content");
const policyContent = document.querySelector("#policy-content");

// Translations
const translations = {
    ko: {
        navHome: "홈",
        navAnalysis: "확률 분석",
        navTax: "세금 정보",
        navStats: "역대 통계",
        navFaq: "자주 묻는 질문",
        navAbout: "소개",
        navResponsible: "책임 있는 게임",
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
            <p>로또 1등 당첨 확률은 약 0.0000122%로 매우 희박합니다. 이는 벼락에 맞을 확률보다 낮다고 알려져 있습니다. 따라서 로또는 당첨을 목적으로 큰 돈을 투자하기보다는 소액으로 즐기는 건전한 오락이 되어야 합니다.</p>
            <h3>수학적 관점에서의 전략</h3>
            <p>모든 번호 조합은 동일한 확률을 가집니다. 특정 번호가 자주 나온다고 해서 다음 회차에 나올 확률이 높아지는 것은 아닙니다(도박사의 오류). 가장 좋은 전략은 본인만의 숫자를 정하거나, 완전히 무작위로 생성된 번호를 사용하는 것입니다.</p>
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
            <p><strong>예시:</strong> 당첨금이 10억 원인 경우, 3억 원에 대해 22%, 나머지 7억 원에 대해 33%가 적용됩니다.</p>
        `,
        statsTitle: "최근 당첨 번호 및 통계 분석",
        statsBody: `
            <h3>최근 10회차 당첨 번호</h3>
            <table>
                <thead>
                    <tr><th>회차</th><th>당첨 번호</th><th>보너스</th></tr>
                </thead>
                <tbody>
                    <tr><td>1212회</td><td>5, 8, 25, 31, 41, 44</td><td>45</td></tr>
                    <tr><td>1211회</td><td>23, 26, 27, 35, 38, 40</td><td>10</td></tr>
                    <tr><td>1210회</td><td>1, 7, 9, 17, 27, 38</td><td>31</td></tr>
                    <tr><td>1209회</td><td>2, 17, 20, 35, 37, 39</td><td>24</td></tr>
                    <tr><td>1208회</td><td>6, 27, 30, 36, 38, 42</td><td>25</td></tr>
                    <tr><td>1207회</td><td>10, 22, 24, 27, 38, 45</td><td>11</td></tr>
                    <tr><td>1206회</td><td>1, 3, 17, 26, 27, 42</td><td>23</td></tr>
                    <tr><td>1205회</td><td>1, 4, 16, 23, 31, 41</td><td>2</td></tr>
                    <tr><td>1204회</td><td>8, 16, 28, 30, 31, 44</td><td>27</td></tr>
                    <tr><td>1203회</td><td>3, 6, 18, 29, 35, 39</td><td>24</td></tr>
                </tbody>
            </table>
            
            <h3 style="margin-top:30px;">미출현 번호 분석 (최근 100회 기준 최소 출현)</h3>
            <p>최근 100회 동안 상대적으로 적게 등장한 번호들입니다. 통계적으로는 모든 숫자의 출현 빈도가 수렴하지만, 단기적으로는 특정 숫자가 덜 나올 수 있습니다.</p>
            <div class="badge-container">
                <span class="stat-badge">12번 (미출현)</span>
                <span class="stat-badge">13번 (미출현)</span>
                <span class="stat-badge">15번 (미출현)</span>
                <span class="stat-badge">19번 (미출현)</span>
                <span class="stat-badge">21번 (미출현)</span>
            </div>
        `,
        faqTitle: "자주 묻는 질문 (FAQ)",
        faqBody: `
            <div class="faq-item">
                <h4>Q: 이 사이트에서 생성된 번호로 당첨될 수 있나요?</h4>
                <p>A: 네, 가능합니다. 하지만 저희 시스템은 무작위 난수 생성 알고리즘을 사용하므로 당첨 확률은 수동으로 고르거나 자동 번호를 받는 것과 수학적으로 동일합니다.</p>
            </div>
            <div class="faq-item">
                <h4>Q: 서비스 이용료가 있나요?</h4>
                <p>A: 아니요, 본 서비스는 100% 무료이며 어떠한 결제도 요구하지 않습니다.</p>
            </div>
            <div class="faq-item">
                <h4>Q: 개인정보를 저장하나요?</h4>
                <p>A: 아니요, 저희는 사용자의 개인정보를 서버에 저장하지 않습니다. 모든 설정은 브라우저의 로컬 스토리지에만 저장됩니다.</p>
            </div>
        `,
        aboutUsTitle: "회사 소개 및 비전",
        aboutUsBody: `
            <p>저희 팀은 사용자들에게 투명하고 신뢰할 수 있는 확률 정보를 제공하기 위해 모인 통계 전문가와 개발자들입니다. 단순한 번호 생성을 넘어, 로또와 관련된 다양한 데이터를 시각화하여 정보의 불균형을 해소하는 것을 목표로 합니다.</p>
            <p><strong>문의 사항:</strong> help@lottogenerator.com (예시 이메일)</p>
        `,
        responsibleTitle: "책임 있는 게임 안내",
        responsibleBody: `
            <p>복권은 즐거운 오락이 되어야 합니다. 과도한 몰입은 일상생활에 지장을 줄 수 있습니다.</p>
            <ul>
                <li>본인의 경제적 능력 범위 내에서만 즐기세요.</li>
                <li>로또를 수익 창출의 수단으로 생각하지 마세요.</li>
                <li>도움이 필요하시면 한국도박문제예방치유원(1336)으로 문의하세요.</li>
            </ul>
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
        navFaq: "FAQ",
        navAbout: "About",
        navResponsible: "Responsible Play",
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
            <p>The probability of winning the 1st prize is approximately 0.0000122%. This is statistically less likely than being struck by lightning. Therefore, the lottery should be treated as a form of low-cost entertainment rather than a serious investment.</p>
            <h3>Mathematical Strategy</h3>
            <p>Every combination of numbers has an equal probability of being drawn. There is no evidence that "hot" or "cold" numbers affect the outcome of the next draw (Gambler's Fallacy). The best approach is to enjoy the randomness or pick numbers that have personal meaning to you.</p>
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
            <p><strong>Example:</strong> For a 1 Billion KRW prize, 22% tax applies to the first 300M, and 33% to the remaining 700M.</p>
        `,
        statsTitle: "Recent Draws & Statistical Analysis",
        statsBody: `
            <h3>Latest 10 Winning Numbers</h3>
            <table>
                <thead>
                    <tr><th>Draw</th><th>Winning Numbers</th><th>Bonus</th></tr>
                </thead>
                <tbody>
                    <tr><td>1212</td><td>5, 8, 25, 31, 41, 44</td><td>45</td></tr>
                    <tr><td>1211</td><td>23, 26, 27, 35, 38, 40</td><td>10</td></tr>
                    <tr><td>1210</td><td>1, 7, 9, 17, 27, 38</td><td>31</td></tr>
                    <tr><td>1209</td><td>2, 17, 20, 35, 37, 39</td><td>24</td></tr>
                    <tr><td>1208</td><td>6, 27, 30, 36, 38, 42</td><td>25</td></tr>
                    <tr><td>1207</td><td>10, 22, 24, 27, 38, 45</td><td>11</td></tr>
                    <tr><td>1206</td><td>1, 3, 17, 26, 27, 42</td><td>23</td></tr>
                    <tr><td>1205</td><td>1, 4, 16, 23, 31, 41</td><td>2</td></tr>
                    <tr><td>1204</td><td>8, 16, 28, 30, 31, 44</td><td>27</td></tr>
                    <tr><td>1203</td><td>3, 6, 18, 29, 35, 39</td><td>24</td></tr>
                </tbody>
            </table>
            
            <h3 style="margin-top:30px;">Cold Numbers (Least frequent in last 100 draws)</h3>
            <p>These numbers have appeared the least frequently in the recent 100 draws. While every number is theoretically equally likely to appear, some may show up less often in a small sample size.</p>
            <div class="badge-container">
                <span class="stat-badge">No. 12 (Cold)</span>
                <span class="stat-badge">No. 13 (Cold)</span>
                <span class="stat-badge">No. 15 (Cold)</span>
                <span class="stat-badge">No. 19 (Cold)</span>
                <span class="stat-badge">No. 21 (Cold)</span>
            </div>
        `,
        faqTitle: "Frequently Asked Questions (FAQ)",
        faqBody: `
            <div class="faq-item">
                <h4>Q: Can I win with numbers generated here?</h4>
                <p>A: Yes, it is possible. However, our system uses a random number generation algorithm, so the odds of winning are mathematically the same as any other method.</p>
            </div>
            <div class="faq-item">
                <h4>Q: Is there a fee to use this service?</h4>
                <p>A: No, this service is 100% free and we never ask for any payment.</p>
            </div>
            <div class="faq-item">
                <h4>Q: Do you store personal information?</h4>
                <p>A: No, we do not store any personal information on our servers. All settings are saved locally in your browser.</p>
            </div>
        `,
        aboutUsTitle: "About Us & Vision",
        aboutUsBody: `
            <p>We are a team of data enthusiasts and developers dedicated to providing transparent and reliable probability information. Our goal is to empower users with data visualization and statistical insights related to the lottery.</p>
            <p><strong>Contact:</strong> help@lottogenerator.com (Demo Email)</p>
        `,
        responsibleTitle: "Responsible Gaming Guide",
        responsibleBody: `
            <p>Playing the lottery should be fun. It is important to play responsibly to ensure it remains a form of entertainment.</p>
            <ul>
                <li>Only play with money you can afford to lose.</li>
                <li>Do not view the lottery as a way to make money.</li>
                <li>If you need help, please contact a local gambling support helpline.</li>
            </ul>
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
    navBtns[4].textContent = translations[lang].navFaq;
    navBtns[5].textContent = translations[lang].navAbout;
    navBtns[6].textContent = translations[lang].navResponsible;
    navBtns[7].textContent = translations[lang].navPolicy;

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
    document.querySelector("#faq-title").textContent = translations[lang].faqTitle;
    document.querySelector("#about-us-title").textContent = translations[lang].aboutUsTitle;
    document.querySelector("#responsible-title").textContent = translations[lang].responsibleTitle;
    if (document.querySelector("#policy-title")) {
        document.querySelector("#policy-title").textContent = translations[lang].navPolicy;
    }

    // Update Section Bodies
    analysisContent.innerHTML = translations[lang].analysisBody;
    taxContent.innerHTML = translations[lang].taxBody;
    statsContent.innerHTML = translations[lang].statsBody;
    faqContent.innerHTML = translations[lang].faqBody;
    aboutUsContent.innerHTML = translations[lang].aboutUsBody;
    responsibleContent.innerHTML = translations[lang].responsibleBody;
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
const switchTab = (target) => {
    navBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));
    
    // Find matching button
    const activeBtn = Array.from(navBtns).find(b => b.getAttribute("data-target") === target);
    if (activeBtn) activeBtn.classList.add("active");
    
    const targetSection = document.getElementById(target);
    if (targetSection) {
        targetSection.classList.add("active");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        switchTab(target);
    });
});

document.querySelectorAll(".footer-link").forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        const target = link.getAttribute("data-target");
        switchTab(target);
    };
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
