async function getBearPics(){
    const bearContainer = document.querySelector(".bear-images");
    const bearPics = await fetch("https://placebear.com/200/300");
    const jsonbears = await bearPics.json();
    console.log(jsonBears);
    bearPic.src = jsonbears.image;
    bearPic.height = "400";
    bearPic.width = "600";
    bearContainer.append(bearPic);
    return jsonBears;
  }
  const bearButton = document.querySelector(".get-bear-button");
  bearButton.addEventListener("click", () => getBearPics());
  