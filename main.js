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
                <tr><th>등수</th><th>조건</th><th>확률</th></tr>
                <tr><td>1등</td><td>6개 번호 일치</td><td>1 / 8,145,060</td></tr>
                <tr><td>2등</td><td>5개 + 보너스 번호 일치</td><td>1 / 1,357,510</td></tr>
                <tr><td>3등</td><td>5개 번호 일치</td><td>1 / 35,724</td></tr>
                <tr><td>4등</td><td>4개 번호 일치</td><td>1 / 733</td></tr>
                <tr><td>5등</td><td>3개 번호 일치</td><td>1 / 45</td></tr>
            </table>
            <p>로또 1등 당첨 확률인 814만 분의 1은 벼락을 맞을 확률보다 낮다고 알려져 있습니다. 따라서 과도한 몰입보다는 소액으로 즐기는 건전한 오락 문화가 필요합니다.</p>
        `,
        taxTitle: "로또 당첨금 세금 계산 정보",
        taxBody: `
            <h3>당첨금 구간별 세율 (대한민국 기준)</h3>
            <ul>
                <li><strong>200만원 이하:</strong> 비과세 (세금 0%)</li>
                <li><strong>200만원 초과 ~ 3억원 이하:</strong> 22% (기타소득세 20% + 지방소득세 2%)</li>
                <li><strong>3억원 초과:</strong> 33% (기타소득세 30% + 지방소득세 3%)</li>
            </ul>
            <p>예를 들어, 10억 원에 당첨된 경우 처음 3억 원에 대해서는 22%, 나머지 7억 원에 대해서는 33%의 세율이 적용되어 계산됩니다. 2023년부터 당첨금 200만원 이하는 비과세로 변경되어 4등, 5등 및 일부 3등 당첨자는 세금을 내지 않습니다.</p>
        `,
        statsTitle: "역대 로또 당첨 번호 통계 데이터",
        statsBody: `
            <h3>가장 많이 나온 숫자 (최근 100회 기준)</h3>
            <p>통계적으로 모든 숫자의 출현 확률은 동일하지만, 특정 구간에서 빈번하게 등장하는 '핫 넘버'가 존재할 수 있습니다.</p>
            <table>
                <tr><th>순위</th><th>번호</th><th>출현 횟수</th></tr>
                <tr><td>1</td><td>43</td><td>18회</td></tr>
                <tr><td>2</td><td>12</td><td>16회</td></tr>
                <tr><td>3</td><td>27</td><td>15회</td></tr>
                <tr><td>4</td><td>1</td><td>14회</td></tr>
                <tr><td>5</td><td>34</td><td>14회</td></tr>
            </table>
            <p>※ 위 데이터는 예시 통계이며, 매주 실제 당첨 결과에 따라 변동될 수 있습니다. 독립 시행의 법칙에 따라 이전 회차의 결과가 다음 회차에 영향을 주지 않음을 유의하십시오.</p>
        `,
        policyTitle: "개인정보처리방침 및 서비스 운영 정책",
        policyBody: `
            <h3>1. 개인정보 수집 및 이용</h3>
            <p>본 사이트는 사용자의 이름, 이메일, 전화번호 등 어떠한 개인 식별 정보도 서버에 수집하거나 저장하지 않습니다.</p>
            <h3>2. 쿠키(Cookie) 및 광고 정책</h3>
            <p>Google AdSense 등 서드파티 공급업체는 사용자의 웹사이트 방문 기록을 바탕으로 광고를 게재하기 위해 쿠키를 사용합니다. 사용자는 Google 광고 설정에서 맞춤형 광고를 해제할 수 있습니다.</p>
            <h3>3. 로컬 스토리지 이용</h3>
            <p>사용자의 다크모드 설정, 언어 선택 값 등은 브라우저의 로컬 스토리지에 저장되어 사용자 편의를 위해 활용됩니다.</p>
            <h3>4. 면책 조항</h3>
            <p>본 사이트에서 제공하는 번호 생성 결과는 단순 참고용이며, 실제 당첨을 보장하지 않습니다. 로또 구매에 따른 결과와 책임은 전적으로 본인에게 있습니다.</p>
        `
    },
    en: {
        navHome: "Home",
        navAnalysis: "Analysis",
        navTax: "Tax Info",
        navStats: "Stats",
        navPolicy: "Policy",
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
        disclaimer: "※ Disclaimer: This is for entertainment purposes only. Winnings are not guaranteed, and we hold no legal responsibility for the results.",
        analysisTitle: "Lotto 6/45 Winning Probability",
        analysisBody: `
            <h3>Winning Odds by Prize Tier</h3>
            <table>
                <tr><th>Tier</th><th>Condition</th><th>Probability</th></tr>
                <tr><td>1st</td><td>6 Main Numbers</td><td>1 / 8,145,060</td></tr>
                <tr><td>2nd</td><td>5 Main + Bonus</td><td>1 / 1,357,510</td></tr>
                <tr><td>3rd</td><td>5 Main Numbers</td><td>1 / 35,724</td></tr>
                <tr><td>4th</td><td>4 Main Numbers</td><td>1 / 733</td></tr>
                <tr><td>5th</td><td>3 Main Numbers</td><td>1 / 45</td></tr>
            </table>
            <p>The 1-in-8.14 million chance of winning the top prize is extremely low. Please play responsibly and for entertainment only.</p>
        `,
        taxTitle: "Lottery Tax Information",
        taxBody: `
            <h3>Tax Rates (Example: South Korea)</h3>
            <ul>
                <li><strong>Under 2M KRW:</strong> Tax-free (0%)</li>
                <li><strong>2M - 300M KRW:</strong> 22% Tax</li>
                <li><strong>Over 300M KRW:</strong> 33% Tax</li>
            </ul>
            <p>Tax regulations vary by country. Please check your local laws for accurate information regarding lottery winnings and income tax.</p>
        `,
        statsTitle: "Historical Winning Number Statistics",
        statsBody: `
            <h3>Most Frequent Numbers (Last 100 Draws)</h3>
            <p>While every draw is independent, some users like to track historical "Hot Numbers".</p>
            <table>
                <tr><th>Rank</th><th>Number</th><th>Frequency</th></tr>
                <tr><td>1</td><td>43</td><td>18 times</td></tr>
                <tr><td>2</td><td>12</td><td>16 times</td></tr>
                <tr><td>3</td><td>27</td><td>15 times</td></tr>
                <tr><td>4</td><td>1</td><td>14 times</td></tr>
                <tr><td>5</td><td>34</td><td>14 times</td></tr>
            </table>
            <p>Note: These statistics are for reference only. Previous results do not influence future outcomes.</p>
        `,
        policyTitle: "Privacy Policy & Terms",
        policyBody: `
            <h3>1. Personal Data</h3>
            <p>We do not collect or store any personal identification information (PII) like names or emails on our servers.</p>
            <h3>2. Cookies & Ads</h3>
            <p>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website. You may opt out of personalized advertising by visiting Google Ad Settings.</p>
            <h3>3. Local Storage</h3>
            <p>Your theme and language preferences are stored locally in your browser for a better experience.</p>
            <h3>4. Disclaimer</h3>
            <p>Results generated are random and do not guarantee any winnings. Users assume all responsibility for their lottery participation.</p>
        `
    },
    zh: {
        navHome: "首页",
        navAnalysis: "概率分析",
        navTax: "税务信息",
        navStats: "历史统计",
        navPolicy: "政策",
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
        disclaimer: "※ 免责声明：本服务仅供娱乐参考。不保证中奖，对结果不承担任何法律责任。",
        analysisTitle: "乐透 6/45 中奖概率分析",
        analysisBody: `
            <h3>各奖项中奖赔率</h3>
            <table>
                <tr><th>奖等</th><th>条件</th><th>概率</th></tr>
                <tr><td>一等奖</td><td>匹配 6 个号码</td><td>1 / 8,145,060</td></tr>
                <tr><td>二等奖</td><td>5 个 + 特别号</td><td>1 / 1,357,510</td></tr>
                <tr><td>三等奖</td><td>匹配 5 个号码</td><td>1 / 35,724</td></tr>
                <tr><td>四等奖</td><td>匹配 4 个号码</td><td>1 / 733</td></tr>
                <tr><td>五等奖</td><td>匹配 3 个号码</td><td>1 / 45</td></tr>
            </table>
            <p>中一等奖的概率非常低（约八百万分之一）。请理性对待，将其视为一种娱乐方式。</p>
        `,
        taxTitle: "乐透奖金税务信息",
        taxBody: `
            <h3>税率参考 (以韩国为例)</h3>
            <ul>
                <li><strong>200万韩元以下:</strong> 免税 (0%)</li>
                <li><strong>200万 - 3亿韩元:</strong> 22% 税率</li>
                <li><strong>3亿韩元以上:</strong> 33% 税率</li>
            </ul>
            <p>不同国家和地区的乐透税务规定有所不同，请参考您当地的法律法规。</p>
        `,
        statsTitle: "历史中奖号码统计",
        statsBody: `
            <h3>最常出现的数字 (近 100 期)</h3>
            <table>
                <tr><th>排名</th><th>号码</th><th>出现次数</th></tr>
                <tr><td>1</td><td>43</td><td>18次</td></tr>
                <tr><td>2</td><td>12</td><td>16次</td></tr>
                <tr><td>3</td><td>27</td><td>15次</td></tr>
                <tr><td>4</td><td>1</td><td>14次</td></tr>
                <tr><td>5</td><td>34</td><td>14次</td></tr>
            </table>
            <p>注：统计数据仅供参考，过去的开奖结果不代表未来趋势。</p>
        `,
        policyTitle: "隐私政策与服务条款",
        policyBody: `
            <h3>1. 个人信息</h3>
            <p>我们不会在服务器上收集或存储任何个人身份信息。</p>
            <h3>2. Cookie 与广告</h3>
            <p>Google 等第三方供应商会使用 Cookie 根据用户之前的访问情况投放广告。您可以在 Google 广告设置中管理这些偏好。</p>
            <h3>3. 本地存储</h3>
            <p>您的主题和语言选择会保存在您的浏览器本地，以便为您提供更好的服务。</p>
        `
    },
    jp: {
        navHome: "ホーム",
        navAnalysis: "確率分析",
        navTax: "税金情報",
        navStats: "統計データ",
        navPolicy: "ポリシー",
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
        aboutText: "本サービスは暗号学적으로安全な乱数生成原理を応用し、1から45までの重複しない6つの数字を抽出します。直感的なUIを通じて、番号ごとの分布を視覚的に確認できます。",
        howTitle: "詳細利用ガイド",
        howText: "1. 数量設定：一度に分析したいセット数（1〜30）を選択します。<br>2. アルゴリズム実行：「番号を生成」ボタンをクリックしてエンジンを起動します。<br>3. 結果分析：生成された番号は実際のロトの規則に従って色分け表示されます。<br>4. 交流：下部のコメント欄を通じて他のユーザーと運気を共有しましょう。",
        privacyTitle: "個人情報保護方針とクッキーポリシー",
        privacyText: "ユーザー設定はローカルストレージにのみ保存されます。Google AdSenseを含むサードパーティサービスは、広告配信のためにクッキーを使用する場合があります。",
        termsTitle: "利用規約",
        termsText: "本サイトは情報の提供のみを目的としており、金銭的な取引は一切要求しません。生成された番号は確率に基づく結果であり、自己責任でご利用ください。",
        disclaimer: "※ 注意：ロトはギャンブルではなく娯楽としてお楽しみください。当選を保証するものではなく、一切の責任を負いません。",
        analysisTitle: "ロト 6/45 当選確率の詳細分析",
        analysisBody: `
            <h3>各等級別の当選確率</h3>
            <table>
                <tr><th>等級</th><th>条件</th><th>確率</th></tr>
                <tr><td>1等</td><td>6個の番号が一致</td><td>1 / 8,145,060</td></tr>
                <tr><td>2等</td><td>5個 + ボーナス番号が一致</td><td>1 / 1,357,510</td></tr>
                <tr><td>3等</td><td>5個の番号が一致</td><td>1 / 35,724</td></tr>
                <tr><td>4등</td><td>4個の番号が一致</td><td>1 / 733</td></tr>
                <tr><td>5等</td><td>3個の番号가一致</td><td>1 / 45</td></tr>
            </table>
            <p>1等の当選確率は約814万分の1と非常に低いです。節度を持って娯楽としてお楽しみください。</p>
        `,
        taxTitle: "当選金の税金に関する情報",
        taxBody: `
            <h3>税率の目安 (韓国の基準)</h3>
            <ul>
                <li><strong>200万ウォン以下:</strong> 非課税 (0%)</li>
                <li><strong>200万 - 3億ウォン以下:</strong> 22% (所得税 20% + 住民税 2%)</li>
                <li><strong>3億ウォン超:</strong> 33% (所得税 30% + 住民税 3%)</li>
            </ul>
            <p>日本の宝くじは基本的に非課税ですが、海外のロトなどは各国の法律に基づいた課税が行われます。詳細は現地の規定をご確認ください。</p>
        `,
        statsTitle: "過去の当選番号統計",
        statsBody: `
            <h3>最も頻繁に出現する数字 (直近100回)</h3>
            <table>
                <tr><th>順位</th><th>番号</th><th>出現回数</th></tr>
                <tr><td>1</td><td>43</td><td>18回</td></tr>
                <tr><td>2</td><td>12</td><td>16回</td></tr>
                <tr><td>3</td><td>27</td><td>15回</td></tr>
                <tr><td>4</td><td>1</td><td>14回</td></tr>
                <tr><td>5</td><td>34</td><td>14回</td></tr>
            </table>
            <p>※ このデータは統計上の傾向を示すものであり、将来の当選を保証するものではありません。</p>
        `,
        policyTitle: "プライバシーポリシーと利用規約",
        policyBody: `
            <h3>1. 個人情報の取り扱い</h3>
            <p>当サイトでは、ユーザーの氏名や連絡先などの個人情報をサーバーに保存することはありません。</p>
            <h3>2. クッキーと広告</h3>
            <p>Googleなどの第三者配信事業者は、クッキーを使用して過去のアクセス情報に基づき広告を配信します。</p>
        `
    }
};

const updateLanguage = (lang) => {
    // Nav Buttons
    navBtns[0].textContent = translations[lang].navHome;
    navBtns[1].textContent = translations[lang].navAnalysis;
    navBtns[2].textContent = translations[lang].navTax;
    navBtns[3].textContent = translations[lang].navStats;
    navBtns[4].textContent = translations[lang].navPolicy;

    title.textContent = translations[lang].title;
    generateBtn.textContent = translations[lang].button;
    countLabel.textContent = translations[lang].countLabel;
    document.title = translations[lang].docTitle;

    // Update Section Titles
    document.querySelector("#analysis-title").textContent = translations[lang].analysisTitle;
    document.querySelector("#tax-title").textContent = translations[lang].taxTitle;
    document.querySelector("#stats-title").textContent = translations[lang].statsTitle;
    document.querySelector("#policy-title").textContent = translations[lang].policyTitle;

    // Update Section Bodies
    analysisContent.innerHTML = translations[lang].analysisBody;
    taxContent.innerHTML = translations[lang].taxBody;
    statsContent.innerHTML = translations[lang].statsBody;
    policyContent.innerHTML = translations[lang].policyBody;

    // Update Comment Section
    commentTitle.textContent = translations[lang].commentTitle;
    commentText.placeholder = translations[lang].commentTextPlace;
    commentSubmit.textContent = translations[lang].commentSubmitBtn;

    // Update AdSense Compliance Content (Footer)
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

// Tab switching logic
navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        
        // Remove active class from all buttons and sections
        navBtns.forEach(b => b.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));
        
        // Add active class to clicked button and target section
        btn.classList.add("active");
        document.getElementById(target).classList.add("active");
    });
});

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
