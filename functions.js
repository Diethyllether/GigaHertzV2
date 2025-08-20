// Tema

function changeColor() {
  const root = document.documentElement;
  const logo = document.getElementById("logo");
  const logo2 = document.getElementById("footerLogo");
  const btn = document.getElementById("ball");
  switch (localStorage.getItem("theme")) {
    case "dark":
      // Light Mode
      root.style.setProperty("--main-bg-color", "#E5E5E5");
      root.style.setProperty("--secondary-color", "#3185FC");
      root.style.setProperty("--text-color", "black");
      root.style.setProperty("--btn-bg", "white");
      logo.src = "assets//logo-alt.png";
      logo2.src = "assets//logo-alt.png";
      btn.style.marginLeft = "0px";
      localStorage.setItem("theme", "light");
      break;

    case "light":
      // Dark Mode
      root.style.setProperty("--main-bg-color", "#1E1E1E");
      root.style.setProperty("--secondary-color", "#FF3D10");
      root.style.setProperty("--text-color", "white");
      root.style.setProperty("--btn-bg", "green");
      logo.src = "assets//logo.png";
      logo2.src = "assets//logo.png";
      btn.style.marginLeft = "15px";
      localStorage.setItem("theme", "dark");
      break;
    default:
      localStorage.setItem("theme", "dark");
      break;
  }
}

// Menu
let x = 0;
function showMenu() {
  const dropdownMenu = document.getElementById("dropdown");
  switch (x) {
    case 0:
      dropdownMenu.style.top = "-500px";
      x = 1;
      break;
    case 1:
      dropdownMenu.style.top = "80px";
      x = 0;
      break;
  }
}

// Pro carrinho

function mudarPreco(opcao) {
  const inputPreco = document.getElementById("number");
  let y = parseInt(inputPreco.value);
  switch (opcao) {
    case "sobe":
      y++;
      inputPreco.value = y;
      break;

    case "desce":
      if (y > 0) {
        y--;
        inputPreco.value = y;
      }
      break;

    default:
      break;
  }
}