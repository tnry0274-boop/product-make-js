const lottoNumbersContainer = document.querySelector(".lotto-numbers");
const generateBtn = document.querySelector("#generate-btn");
const themeToggle = document.querySelector("#theme-toggle");

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
