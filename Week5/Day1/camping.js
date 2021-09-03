async function fetchCampData() {
  const data = await fetch(
      "https://newsapi.org/v2/everything?q=camping&apiKey=fc1ca5134d554723b7cb3dc3692e8a09"
  );
  const campData = await data.json();
  const campArticles = document.querySelector(".news-articles");
  for (let article of campData.articles) {
    console.log(article);
    const articleContainer = document.createElement("div");
    articleContainer.className = "article";
    const header = document.createElement("h2");
    const textBody = document.createElement("p");
    const image = document.createElement("img");

    header.innerText = article.title;
    textBody.innerText = article.description;
    image.src = article.urlToImage;
    articleContainer.append(image, header, textBody);
    campArticles.append(campArticles);
  }
}
fetchCampData();

