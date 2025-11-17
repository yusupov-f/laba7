// Tab Slider for lessons.html
const tabItems = document.querySelectorAll('.tab_content_item');
const tabBlocks = document.querySelectorAll('.tab_content_block');
let current = 0;
let auto;

function showTab(i) {
  tabBlocks.forEach((block, idx) => {
    block.style.display = idx === i ? 'block' : 'none';
  });
  tabItems.forEach((item, idx) => {
    item.classList.toggle('tab_content_item_active', idx === i);
  });
}

function nextTab() {
  current = (current + 1) % tabBlocks.length;
  showTab(current);
}

showTab(current);
auto = setInterval(nextTab, 3000);


tabItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    current = i;
    showTab(current);
    clearInterval(auto);
    auto = setInterval(nextTab, 3000);
  });
});
