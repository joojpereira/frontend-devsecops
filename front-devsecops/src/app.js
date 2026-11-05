import { STAGES, progress, statusMessage } from "./utils.js";

const list = document.getElementById("stages");
const fill = document.getElementById("bar-fill");
const status = document.getElementById("status");
const button = document.getElementById("run");

function render(done) {
  list.innerHTML = "";
  STAGES.forEach((name, i) => {
    const li = document.createElement("li");
    li.textContent = name;
    if (i < done) li.classList.add("done");
    list.appendChild(li);
  });
  fill.style.width = `${progress(done, STAGES.length)}%`;
  status.textContent = statusMessage(done, STAGES.length);
}

button.addEventListener("click", () => {
  let done = 0;
  render(done);
  const timer = setInterval(() => {
    done += 1;
    render(done);
    if (done >= STAGES.length) clearInterval(timer);
  }, 600);
});

render(0);