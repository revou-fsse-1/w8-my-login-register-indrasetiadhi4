function validateName(input) {
  const reg = /^[a-z ,.'-]+$/i;

  if (!reg.test(input)) {
    return "Invalid Name";
  } else {
    return true;
  }
}

function validateEmail(input) {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!reg.test(input)) {
    return "Invalid Email";
  } else {
    return true;
  }
}

function validateAge(input) {
  if (isNaN(input)) {
    return "Age must be a number";
  } else if (input < 0) {
    return "Age can't be negative";
  } else {
    return true;
  }
}

export { validateName, validateEmail, validateAge };
