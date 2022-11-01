let text = document.getElementById("text");
let profile = document.getElementById("profile");
let genceral = document.getElementById("general");
let statistics = document.getElementById("statistics");
let myFilter = document.getElementById("myFilter");
let filter = myFilter.getElementsByClassName("filter");
let btnShow = document.getElementById("btnShow");
const ctx = document.getElementById("myChart").getContext("2d");
const inp = document.getElementById("input");
const clean = document.getElementById("clean");

let myFilters = document.getElementById("containerBlock");
let filters = myFilters.getElementsByClassName("filters");
// Chart
let array = {
  label: "CHART",
  data: [18, 20, 24, 20, 28, 30],
  backgroundColor: "rgba(196, 196, 196, 0.15)",
  borderColor: "rgba(196, 196, 196, 0.15)",
  fill: true,
  borderWidth: 2,
  borderRadius: 4,
  yAxisID: "y-axis-gravity",
};

let myArr = {
  label: "CHART",
  data: [10, 17, 21, 22, 5, 0],
  backgroundColor: "rgba(196, 196, 196, 0.15)",
  borderColor: "rgba(196, 196, 196, 0.15)",
  yAxisID: "x-axis-gravity",
  borderRadius: 4,
};

let string = {
  labels: ["8 Feb", "15 Feb", "22 Feb", "1 Mar"],
  datasets: [array, myArr],
};

const myChart = new Chart(ctx, {
  type: "bar",
  data: string,
  options: {
    scales: {
      xAxes: [
        {
          barPercentage: 1,
          categoryPercentage: 0.6,
        },
      ],
      yAxes: [
        {
          id: "y-axis-density",
        },
        {
          id: "y-axis-gravity",
        },
      ],
    },
  },
});

// Chart

// active
for (let i = 0; i < filter.length; i++) {
  filter[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    btnShow.innerHTML = "Show More";
    btnShow.append(btnShow);
  });
}

for (let i = 0; i < filters.length; i++) {
  filters[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("actives");
    current[0].className = current[0].className.replace(" actives", "");
    this.className += " actives";
  });
}
// active

let word =
  "Другими словами, строки вставляются безопасным способом, как делает это elem.textContent. Поэтому эти методы могут использоваться...";
text.append(word);

let letter =
  "Apple Inc. designs, manufactures, and markets smartphones,personal computers, tablets, wearables, and accessories worldwide. It also...";

let str =
  "DocumentFragment DocumentFragment является специальным DOM-узлом, который служит обёрткой для передачи списков узлов. Мы можем добавить...";

let arr = [
  "Apple Inc. designs, manufactures, and markets smartphones,personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, aline of multi-purpose tablets; and wearables, home, and accessories.  Apple Inc. designs, manufactures, and markets smartphones,personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, aline of multi-purpose tablets; and wearables, home, and accessories",
  "Другими словами, строки вставляются безопасным способом, как делает это elem.textContent. Поэтому эти методы могут использоваться только для вставки DOM-узлов или текстовых фрагментов. А что, если мы хотим вставить HTML именно «как html», со всеми тегами и прочим, какделает это elem.innerHTML? insertAdjacentHTML/Text/Element С этим может помочь другой, довольно универсальный метод: elem.insertAdjacentHTML(where, html).Первый параметр – это специальное слово, указывающее, куда по отношению к elem производить вставку. Значение должно быть одним из следующих:",
  "DocumentFragment DocumentFragment является специальным DOM-узлом, который служит обёрткой для передачи списков узлов. Мы можем добавить к нему другие узлы, но когда мы вставляем его куда-то, он «исчезает», вместо него вставляется его содержимое. Например, getListContent ниже генерирует фрагмент с элементами .",
];

let texter = "Show More";
let warning = "Show Less";

btnShow.append(texter);

btnShow.addEventListener("click", () => {
  if (btnShow.innerHTML == texter) {
    arr = arr?.map((item) => {
      if (text.innerHTML.split(" ")[0] === item.split(" ")[0]) {
        text.innerHTML = item;
        btnShow.innerHTML = "Show Less";
        btnShow.append(btnShow);
        return text.append(text);
      }
    });
  } else if (btnShow.innerHTML == warning) {
    if (text.innerHTML[0] === word[0]) {
      btnShow.innerHTML = "";
      btnShow.append(texter);
      text.innerHTML = word;
      text.append(text);
    } else if (text.innerHTML[0] === letter[0]) {
      btnShow.innerHTML = "";
      btnShow.append(texter);
      text.innerHTML = letter;
      text.append(text);
    } else if (text.innerHTML[0] === str[0]) {
      btnShow.innerHTML = "";
      btnShow.append(texter);
      text.innerHTML = str;
      text.append(text);
    }
  }
});

profile.addEventListener("click", () => {
  text.innerHTML = letter;
  document.getElementById("text").append(text);
});

genceral.addEventListener("click", () => {
  text.innerHTML = word;
  document.getElementById("text").append(text);
});

statistics.addEventListener("click", () => {
  text.innerHTML = str;
  document.getElementById("text").append(text);
});

clean.addEventListener("click", () => {
  inp.value = "";
});
