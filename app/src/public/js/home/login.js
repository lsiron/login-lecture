"use strict";

const id = document.querySelector("#id"),
      psword = document.querySelector("#psword"),
      loginBtn = document.querySelector("Button");

    loginBtn.addEventListener("click", login);

    function login() {
       const req = {
        id: id.value,
        psword: psword.value,
       };
    }
     