const messages = [
  "You are my safe space ❤️",
  "You mean the world to me 💕",
  "I want to love you till infinity♾️💖",
  "I love you Cupcake...always did...always will💞"
];

let index = 0;

function changeMessage() {
  const messageEl = document.getElementById("message");
  index = (index + 1) % messages.length;
  messageEl.textContent = messages[index];
}

// Click image to show love alert
document.querySelectorAll(".photos img").forEach(img => {
  img.addEventListener("click", () => {
    alert("I love you ❤️");
  });
});
