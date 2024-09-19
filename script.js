document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("text");
  const text = textElement.innerText;

  // テキストを一文字ずつ <span> に包む
  let spannedText = "";
  for (let i = 0; i < text.length; i++) {
    spannedText += `<span>${text[i]}</span>`;
  }
  textElement.innerHTML = spannedText;

  const spans = textElement.querySelectorAll("span");

  document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    spans.forEach((span) => {
      const rect = span.getBoundingClientRect();
      const charCenterX = rect.left + rect.width / 2;
      const charCenterY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(mouseX - charCenterX, 2) + Math.pow(mouseY - charCenterY, 2)
      );

      if (distance <= 160) {
        span.style.color = "black";
      } else {
        span.style.color = "white";
      }
    });
  });
});
