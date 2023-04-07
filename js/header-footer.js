let count = 0;

function a(a, b) {
  var c = /^(?:file):/,
    d = new XMLHttpRequest(),
    e = 0;
  d.onreadystatechange = function () {
    4 == d.readyState && (e = d.status),
      c.test(location.href) && d.responseText && (e = 200),
      4 == d.readyState && 200 == e && (a.outerHTML = d.responseText);

    if (d.readyState === XMLHttpRequest.DONE && d.status === 200) {
      // Request finished. Do processing here.
      --count;
      if (count === 0) headerScript();
    }
  };
  try {
    d.open("GET", b, !0), d.send();
  } catch (f) {}
}

var b,
  c = document.getElementsByTagName("*");
for (b in c)
  if ( c[b].hasAttribute &&    c[b].hasAttribute("data-include")) {
    ++count;
    a(c[b], c[b].getAttribute("data-include"));
  }
    

function headerScript() {
  const searchBox = document.querySelector(".search-box input");
  const homepage = document.querySelector("#homepage");

  searchBox.addEventListener("focus", expand);
  searchBox.addEventListener("blur", shrink);
  searchBox.addEventListener("input", handleInput);

  function expand() {
    searchBox.classList.add("active");
  }

  function shrink() {
    if (searchBox.value === "") {
      searchBox.classList.remove("active");
    }
  }

  function handleInput() {
    if (searchBox.value !== "") {
      searchBox.classList.add("active");
    } else {
      searchBox.classList.remove("active");
    }
  }

  // function show menu of user when clicking user icon
  const userIcon = document.querySelector(".user-icon");
  const userMenu = document.querySelector(".user-menu");

  userIcon.addEventListener("click", function () {
    userMenu.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
      const menuItems = document.querySelector(".menu-items");
      const userIcon = document.querySelector(".user-icon");

      // Kiểm tra xem người dùng click vào vùng bên ngoài menu hay không
      if (!menuItems.contains(event.target) && !userIcon.contains(event.target)) {
          menuItems.classList.remove("active");
      }
  });
}

