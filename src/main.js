import "./style.css";

let status = [
  {
    img: "1.webp",
    button: "不要",
    scale: 1,
  },
  {
    img: "2.webp",
    button: "？你认真的吗...",
    scale: 1.2,
  },
  {
    img: "3.webp",
    button: "要不再想想？",
    scale: 1.4,
  },
  {
    img: "4.webp",
    button: "不许选这个！",
    scale: 1.6,
  },
  {
    img: "5.webp",
    button: "我会很伤心的...",
    scale: 1.8,
  },
  {
    img: "6.webp",
    button: "别嘛~",
    scale: 2,
  },
  {
    img: "final.webp",
  },
];

let index = 0;

function ChangeStatus(index) {
  document.querySelector("#maltese > img").src = status[index].img;
  document.querySelector("#buttons > div:nth-child(2)").innerText =
    status[index].button;
  let button = document.querySelector("#buttons > div:nth-child(2)");
  // 改字体
  button.style.fontSize = 14 * status[index].scale + "px";
}

ChangeStatus(index);

let times = 0;

document
  .querySelector("#buttons > div:nth-child(2)")
  .addEventListener("click", () => {
    let button = document.querySelector("#buttons > div:nth-child(2)");
    if (times == 0) {
      button.classList.add("duration");
    }
    index++;
    if (index == status.length - 1) {
      index = status.length - 2;
      button.style.display = "none";
    }
    ChangeStatus(index);
  });

document
  .querySelector("#buttons > div:nth-child(1)")
  .addEventListener("click", () => {
    // 最后一个
    document.querySelector("#maltese > img").src =
      status[status.length - 1].img;

    document.querySelector("#title").innerText =
      "！！！我可是超级爱你的呦！！！";
    document.querySelector("#buttons").style.display = "none";
  });

// 图片预加载
let img = [];
for (let i = 0; i < status.length; i++) {
  img[i] = new Image();
  img[i].src = status[i].img;
}
