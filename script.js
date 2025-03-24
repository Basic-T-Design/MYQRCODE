body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}
.container {
    text-align: center;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
label {
    display: block;
    margin: 10px 0 5px;
}
input, select, button {
    padding: 10px;
    margin: 5px 0;
    width: 200px;
    box-sizing: border-box;
}
input[type="color"] {
    width: 100px;
    height: 40px;
    padding: 0;
}
button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover {
    background-color: #0056b3;
}
#qrOutput {
    margin-top: 20px;
    position: relative;
}
#qrTextOverlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-size: 16px;
    text-align: center;
    width: 100%;
}
