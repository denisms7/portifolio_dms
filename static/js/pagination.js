"use strict";

const items = Array.from({ length: 42 }, (_, i) => `Item ${i + 1}`);

const itemsPerPage = 5;
let currentPage = 1;

const listEl = document.getElementById("item-list");
const paginationEl = document.getElementById("pagination");

function renderItems() {
  listEl.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  items.slice(start, end).forEach((item) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = item;
    listEl.appendChild(li);
  });
}

function renderPagination() {
  paginationEl.innerHTML = "";

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const createPageItem = (label, page, disabled = false, active = false) => {
    const li = document.createElement("li");
    li.className = "page-item";

    if (disabled) {
      li.classList.add("disabled");
    }

    if (active) {
      li.classList.add("active");
    }

    const a = document.createElement("a");
    a.className = "page-link";
    a.href = "#";
    a.textContent = label;

    a.addEventListener("click", (e) => {
      e.preventDefault();
      if (!disabled) {
        currentPage = page;
        update();
      }
    });

    li.appendChild(a);
    return li;
  };

  paginationEl.appendChild(
    createPageItem("Anterior", currentPage - 1, currentPage === 1)
  );

  for (let i = 1; i <= totalPages; i += 1) {
    paginationEl.appendChild(createPageItem(i, i, false, i === currentPage));
  }

  paginationEl.appendChild(
    createPageItem("Próximo", currentPage + 1, currentPage === totalPages)
  );
}

function update() {
  renderItems();
  renderPagination();
}

update();
