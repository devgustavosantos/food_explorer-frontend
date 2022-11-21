function validateEmail(email) {
  const requiredAttributes = /\S+@\S+\.\S+/;

  return requiredAttributes.test(email);
}

function validateData({ name, email, password, isNameRequired = false }) {
  if (!isNameRequired) {
    name = "name";
  }

  console.log({ name, email, password });

  const missingData = !name || !email || !password;

  if (missingData) {
    alert("Faltam dados! Verifique e tente novamente.");

    return false;
  }

  const isAValidEmail = validateEmail(email);

  if (!isAValidEmail) {
    alert("E-mail inválido! Verifique e tente novamente.");

    return false;
  }

  const thePasswordHasTheMinimumLength = password.length >= 6;

  if (!thePasswordHasTheMinimumLength) {
    alert(
      "A senha deve ter no mínimo 6 caracteres! Verifique e tente novamente."
    );

    return false;
  }

  return true;
}

export { validateData };
