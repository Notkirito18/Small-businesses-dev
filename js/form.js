$(document).ready(function () {
  //* Contact Form
  const contactForm = document.getElementById("contact-form");
  const contactFormSubmit = document.getElementById("contact-submit-btn");
  //clear form at page start
  contactForm.reset();
  contactFormSubmit.addEventListener("click", () => {
    // variables
    var contactNameValue = document.getElementById(
      "contact-form-name-input"
    ).value;
    var contactEmailValue = document.getElementById(
      "contact-form-email-input"
    ).value;
    var contactMessageValue = document.getElementById(
      "contact-form-message-input"
    ).value;
    // errors
    const contactNameError = document.getElementById("contact-name-error");
    const contactEmailError = document.getElementById("contact-email-error");
    const contactMessageError = document.getElementById(
      "contact-message-error"
    );

    var contactFormIsValid = true;

    // Reset previous error messages
    resetErrorMessagesContactForm();

    // Name validation
    if (contactNameValue.length < 2) {
      contactNameError.innerHTML = "Name must be at least 2 characters";
      contactNameError.style.display = "block";
      console.log("Name must be at least 2 characters");
      contactFormIsValid = false;
    }

    // Email validation using regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactEmailValue.match(emailPattern)) {
      contactEmailError.innerHTML = "Invalid email format";
      contactEmailError.style.display = "block";
      console.log("Invalid email format");
      contactFormIsValid = false;
    }

    // Message validation
    if (contactMessageValue.length < 10) {
      contactMessageError.innerHTML = "Message must be at least 10 characters";
      contactMessageError.style.display = "block";
      console.log("Message must be at least 10 characters");
      contactFormIsValid = false;
    }

    // Prevent form submission if validation fails
    if (contactFormIsValid) {
      contactForm.submit();
      location.reload();
    }
  });
  //* POP UP FORM
  const popupForm = document.getElementById("popup-form");
  const popupFormSubmit = document.getElementById("popup-submit-btn");

  //* popup form open and close
  closeForm = () => {
    $(".form-popup-bg").removeClass("is-visible");
  };
  /* popup Form Interactions */
  $("#btnOpenForm").on("click", function (event) {
    event.preventDefault();
    $(".form-popup-bg").addClass("is-visible");
  });

  //close popup when clicking x or off popup
  $(".form-popup-bg").on("click", function (event) {
    if (
      $(event.target).is(".form-popup-bg") ||
      $(event.target).is("#btnCloseForm")
    ) {
      event.preventDefault();
      $(this).removeClass("is-visible");
      //clear form when closing popup
      popupForm.reset();
      resetErrorMessagesPopupForm();
    }
  });

  //* popup form validation and functionality

  //clear form at page start
  popupForm.reset();
  popupFormSubmit.addEventListener("click", () => {
    // variables (values to check)
    var popupNameValue = document.getElementById("popup-form-name-input").value;
    var popupEmailValue = document.getElementById(
      "popup-form-email-input"
    ).value;
    var popupPhoneValue = document.getElementById(
      "popup-form-phone-input"
    ).value;

    var companyNameValue = document.getElementById("company-name-input").value;

    var businessTypeValue = document.getElementById(
      "business-type-input"
    ).value;

    // errors
    const popupNameError = document.getElementById("popup-name-error");
    const popupEmailError = document.getElementById("popup-email-error");
    const popupPhoneError = document.getElementById("popup-phone-error");
    const companyNameError = document.getElementById("company-name-error");
    const businessTypeError = document.getElementById("business-type-error");
    const submitError = document.getElementById("popup-submit-error");

    var popupFormIsValid = true;

    // Reset previous error messages
    resetErrorMessagesPopupForm();

    // Name validation
    if (popupNameValue.length < 2) {
      popupNameError.innerHTML = "Name must be at least 2 characters";
      popupNameError.style.display = "block";
      console.log("Name must be at least 2 characters");
      popupFormIsValid = false;
    }

    // Email validation using regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!popupEmailValue.match(emailPattern)) {
      popupEmailError.innerHTML = "Invalid email format";
      popupEmailError.style.display = "block";
      console.log("Invalid email format");
      popupFormIsValid = false;
    }

    // Phone validation using regular expression
    var phonePattern = /^\+?[0-9]+$/;
    if (
      popupPhoneValue.length > 0 &&
      (popupPhoneValue.length < 5 || !popupPhoneValue.match(phonePattern))
    ) {
      popupPhoneError.innerHTML = "Enter a valid phone number or leave empty";
      popupPhoneError.style.display = "block";
      console.log("Invalid phone number format");
      popupFormIsValid = false;
    }

    // Company name validation
    if (companyNameValue.length < 2) {
      companyNameError.innerHTML = "Enter a valid company name please";
      companyNameError.style.display = "block";
      console.log("Invalid company name");
      popupFormIsValid = false;
    }

    // Business type validation
    if (businessTypeValue.length < 2) {
      businessTypeError.innerHTML = "Enter a valid business type please";
      businessTypeError.style.display = "block";
      console.log("Invalid business type");
      popupFormIsValid = false;
    }

    if (popupFormIsValid) {
      popupForm.submit();
      console.log("submit");
    } else {
      submitError.innerHTML = "Please fix errored fields";
      submitError.style.display = "block";
    }
  });
  resetErrorMessagesPopupForm = () => {
    const messages = document.getElementsByClassName(
      "popup-form-error-message"
    );
    if (messages && messages.length > 0) {
      Array.from(messages).forEach((element) => {
        element.style.display = "none";
      });
    }
  };

  resetErrorMessagesContactForm = () => {
    const messages = document.getElementsByClassName(
      "contact-form-error-message"
    );
    if (messages && messages.length > 0) {
      Array.from(messages).forEach((element) => {
        element.style.display = "none";
      });
    }
  };
});
