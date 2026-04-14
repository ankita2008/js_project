const textArea = document.getElementById("text");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

textArea.addEventListener("input", function () {
  let text = textArea.value;

  // Characters count
  charCount.innerText = text.length;

  // Words count
  let words = text.trim().split(/\s+/);

  if (text.trim() === "") {
    wordCount.innerText = 0;
  } else {
    wordCount.innerText = words.length;
  }
});