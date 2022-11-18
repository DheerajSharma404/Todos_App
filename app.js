const addform = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
   const html = `
      <li class="list-group-item d-flex text-wrap justify-content-between align-item-center">
         <span>${todo}</span>
         <i class="bi bi-trash delete"></i>
      </li>
   `;
   list.innerHTML += html;
};
// * Creating todo
addform.addEventListener("submit", (e) => {
   e.preventDefault();
   const todo = addform.add.value.trim();
   if (todo.length) {
      generateTemplate(todo);
      addform.reset();
   }
});
// * Delete todos
list.addEventListener("click", (e) => {
   if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove();
   }
});

const filtertodo = (keyword) => {
   Array.from(list.children)
      .filter((todo) => !todo.textContent.toLowerCase().includes(keyword))
      .forEach((todo) => todo.classList.add("filtered"));

   Array.from(list.children)
      .filter((todo) => todo.textContent.toLowerCase().includes(keyword))
      .forEach((todo) => todo.classList.remove("filtered"));
};

// * Search keyup event
search.addEventListener("keyup", (e) => {
   const keyword = search.value.trim().toLowerCase();
   filtertodo(keyword);
});
