const initialsEl = document.getElementById("initials")
const scoreEl = document.getElementById("score")

let score = localStorage.getItem("High-Score")
let initials = localStorage.getItem("initials")

initialsEl.textContent = JSON.parse(initials)
scoreEl.textContent = score