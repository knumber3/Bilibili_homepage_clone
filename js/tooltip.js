document.querySelectorAll('.tooltip-port').forEach(port => {
  const tooltip = port.querySelector('.tooltip');
  let hideTimeout;

  port.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    tooltip.classList.add('show');
  });

  port.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      tooltip.classList.remove('show');
    }, 100); // 延迟 500ms 隐藏
  });

  tooltip.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout); // 鼠标移入tooltip时保持显示
  });

  tooltip.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      tooltip.classList.remove('show');
    }, 100);
  });
});

const moreButton = document.querySelector('#more-button');
const moreTooltip = document.querySelector('#more-tooltip');
let hideTimeout;

moreButton.addEventListener('mouseenter',() => {
  clearTimeout(hideTimeout);
  moreTooltip.style.display = 'grid';
})

moreButton.addEventListener('mouseleave',() => {
  hideTimeout = setTimeout(() => {
    moreTooltip.style.display = 'none';
  }, 1000);
})

moreTooltip.addEventListener('mouseenter',() => {
  clearTimeout(hideTimeout);
})

moreTooltip.addEventListener('mouseleave',() => {
  hideTimeout = setTimeout(() => {
    moreTooltip.style.display = 'none';
  }, 1000);
})
