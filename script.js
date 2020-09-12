const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = 'Horizon.jpg';
img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
}