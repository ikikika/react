export const errorMessage = (dataObject) => {
  let str = "";
  for (const objects in dataObject) {
    if (typeof dataObject[objects][0] == "string") {
      str +=
        "<div class='alert alert-danger add-padding'>" +
        dataObject[objects] +
        "</div>";
    } else {
      str +=
        "<div class='alert alert-danger add-padding'>" +
        (dataObject[objects] + "</div>");
    }
  }
};

export const displayErrorMessages = (errorResponse, displayError) => {
  if (typeof errorResponse == "string") {
    displayError.innerHTML =
      "<div class='alert alert-danger add-padding'>" + errorResponse + "</div>";
  } else if (typeof errorResponse == "undefined") {
    displayError.innerHTML =
      "<div class='alert alert-danger add-padding'>action failed error</div>";
  } else {
    const lengthErrorObject = Object.keys(errorResponse).length;
    if (lengthErrorObject > 0) {
      const err = errorMessage(errorResponse);
      displayError.innerHTML = err;
    }
  }
};
