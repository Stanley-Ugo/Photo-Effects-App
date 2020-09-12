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

const imageLoader = document.getElementById("uploader");
imageLoader.addEventListener("change", uploadImage);
