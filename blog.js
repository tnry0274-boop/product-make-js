const themeToggle = document.querySelector("#theme-toggle");
const languageSelect = document.querySelector("#language-select");
const generateBtn = document.querySelector("#generate-blog-btn");
const topicInput = document.querySelector("#topic-input");
const toneSelect = document.querySelector("#tone-select");
const lengthSelect = document.querySelector("#length-select");
const loadingIndicator = document.querySelector("#loading-indicator");
const resultArea = document.querySelector("#result-area");
const generatedTitle = document.querySelector("#generated-title");
const generatedContent = document.querySelector("#generated-content");
const copyBtn = document.querySelector("#copy-btn");
const saveBtn = document.querySelector("#save-btn");
const savedList = document.querySelector("#saved-list");

// Translations (Mainly for UI elements)
const translations = {
    ko: {
        title: "네이버 스타일 AI 블로그 작가",
        guideTitle: "사용 방법",
        guideText: "주제를 입력하고 말투를 선택하면 AI가 네이버 블로그 감성으로 글을 작성해줍니다.",
        placeholder: "주제를 입력하세요 (예: 강남 맛집, 제주도 여행, 주식 전망)...",
        btn: "✍️ 블로그 포스팅 생성하기",
        loading: "블로그 이웃님들을 위한 글을 작성 중입니다...",
        savedTitle: "저장된 포스팅 목록",
        copy: "본문 복사",
        save: "목록에 저장",
        tone: {
            informative: "정보공유형 (정중함)",
            emotional: "일상기록형 (친근함)",
            funny: "유머폭발형 (재미)",
            critical: "솔직후기형 (비판적)"
        },
        length: {
            short: "요약 (짧게)",
            medium: "표준 (중간)",
            long: "상세 (길게)"
        },
        footer: "본 콘텐츠는 AI가 생성한 참고용 예시입니다."
    },
    en: {
        title: "Naver Style AI Blog Writer",
        guideTitle: "How to Use",
        guideText: "Enter a topic and tone to generate a blog post in Korean style.",
        placeholder: "Enter topic (e.g., Best Restaurants, Travel, Finance)...",
        btn: "✍️ Generate Blog Post",
        loading: "Writing for your blog followers...",
        savedTitle: "Saved Posts",
        copy: "Copy Text",
        save: "Save to List",
        tone: {
            informative: "Informative",
            emotional: "Emotional",
            funny: "Humorous",
            critical: "Critical"
        },
        length: {
            short: "Short",
            medium: "Medium",
            long: "Long"
        },
        footer: "Generated content is for reference only."
    }
};

const updateLanguage = (lang) => {
    const t = translations[lang] || translations.ko;
    document.querySelector("#blog-title").textContent = t.title;
    document.querySelector("#blog-guide-title").textContent = t.guideTitle;
    document.querySelector("#blog-guide-text").textContent = t.guideText;
    topicInput.placeholder = t.placeholder;
    generateBtn.textContent = t.btn;
    loadingIndicator.querySelector("p").textContent = t.loading;
    document.querySelector("#saved-title").textContent = t.savedTitle;
    copyBtn.textContent = t.copy;
    saveBtn.textContent = t.save;
    document.querySelector("#footer-note").textContent = t.footer;

    // Update select options labels
    const toneOptions = toneSelect.options;
    toneOptions[0].text = t.tone.informative;
    toneOptions[1].text = t.tone.emotional;
    toneOptions[2].text = t.tone.funny;
    toneOptions[3].text = t.tone.critical;

    const lengthOptions = lengthSelect.options;
    lengthOptions[0].text = t.length.short;
    lengthOptions[1].text = t.length.medium;
    lengthOptions[2].text = t.length.long;
    
    localStorage.setItem("lang", lang);
    languageSelect.value = lang;
};

// Initial Language (Default to Korean)
const savedLang = localStorage.getItem("lang") || "ko";
updateLanguage(savedLang);

languageSelect.addEventListener("change", (e) => updateLanguage(e.target.value));

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

// Naver Blog Style Mock Generator Logic
const templates = {
    informative: [
        "[정보공유] [TOPIC] 완벽 정리! 이것만 알면 끝 ✨",
        "[TOPIC] 에 대해 궁금하셨나요? 상세 정보 총정리 📚",
        "실패 없는 [TOPIC] 가이드! 꿀팁 방출합니다 👍"
    ],
    emotional: [
        "오늘 하루, [TOPIC] 와 함께한 힐링 일상 🌿",
        "드디어 가본 [TOPIC], 생각보다 더 좋았어요.. ❤️",
        "기분 전환하고 싶을 때 찾게 되는 [TOPIC] 이야기 ☕"
    ],
    funny: [
        "역대급 [TOPIC] 실화냐? ㅋㅋㅋ 진짜 웃겨요 😂",
        "[TOPIC] 하려다 멘붕 온 사연 (주의: 배꼽 빠짐) 🤣",
        "세상 사람들 [TOPIC] 좀 보세요.. 저만 볼 수 없죠! 💥"
    ],
    critical: [
        "[솔직후기] [TOPIC] 내돈내산 가감 없이 알려드림 🧐",
        "[TOPIC] 광고 아님! 찐 방문 후기 (비추 요소 포함) 🚫",
        "기대가 컸던 [TOPIC], 과연 소문만큼 괜찮을까? 🤔"
    ]
};

const contentTemplates = [
    "안녕하세요! 오늘은 많은 분들이 궁금해하시는 <strong>[TOPIC]</strong>에 대해 포스팅해보려고 해요. 😊 <br><br>요즘 SNS에서도 핫하고 지인들도 자주 물어보는 주제라 저도 꼼꼼히 알아봤는데요! <br><br>첫 번째로 주목해야 할 점은 역시 디자인과 실용성이에요. [TOPIC] 관련 정보를 찾아보니 생각보다 더 깊은 내용이 많더라구요. <br><br>혹시 <strong>[TOPIC]</strong>를 처음 접하시는 분들이라면 제가 아래 정리해둔 꿀팁들을 꼭 확인해보세요! <br><br>도움이 되셨다면 공감과 댓글 부탁드립니다! 이웃 추가도 환영해요~ 👋",
    "여러분~ 드디어 제가 <strong>[TOPIC]</strong>를 직접 경험해보고 왔습니다! (내돈내산 찐후기) ✨ <br><br>처음에는 '에이~ 설마~' 했는데, 직접 확인해보니 왜 다들 <strong>[TOPIC]</strong> <strong>[TOPIC]</strong> 하는지 알겠더라구요. ㅎㅎ <br><br>📍 장점: 깔끔하고 직관적임 <br>📍 단점: 시간 가는 줄 모름 (주의 필요!) <br><br>주변에서도 다들 어디서 정보 얻었냐고 물어보는데, 진짜 추천드리고 싶어요. <br><br>오늘의 소소한 행복, [TOPIC]와 함께해서 더 즐거웠던 것 같습니다. 궁금한 점은 댓글 달아주세요! 👇",
    "혹시 <strong>[TOPIC]</strong> 때문에 고민 중이신가요? 저도 처음엔 그랬답니다. 😅 <br><br>정보가 너무 많아서 어디서부터 봐야 할지 막막했는데, 제가 딱 핵심만 추려봤어요. <br><br>1️⃣ [TOPIC]의 특징 분석 <br>2️⃣ 실사용 시 주의사항 <br>3️⃣ 가격 대비 성능비 <br><br>결론부터 말씀드리면 [TOPIC]는 충분히 가치 있는 선택인 것 같아요. 하지만 개인차가 있을 수 있으니 제 후기는 참고만 해주세요! <br><br>긴 글 읽어주셔서 감사합니다. 모두 좋은 하루 보내세요! 🌈"
];

generateBtn.addEventListener("click", () => {
    const topic = topicInput.value.trim();
    if (!topic) {
        alert("주제를 입력해주세요!");
        return;
    }

    loadingIndicator.classList.remove("hidden");
    resultArea.classList.add("hidden");
    generateBtn.disabled = true;

    setTimeout(() => {
        const tone = toneSelect.value;
        const length = lengthSelect.value;
        
        const titleOptions = templates[tone] || templates.informative;
        const randomTitle = titleOptions[Math.floor(Math.random() * titleOptions.length)].replace("[TOPIC]", topic);

        let randomContent = contentTemplates[Math.floor(Math.random() * contentTemplates.length)].replace(/\[TOPIC\]/g, topic);
        
        if (length === "short") {
            randomContent = randomContent.split("<br>")[0] + "... (중략)";
        } else if (length === "long") {
            randomContent += "<br><br>추가로 덧붙이자면, " + topic + "에 관한 더 자세한 자료들은 계속 업데이트될 예정이에요. 많은 관심 부탁드려요! 감사합니다.";
        }

        generatedTitle.textContent = randomTitle;
        generatedContent.innerHTML = randomContent;

        loadingIndicator.classList.add("hidden");
        resultArea.classList.remove("hidden");
        generateBtn.disabled = false;
    }, 1200);
});

copyBtn.addEventListener("click", () => {
    const text = `${generatedTitle.textContent}\n\n${generatedContent.innerText}`;
    navigator.clipboard.writeText(text).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = "복사 완료! ✅";
        setTimeout(() => copyBtn.textContent = originalText, 2000);
    });
});

const renderSavedPosts = () => {
    savedList.innerHTML = "";
    const posts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    posts.forEach((post, index) => {
        const div = document.createElement("div");
        div.className = "saved-post-item";
        div.innerHTML = `
            <div class="saved-post-info">
                <h3>${post.title}</h3>
                <p>${post.date}</p>
            </div>
            <button onclick="deletePost(${index})">삭제</button>
        `;
        div.addEventListener("click", (e) => {
            if(e.target.tagName !== 'BUTTON') {
                generatedTitle.textContent = post.title;
                generatedContent.innerHTML = post.content;
                resultArea.classList.remove("hidden");
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        savedList.appendChild(div);
    });
};

saveBtn.addEventListener("click", () => {
    const newPost = {
        title: generatedTitle.textContent,
        content: generatedContent.innerHTML,
        date: new Date().toLocaleDateString()
    };
    
    const posts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    posts.unshift(newPost);
    localStorage.setItem("blogPosts", JSON.stringify(posts));
    renderSavedPosts();
    alert("포스팅이 저장되었습니다.");
});

window.deletePost = (index) => {
    if(!confirm("포스팅을 삭제하시겠습니까?")) return;
    const posts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    posts.splice(index, 1);
    localStorage.setItem("blogPosts", JSON.stringify(posts));
    renderSavedPosts();
};

renderSavedPosts();
