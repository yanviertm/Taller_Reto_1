const letters = document.getElementById("letters");
const numbers = document.getElementById("numbers");

const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");

const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");

const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");

const cn = document.getElementById("cn");
const j0 = document.getElementById("j0");
const cl = document.getElementById("cl");

let state = 0;

const fnA1 = () => {
  if (state === 0) {
    if (letters.innerHTML == "") {
      letters.innerHTML = "A";
    } else {
      alert("Faltan letras");
    }
  }
  if (state === 1) {
    if (numbers.innerHTML == "") {
      numbers.innerHTML = "1";
    } else {
      if (
        letters.innerHTML == "ABCDEFGHIJ" &&
        numbers.innerHTML == "1234567890"
      ) {
        alert("Oops, vacia la cadena presionando C-N o C-L");
      } else {
        alert("Faltan Numeros");
      }
    }
  }
};
const fnB2 = () => {
  if (state === 0) {
    if (letters.innerHTML == "A") {
      letters.innerHTML += "B";
    } else {
      alert("Faltan letras");
    }
  }
  if (state === 1) {
    if (numbers.innerHTML == "1") {
      numbers.innerHTML += "2";
    } else {
      if (
        letters.innerHTML == "ABCDEFGHIJ" &&
        numbers.innerHTML == "1234567890"
      ) {
        alert("Oops, vacia la cadena presionando C-N o C-L");
      } else {
        alert("Faltan Numeros");
      }
    }
  }
};
const fnC3 = () => {
  if (state === 0) {
    if (letters.innerHTML == "AB") {
      letters.innerHTML += "C";
    } else {
      alert("Faltan letras");
    }
  }
  if (state === 1) {
    if (numbers.innerHTML == "12") {
      numbers.innerHTML += "3";
    } else {
      if (
        letters.innerHTML == "ABCDEFGHIJ" &&
        numbers.innerHTML == "1234567890"
      ) {
        alert("Oops, vacia la cadena presionando C-N o C-L");
      } else {
        alert("Faltan Numeros");
      }
    }
  }
};
const fnD4 = () => {
  if (state === 0) {
    if (letters.innerHTML == "ABC") {
      letters.innerHTML += "D";
    } else {
      alert("Faltan letras");
    }
  }
  if (state === 1) {
    if (numbers.innerHTML == "123") {
      numbers.innerHTML += "4";
    } else {
      if (
        letters.innerHTML == "ABCDEFGHIJ" &&
        numbers.innerHTML == "1234567890"
      ) {
        alert("Oops, vacia la cadena presionando C-N o C-L");
      } else {
        alert("Faltan Numeros");
      }
    }
  }
};
const fnE5 = () => {
  if (state === 0) {
    if (letters.innerHTML == "ABCD") {
      letters.innerHTML += "E";
    } else {
      alert("Faltan letras");
    }
  }
  if (state === 1) {
    if (numbers.innerHTML == "1234") {
      numbers.innerHTML += "5";
    } else {
      if (
        letters.innerHTML == "ABCDEFGHIJ" &&
        numbers.innerHTML == "1234567890"
      ) {
        alert("Oops, vacia la cadena presionando C-N o C-L");
      } else {
        alert("Faltan Numeros");
      }
    }
  }
};
const fnF6 = () => {
  if (state === 0) {
    if (letters.innerHTML == "ABCDE") {
      letters.innerHTML += "F";
    } else {
      alert("Faltan letras");
    }
  }
  if (state === 1) {
    if (numbers.innerHTML == "12345") {
      numbers.innerHTML += "6";
    } else {
      if (
        letters.innerHTML == "ABCDEFGHIJ" &&
        numbers.innerHTML == "1234567890"
      ) {
        alert("Oops, vacia la cadena presionando C-N o C-L");
      } else {
        alert("Faltan Numeros");
      }
    }
  }
};
const fnG7 = () => {
  if (state === 0) {
    if (letters.innerHTML == "ABCDEF") {
      letters.innerHTML += "G";
    } else {
      alert("Faltan letras");
    }
  }
  if (state === 1) {
    if (numbers.innerHTML == "123456") {
      numbers.innerHTML += "7";
    } else {
      if (
        letters.innerHTML == "ABCDEFGHIJ" &&
        numbers.innerHTML == "1234567890"
      ) {
        alert("Oops, vacia la cadena presionando C-N o C-L");
      } else {
        alert("Faltan Numeros");
      }
    }
  }
};
const fnH8 = () => {
  if (state === 0) {
    if (letters.innerHTML == "ABCDEFG") {
      letters.innerHTML += "H";
    } else {
      alert("Faltan letras");
    }
  }
  if (state === 1) {
    if (numbers.innerHTML == "1234567") {
      numbers.innerHTML += "8";
    } else {
      if (
        letters.innerHTML == "ABCDEFGHIJ" &&
        numbers.innerHTML == "1234567890"
      ) {
        alert("Oops, vacia la cadena presionando C-N o C-L");
      } else {
        alert("Faltan Numeros");
      }
    }
  }
};
const fnI9 = () => {
  if (state === 0) {
    if (letters.innerHTML == "ABCDEFGH") {
      letters.innerHTML += "I";
    } else {
      alert("Faltan letras");
    }
  }
  if (state === 1) {
    if (numbers.innerHTML == "12345678") {
      numbers.innerHTML += "9";
    } else {
      if (
        letters.innerHTML == "ABCDEFGHIJ" &&
        numbers.innerHTML == "1234567890"
      ) {
        alert("Oops, vacia la cadena presionando C-N o C-L");
      } else {
        alert("Faltan Numeros");
      }
    }
  }
};
const fnCn = () => {
  numbers.innerHTML = "";
  if (letters.innerHTML == "") {
    state = 0;
  }
  if (letters.innerHTML == "ABCDEFGHIJ") {
    state = 1;
  }
};
const fnJ0 = () => {
  if (state === 1) {
    if (numbers.innerHTML == "123456789") {
      numbers.innerHTML += "0";
    } else {
      if (
        letters.innerHTML == "ABCDEFGHIJ" &&
        numbers.innerHTML == "1234567890"
      ) {
        alert("Oops, vacia la cadena presionando C-N o C-L");
      } else {
        alert("Faltan Numeros");
      }
    }
  }
  if (state === 0) {
    if (letters.innerHTML == "ABCDEFGHI") {
      letters.innerHTML += "J";
      state = 1;
    } else {
      alert("Faltan letras");
    }
  }
};
const fnCl = () => {
  letters.innerHTML = "";
  state = 0;
};
a1.onclick = () => {
  fnA1();
};
b2.onclick = () => {
  fnB2();
};
c3.onclick = () => {
  fnC3();
};
d4.onclick = () => {
  fnD4();
};
e5.onclick = () => {
  fnE5();
};
f6.onclick = () => {
  fnF6();
};
g7.onclick = () => {
  fnG7();
};
h8.onclick = () => {
  fnH8();
};
i9.onclick = () => {
  fnI9();
};
cn.onclick = () => {
  fnCn();
};
j0.onclick = () => {
  fnJ0();
};
cl.onclick = () => {
  fnCl();
};