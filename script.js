const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();

const reader = new FileReader();

function uploadImage(e) {
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = () => {
    img.src = reader.result;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
  };
}

function greyscale() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4){
        const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07;
        data[i] = grey;
        data[i + 1] = grey;
        data[i + 2] = grey;
    }
    ctx.putImageData(imageData, 0, 0);
}

function sepia() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4){
        const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07;
        data[i] = grey + 95;
        data[i + 1] = grey + 58;
        data[i + 2] = grey;
    }
    ctx.putImageData(imageData, 0, 0);
}

function invert() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4){
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }
    ctx.putImageData(imageData, 0, 0);
}

document.querySelectorAll('button')[0].addEventListener("click", greyscale);
document.querySelectorAll('button')[1].addEventListener("click", sepia);
document.querySelectorAll('button')[2].addEventListener("click", invert);

const imageLoader = document.getElementById("uploader");
imageLoader.addEventListener("change", uploadImage);
