let todo = document.getElementById("todo");
let box_item = document.getElementById("box_item");
let addbtn = document.getElementById("addbtn");

let addtodo = (item) => {
  let listitem = document.createElement("li");
  listitem.innerHTML = `
        ${item}
        <i class="fa-solid fa-xmark"></i>
    `;

  listitem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listitem.querySelector("i").addEventListener("click", function () {
    listitem.remove();
  });

  box_item.appendChild(listitem);
};

todo.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addtodo(this.value);
    this.value = "";
  }
});

addbtn.addEventListener("click", function () {
  if (todo.value == "") {
    alert("Please enter a Todo");
  } else {
    addtodo(todo.value);
    todo.value = "";
  }
});

let clearall = () => {
  box_item.innerHTML = "";
};
