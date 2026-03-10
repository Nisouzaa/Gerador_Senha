const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Novas funcionalidadaes

const openClosegeneratorButton = document.querySelector(
  "#open-generate-password",
);
const geneatePasswordContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#copy-password");

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

const generatedPassword = (
  getLetterLowercase,
  getLetterUppercase,
  getNumber,
  getSymbol,
) => {
  let password = "";

  const passwordLength = +lengthInput.value;

  const generators = [];

  if (lettersInput.checked) {
    generators.push(getLetterLowercase, getLetterUppercase);
  }

  if (numbersInput.checked) {
    generators.push(getNumber);
  }

  if (symbolsInput.checked) {
    generators.push(getSymbol);
  }

  if (generators.length === 0) {
    return;
  }

  for (let i = 0; i < passwordLength; i = i + generators.length) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)];
      password += randomValue();
    });
  }

  password = password.slice(0, passwordLength);

  generatedPasswordElement.style.display = "block";
  generatedPasswordElement.querySelector("h4").innerText = password;
};

// Event listener for the generate password button
generatePasswordButton.addEventListener("click", (e) => {
  e.preventDefault();
  generatedPassword(
    getLetterLowercase,
    getLetterUppercase,
    getNumber,
    getSymbol,
  );
});

openClosegeneratorButton.addEventListener("click", () => {
  geneatePasswordContainer.classList.toggle("hide");
});
