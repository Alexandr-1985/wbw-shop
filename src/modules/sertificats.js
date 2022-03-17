"use strict";
const sertificats = () => {
    const sertificateDocuments = document.querySelectorAll(
        ".sertificate-document"
    );
    const overlay = document.querySelector(".overlay");

    let div;
    sertificateDocuments.forEach((sertificateDocument) => {
        sertificateDocument.addEventListener("click", (e) => {
            e.preventDefault();
            const target = e.target;
            div = document.createElement("div");
            const searchAdress = sertificateDocument.href;
            div.innerHTML = `<img src = "${searchAdress}" width="450px"></img>`;

            overlay.style.cssText = `display: block;`;

            div.style.cssText = `
                                 position: fixed;
                                 top: 50%;
                                 left: 50%;
                                 transform: translate(-50%,-50%);
                                 z-index: 9999;`;

            document.body.append(div);
        });
    });

    window.addEventListener("keydown", (evt) => {
        if (evt.key === "Escape") {
            overlay.style.display = "none";
            div.remove();
        }
    });

    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
        div.remove();
    });
};

export default sertificats;