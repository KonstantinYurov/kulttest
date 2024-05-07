// Появление формы формы регистрации и формы входа START
 
document.addEventListener('DOMContentLoaded', function () {
    const loginContainer = document.querySelector('.login__container');
    const iconClose = document.querySelectorAll('.icon-close');
    const popupLogin = document.querySelector('.popup--login');

    if (popupLogin) {
        loginContainer.addEventListener('click', function () {
            popupLogin.classList.add('popup--login-active');
        });

        iconClose.forEach(function (iconClose) {
            iconClose.addEventListener('click', function () {
                popupLogin.classList.remove('popup--login-active');
            });
        });
    }
});

// Появление формы формы регистрации и формы входа END


// Переключение формы регистрации и формы входа в аккаунт между собой START

document.addEventListener("DOMContentLoaded", function () {
  const userRegistration = document.querySelector(".user-registration");

  if (userRegistration) {
    const userAuthorization = document.querySelector(
      ".user-registration--authorization"
    );
    const textLogIn = document.querySelector(".text-log-in");
    const textRegistration = document.querySelector(".text-registration");

    textLogIn.addEventListener("click", function () {
      userRegistration.classList.add("user-registration--hidden");
      userAuthorization.classList.add("user-registration--show");
    });

    textRegistration.addEventListener("click", function () {
      userRegistration.classList.remove("user-registration--hidden");
      userAuthorization.classList.remove("user-registration--show");
    });
  }
});

// Переключение формы регистрации и формы входа в аккаунт между собой END

