const inp = document.querySelector('#qrInput');
const genBtn = document.querySelector('#generateBtn'); 
const qrPopup = document.querySelector('#qrPopup');
const qrImg = document.querySelector('#qrImg');
const downloadBtn = document.querySelector('#downloadBtn');
const closeBtn = document.querySelector('#closeBtn');
const mainContainer = document.querySelector('#mainContainer');

const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150&data=';

genBtn.addEventListener('click', () => {
    if(!inp.value.trim()){
        alert("Please Enter a Text or URL.");
        return;
    }

    const imgUrl = url + encodeURIComponent(inp.value);
    qrImg.setAttribute('src', imgUrl);

    setTimeout(() => {
        qrPopup.classList.add('show');
        mainContainer.classList.add('opacity');
    }, 500);
})

downloadBtn.addEventListener('click', () => {
    const imgUrl = qrImg.src;
    fetch(imgUrl)
    .then((res) => res.blob())
    .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'QRCode.png';
        link.click();
    })
})

closeBtn.addEventListener('click',() => {
    qrPopup.classList.remove('show');
    mainContainer.classList.remove('opacity');
})


// why error in this and slove the error and re write the code