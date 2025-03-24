function generateQR() {
    const input = document.getElementById("qrInput").value;
    const color = document.getElementById("qrColor").value;
    const qrOutput = document.getElementById("qrOutput");
    qrOutput.innerHTML = "";

    if (input) {
        new QRCode(qrOutput, {
            text: input,
            width: 200,
            height: 200,
            colorDark: color,
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        setTimeout(() => {
            const qrCanvas = qrOutput.querySelector("canvas");
            const downloadLink = document.createElement("a");
            downloadLink.href = qrCanvas.toDataURL("image/png");
            downloadLink.download = "myqrcode.png";
            downloadLink.innerText = "Download QR Code";
            downloadLink.style.display = "block";
            qrOutput.appendChild(downloadLink);
        }, 100);
    } else {
        alert("Please enter some text or a URL!");
    }
}