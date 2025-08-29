document.addEventListener('DOMContentLoaded', function() {
  const words = ["First", "Second", "Third", "Fourth"];
  let index = 0;
  const span = document.querySelector('.rotating-span');
  if (!span) return;

  setInterval(() => {
    index = (index + 1) % words.length;
    span.textContent = words[index];
  }, 2000);
});