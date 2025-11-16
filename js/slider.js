const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");
const total = images.length;
const caption = document.querySelector(".caption");
const captionText = document.querySelector(".caption-text");

let index = 0;
let autoPlay;

  // 每张图片的文字与颜色
  const captions = [
    { text: "今晚有约！妖你鬼混赢好礼>> ", color: "25,24,32" },
    { text: "投稿动物内容！分万元奖金！", color: "195,153,123" },
    { text: "中国户外行业最高奖项揭晓，在B站看独家精彩视频！", color: "37,22,9" },
    { text: "大尊一朝转世，秦牧宿敌现身", color: "30,30,30" },
    { text: "巨龙预言！魔法与王冠的禁忌守护", color: "143,157,118" },
    { text: "大罗现场点评国足？", color: "253,216,79" },
    { text: "一个视频带你看懂什么是“量子隧穿”！", color: "143,117,93" },
    { text: "两集连播！谁是最强？打一场！", color: "200,190,148" },
    { text: "手办模玩、谷子周边聚集地>>", color: "57,186,245" }
  ];

// 创建圆点
images.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(i) {
  if (i < 0) index = total - 1;
  else if (i >= total) index = 0;
  else index = i;

  slides.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");

  // 更新文字与背景颜色
  captionText.textContent = captions[index].text; 
  caption.style.background = `linear-gradient(to top,
    rgba(${captions[index].color},1) 46%,  
    rgba(${captions[index].color},0) 70%)`;
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// 自动播放
function startAutoPlay() {
  autoPlay = setInterval(nextSlide, 4000);
}

function stopAutoPlay() {
  clearInterval(autoPlay);
}

// 鼠标悬停暂停
const slider = document.getElementById("slider");
slider.addEventListener("mouseenter", stopAutoPlay);
slider.addEventListener("mouseleave", startAutoPlay);

startAutoPlay();
