function updateTimer() {
  const future = Date.parse("2023/08/11 00:00:00");
const now = new Date();
const diff = future - now;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor(diff / (1000 * 60 * 60));
const mins = Math.floor(diff / (1000 * 60));
const secs = Math.floor(diff / 1000);

const d = days;
const h = hours - days * 24;
const m = mins - hours * 60;
const s = secs - mins * 60;
document.getElementById("timer")
.innerHTML =

'<div>' + d + '<span>일</span></div>' +
'<div>' + h + '<span>시</span></div>' +
'<div>' + m + '<span>분</span></div>' +
'<div>' + s + '<span>초</span></div>';
}

setInterval(updateTimer, 1000);