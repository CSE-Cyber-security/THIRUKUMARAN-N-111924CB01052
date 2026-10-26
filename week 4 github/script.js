const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const errorEl = document.getElementById("error");
const filters = document.querySelectorAll(".filter");

let tasks = JSON.parse(localStorage.getItem("tasks") || "null") || [
  { id: 1, text: "Complete assignment", done: false },
  { id: 2, text: "Read e-book", done: true },
  { id: 3, text: "Attend class", done: false },
  { id: 4, text: "Workout", done: true },
  { id: 5, text: "Prepare for exam", done: false },
];
let filter = "all";

function save() { localStorage.setItem("tasks", JSON.stringify(tasks)); }

function addTask() {
  const text = input.value.trim();
  if (!text) { errorEl.textContent = "Enter a task before adding."; return; }
  errorEl.textContent = "";
  tasks.push({ id: Date.now(), text, done: false });
  input.value = "";
  save(); render();
}

function toggleTask(id) {
  const t = tasks.find(t => t.id === id);
  if (t) t.done = !t.done;
  save(); render();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  save(); render();
}

function render() {
  const pending = tasks.filter(t => !t.done).length;
  const done = tasks.length - pending;
  cAll.textContent = tasks.length; cPending.textContent = pending; cDone.textContent = done;
  sPending.textContent = pending; sDone.textContent = done;

  const shown = tasks.filter(t => filter === "all" || (filter === "pending" ? !t.done : t.done));
  list.innerHTML = "";
  if (!shown.length) {
    list.innerHTML = '<li class="empty">No tasks here. Add one above.</li>';
    return;
  }
  shown.forEach(t => {
    const li = document.createElement("li");
    li.className = "task" + (t.done ? " done" : "");

    const cb = document.createElement("input");
    cb.type = "checkbox"; cb.checked = t.done;
    cb.addEventListener("change", () => toggleTask(t.id));

    const span = document.createElement("span");
    span.className = "text"; span.textContent = t.text;

    const ok = document.createElement("button");
    ok.className = "icon-btn ok"; ok.title = "Mark complete"; ok.textContent = "\u2713";
    ok.addEventListener("click", () => toggleTask(t.id));

    const del = document.createElement("button");
    del.className = "icon-btn del"; del.title = "Delete task"; del.textContent = "\u2715";
    del.addEventListener("click", () => deleteTask(t.id));

    li.append(cb, span, ok, del);
    list.appendChild(li);
  });
}

addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", e => { if (e.key === "Enter") addTask(); });
filters.forEach(btn => btn.addEventListener("click", () => {
  filters.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  filter = btn.dataset.filter;
  render();
}));

render();
