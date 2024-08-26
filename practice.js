let letterContainer = document.querySelector("#alphabet");
let input = document.querySelector("#input");
let totalWrong = document.querySelector("#totalWrong");
let totalRight = document.querySelector("#totalRight");
let right = 0;
let wrong = 0;

const generatingRandomAlphabet = () => {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const randomIndex = Math.floor(Math.random() * 26);
    return letters[randomIndex];
}

const protocols = (userInput) => {
    userInput = userInput.trim();
    
    if (userInput === "") {
        wrong++;
        totalWrong.textContent = wrong;
        console.log(false);
        console.log(letterContainer.textContent);
    } else if (userInput === letterContainer.textContent) {
        right++;
        totalRight.textContent = right;
        console.log(true);
        console.log(letterContainer.textContent);
    } else {
        wrong++;
        totalWrong.textContent = wrong;
        console.log(false);
        console.log(letterContainer.textContent);
    }
    input.value = "";
}

document.addEventListener("keydown", (e) => {
    if (e.keyCode === 32) {
        e.preventDefault(); // Prevent the default behavior of Spacebar (scrolling the page)
        let userInput = input.value;
        console.log(userInput); 
        protocols(userInput);
        letterContainer.textContent = generatingRandomAlphabet();
    }
});
