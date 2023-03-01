async function fetchData() {
  const res = await fetch('data.json');
  const data = await res.json();
  handleData(data);
}

function handleData(data) {
  const list = document.querySelectorAll('li');
  const myResult = document.getElementById('result');
  let totalScore = 0;

  let i = 0;
  list.forEach((e) => {
    e.childNodes[1].src = data[i].icon;
    e.childNodes[3].textContent = data[i].category;
    e.childNodes[5].textContent = data[i].score;
    totalScore += data[i].score;
    i++;
  });
  myResult.innerHTML = Math.round(totalScore / 4);
}

fetchData();
