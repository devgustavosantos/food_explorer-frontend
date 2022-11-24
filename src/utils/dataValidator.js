function validateEmail(email) {
  const requiredAttributes = /\S+@\S+\.\S+/;

  return requiredAttributes.test(email);
}

function validatePasswordLength(password) {
  const itHasTheMinimumSize = password.length >= 6;

  return itHasTheMinimumSize;
}

function validateDataToProfile({ name, email, newPassword, oldPassword }) {
  if (!name) {
    alert(
      "O campo com o nome não pode ficar vazio! Verifique e tente novamente."
    );

    return false;
  }

  if (!email) {
    alert(
      "O campo com o e-mail não pode ficar vazio! Verifique e tente novamente."
    );

    return false;
  }

  const isAValidEmail = validateEmail(email);

  if (!isAValidEmail) {
    alert("O e-mail informada é inválido! Verifique e tente novamente.");

    return false;
  }

  if (newPassword && !oldPassword) {
    alert(
      "Para atualizar a senha, é necessário informar a senha antiga! Verifique e tente novamente."
    );

    return false;
  }

  if (newPassword && oldPassword) {
    const isAValidPassword = validatePasswordLength(newPassword);

    if (!isAValidPassword) {
      alert(
        "A nova senha deve ter no mínimo 6 caracteres! Verifique e tente novamente."
      );

      return false;
    }
  }

  return true;
}

function validateDataToSignUp({ name, email, password }) {
  if (!name) {
    alert(
      "O campo com o nome não pode ficar vazio! Verifique e tente novamente."
    );

    return false;
  }

  if (!email) {
    alert(
      "O campo com o e-mail não pode ficar vazio! Verifique e tente novamente."
    );

    return false;
  }

  const isAValidEmail = validateEmail(email);

  if (!isAValidEmail) {
    alert("O e-mail informada é inválido! Verifique e tente novamente.");

    return false;
  }

  if (!password) {
    alert(
      "O campo com a senha não pode ficar vazio! Verifique e tente novamente."
    );

    return false;
  }

  const isAValidPassword = validatePasswordLength(password);

  if (!isAValidPassword) {
    alert(
      "A nova senha deve ter no mínimo 6 caracteres! Verifique e tente novamente."
    );

    return false;
  }

  return true;
}

function validateDataToSignIn({ email, password }) {
  if (!email) {
    alert(
      "O campo com o e-mail não pode ficar vazio! Verifique e tente novamente."
    );

    return false;
  }

  const isAValidEmail = validateEmail(email);

  if (!isAValidEmail) {
    alert("O e-mail informada é inválido! Verifique e tente novamente.");

    return false;
  }

  if (!password) {
    alert(
      "O campo com a senha não pode ficar vazio! Verifique e tente novamente."
    );

    return false;
  }

  const isAValidPassword = validatePasswordLength(password);

  if (!isAValidPassword) {
    alert(
      "A nova senha deve ter no mínimo 6 caracteres! Verifique e tente novamente."
    );

    return false;
  }

  return true;
}

export { validateDataToProfile, validateDataToSignIn, validateDataToSignUp };
