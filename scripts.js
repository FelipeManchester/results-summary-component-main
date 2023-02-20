async function fetchData() {
  const res = await fetch('data.json');
  const data = await res.json();
  handleData(data);
}

function handleData(data) {
  const categoryList = document.querySelectorAll('li');
  const scoreList = document.querySelectorAll('#score');
  console.log(scoreList);
  data.forEach((element, index) => {
    document.body.innerHTML += `
    <ul>
      <li>${element.category}<span> ${element.score} / 100 </li>
    </ul>
    </div>
    `;
  });
}

fetchData();
