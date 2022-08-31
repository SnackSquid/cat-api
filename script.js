function getGif() {
  const img = document.querySelector("img");
  const subject = img.alt;
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=7aIKrtKvoqFSr460ZADkbrSLcqaM1qT8&s=${subject}`;

  fetch(url, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });

  const button = document.querySelector("button");
  button.textContent = `Show me more ${subject}`;
}

function searchGif(event) {
  event.preventDefault();
  const img = document.querySelector('img');
  const input = document.querySelector('input');
  const value = input.value;
  img.alt = value;
  getGif(value);
}

getGif('cats');

const button = document.querySelector(".gifButton");
button.addEventListener("click", getGif);

const searchButton = document.querySelector(".searchButton");
searchButton.addEventListener('click', searchGif);
