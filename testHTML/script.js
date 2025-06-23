function toggleDropdown() {
  const dropdown = document.getElementById("langDropdown");
  if (dropdown) {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }
}

window.addEventListener("click", function (e) {
  const btn = document.querySelector("button[onclick]");
  const dropdown = document.getElementById("langDropdown");
  if (btn && dropdown && !btn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const langLink = document.getElementById("langLink");
  if (langLink) {
    const currentPage = window.location.pathname.split("/").pop();
    let target = "";

    // احذف أي أجزاء زائدة مثل -final-fixed
    const baseName = currentPage.replace("-final-fixed", "").replace("-fixed", "");

    if (baseName.endsWith("-en.html")) {
      target = baseName.replace("-en.html", ".html");
      langLink.innerHTML = '<img src="https://flagcdn.com/w40/sa.png" style="width:22px;height:16px;border-radius:3px;" /> العربية';
    } else {
      target = baseName.replace(".html", "-en.html");
      langLink.innerHTML = '<img src="https://flagcdn.com/w40/us.png" style="width:22px;height:16px;border-radius:3px;" /> English';
    }

    langLink.href = target;
  }
});

