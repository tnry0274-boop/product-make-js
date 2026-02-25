const lottoNumbersContainer = document.querySelector(".lotto-numbers");
const generateBtn = document.querySelector("#generate-btn");

const generateLottoNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers);
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
