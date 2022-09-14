let tabs = document.querySelector(".tabs");
let btns = document.querySelectorAll(".btn");
let articles = document.querySelectorAll(".content");

tabs.addEventListener("click", (e) => {
  // let;
  let id = e.target.dataset.id;

  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    let element = document.getElementById(id);
    element.classList.add("active");
  }
});
