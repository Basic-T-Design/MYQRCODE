function generateQR() {
    const type = document.getElementById("qrType").value;
    const input = document.getElementById("qrInput").value;
    const color = document.getElementById("qrColor").value;
    let bgColor = document.getElementById("bgColor").value;
    const transparentBg = document.getElementById("transparentBg").checked;
    const gradientBg = document.getElementById("gradientBg").checked;
    const qrText = document.getElementById("qrText").value;
    const qrOutput = document.getElementById("qrOutput");
    qrOutput.innerHTML = "";

    if (!input) {
        alert("Please enter some content!");
        return;
    }

    let qrContent = input;
    if (type === "vcard") {
        qrContent = `BEGIN:VCARD\nVERSION:3.0\nN:${input.split(",")[0] || ""}\nFN:${input.split(",")[0] || ""}\nTEL:${input.split(",")[1] || ""}\nEMAIL:${input.split(",")[2] || ""}\nEND:VCARD`;
    } else if (type === "phone") {
        qrContent = `tel:${input}`;
    } else if (type === "links") {
        qrContent = input.split(",").map(link => link.trim()).join("\n");
    }

    if (transparentBg) bgColor = "transparent";
    const qr = new QRCode(qrOutput, {
        text: qrContent,
        width: 200,
        height: 200,
        colorDark: color,
        colorLight: gradientBg ? "transparent" : bgColor,
        correctLevel: QRCode.CorrectLevel.H
    });

    setTimeout(() => {
        const qrCanvas = qrOutput.querySelector("canvas");
        if (gradientBg && !transparentBg) {
            const ctx = qrCanvas.getContext("2d");
            const gradient = ctx.createLinearGradient(0, 0, 200, 200);
            gradient.addColorStop(0, "#ff9999");
            gradient.addColorStop(1, "#99ccff");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 200, 200);
            qr.makeCode(qrContent); // Redraw QR over gradient
        }
        if (qrText) {
            const textDiv = document.createElement("div");
            textDiv.id = "qrTextOverlay";
            textDiv.innerText = qrText;
            qrOutput.appendChild(textDiv);
        }
        const downloadLink = document.createElement("a");
        downloadLink.href = qrCanvas.toDataURL("image/png");
        downloadLink.download = "myqrcode.png";
        downloadLink.innerText = "Download QR Code";
        downloadLink.style.display = "block";
        qrOutput.appendChild(downloadLink);
    }, 100);
}
