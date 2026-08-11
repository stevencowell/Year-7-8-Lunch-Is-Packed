(() => {
  const boxes = [...document.querySelectorAll('[data-readiness]')];
  const count = document.querySelector('[data-readiness-count]');
  const update = () => {
    boxes.forEach(box => localStorage.setItem(`lunchpacked:readiness:${box.dataset.readiness}`, String(box.checked)));
    count.textContent = boxes.filter(box => box.checked).length;
  };
  boxes.forEach(box => {
    box.checked = localStorage.getItem(`lunchpacked:readiness:${box.dataset.readiness}`) === 'true';
    box.addEventListener('change', update);
  });
  count.textContent = boxes.filter(box => box.checked).length;
})();
