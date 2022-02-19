const menu = () => {
    const menu = document.querySelectorAll("menu");
    const main = document.querySelectorAll("main");
    const body = document.querySelectorAll("body");

    //фуи для открытия и закрытия меню
    const handleMenu = () => {
        menu.classList.toggle(".navbar-nav");
    };
    console.log(handleMenu);

    const smoothScroll = a => {
        let blockId;
        blockId = a.getAttribute("img");
        //плавное передвижение по экрану
        document.querySelector(blockId).scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    };
    /*
        body.addEventListener("click", e => {
            const target = e.target;
            if (target.closest("menu")) {
                handleMenu();
            } else if (target.closest('img')) {
                e.preventDefault();
                //console.log(target);
                smoothScroll(target.closest('img'));
            } else if (menu.classList.contains("navbar-collapse") && target !== menu) {
                handleMenu();
            }
        });

        menu.addEventListener("click", e => {
            const target = e.target;
            if (target.closest(".close-btn")) {
                e.preventDefault();
                handleMenu();
            } else if (target.closest("a")) {
                e.preventDefault();
                handleMenu();
                smoothScroll(target);
            }
        });*/

    // listner menu on all body 
    body.addEventListener("click", (e) => {
        const target = e.target;
        console.log(target);
        if (target.closest("menu")) {
            handleMenu();
        } else if (
            target.closest('a[href=""]') &&
            !target.closest("menu")
        ) {
            e.preventDefault();
            console.log(target);
            smoothScroll(target.closest('.smooth-scroll'));
        } else if (target.closest("a") && target.closest("menu")) {
            e.preventDefault();
            handleMenu();
            smoothScroll(target);
        } else if (menu.classList.contains("navbar-collapse--active") && target !== menu) {
            handleMenu();
        }
    });
};

//export default menu;