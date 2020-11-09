count = 0;

document.addEventListener("click", () => count++);

setInterval(() => {
  console.log("analytics.js, click-count: ", count);
}, 1000);
