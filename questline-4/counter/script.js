const countEl = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

let count = 0;

function updateCount() {
  countEl.textContent = count;
}

incrementBtn.addEventListener('click', () => {
  count++;
  updateCount();
});

decrementBtn.addEventListener('click', () => {
  count--;
  updateCount();
});
