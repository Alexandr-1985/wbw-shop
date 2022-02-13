const sertificats = () => {
    const sertificateDocuments = document.querySelectorAll(".sertificate-document");
    const overlay = document.querySelector('.document-overlay');

    let div;
    sertificateDocuments.forEach(sertificateDocument => {
        sertificateDocument.addEventListener("click", (e) => {
            e.preventDefault();
            const target = e.target;
            div = document.createElement('div');
            const searchAdress = sertificateDocument.href;
            div.innerHTML = `<img src = "${searchAdress}" width="450px"></img>`;

            overlay.style.cssText = `
                                    position: fixed;
                                    opacity: 1;
                                    z-index: 100;`

            div.style.cssText = `
                                 position: fixed;
                                 top: 50%;
                                 left: 50%;
                                 transform: translate(-50%,-50%);
                                 z-index: 9999;`

            document.body.append(div);
            //overlay.style.display = "block";


        });
    });
    overlay.addEventListener("click", () => {

        //div.style.cssText = `z-index: -1;`

        /* overlay.style.cssText = `opacity: 0;`
         console.log('dfg');*/
        div.remove();
    });
};

export default sertificats;