let qrinput = document.querySelector(".qrinp");
let qrimg = document.querySelector(".qrimg");
let qrbtn = document.querySelector("button");

function generateQR() {

    if (qrinput.value.length > 0) {
        let qrurl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrinput.value}`;
        qrimg.src = qrurl;
    }   
}
