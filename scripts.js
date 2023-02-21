async function fetchData() {
  const res = await fetch('data.json');
  const data = await res.json();
  handleData(data);
}

function handleData(data) {
  let list = document.querySelectorAll('li');
  let myResult = document.getElementById('result');
  let totalScore = 0;

  let i = 0;
  list.forEach((e) => {
    console.log(e.childNodes[1]);
    e.childNodes[1].src = data[i].icon;
    e.childNodes[3].textContent = data[i].category;
    e.lastElementChild.textContent = data[i].score;
    totalScore += data[i].score;
    i++;
  });
  myResult.innerHTML = Math.round(totalScore / 4);
}

fetchData();
