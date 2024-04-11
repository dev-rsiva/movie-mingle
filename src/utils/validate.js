const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";

  if (!isPasswordValid) return "Password is not valid";

  return null;
};

const isFullNameValid = (fullname) => {
  return fullname?.length < 4 ? "Full Name is not valid" : null;
};

export const userValidation = (email, password, fullname) => {
  const formDataMessage =
    checkValidData(email.current.value, password.current.value) === null
      ? ""
      : checkValidData(email.current.value, password.current.value);

  const fullnameMessage =
    isFullNameValid(fullname?.current?.value) === null
      ? ""
      : isFullNameValid(fullname?.current?.value);

  const bothMessageNotNull = formDataMessage !== "" && fullnameMessage !== "";

  console.log(bothMessageNotNull);

  const message = bothMessageNotNull
    ? formDataMessage + " & " + fullnameMessage
    : formDataMessage + fullnameMessage;

  return message;
};
