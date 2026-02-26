const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Function to generate a random password
const getLetterLowercase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUppercase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();   
};

const getSymbol = () => {
    const symbols = "!@#$%^&*()_+{}[]:;<>,.?/~`|";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatedPassword = (getLetterLowercase, getLetterUppercase, getNumber, getSymbol) => {
    let password = "";

    const passwordLength = 10;

    const generators = [getLetterLowercase, getLetterUppercase, getNumber, getSymbol];   

    for (let i = 0; i < passwordLength; i = i + 4) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)];
            password += randomValue();
        });
    };

    password = password.slice(0, passwordLength);

    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;

};



// Event listener for the generate password button
generatePasswordButton.addEventListener("click", () => {
    generatedPassword(getLetterLowercase, getLetterUppercase, getNumber, getSymbol);
});