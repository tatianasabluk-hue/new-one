// 🎮 ROBLOX TOP 10

console.log("🎮 Roblox TOP 10 запущено!");


// ==========================
// 🎮 КНОПКИ ІГОР
// ==========================

function chooseGame(gameName) {

    const notification =
        document.getElementById("notification");

    notification.textContent =
        "🎮 Ти обрав: " + gameName + "! 🔥";

    notification.classList.add("show");

    setTimeout(() => {

        notification.classList.remove("show");

    }, 2500);
}


// ==========================
// 🖱️ 3D ЕФЕКТ КАРТОК
// ==========================

const cards =
    document.querySelectorAll(".game-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 18;

        const rotateY =
            (centerX - x) / 18;

        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


// ==========================
// ✨ ЕФЕКТ ПРИ КЛІКУ
// ==========================

document.addEventListener("click", (event) => {

    if (event.target.tagName === "BUTTON") {
        return;
    }

    const sparkle =
        document.createElement("div");

    sparkle.textContent = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left =
        event.clientX + "px";

    sparkle.style.top =
        event.clientY + "px";

    sparkle.style.fontSize = "25px";

    sparkle.style.pointerEvents = "none";

    sparkle.style.zIndex = "99999";

    document.body.appendChild(sparkle);


    sparkle.animate(
        [
            {
                transform:
                    "translate(-50%, -50%) scale(0)",

                opacity: 1
            },

            {
                transform:
                    "translate(-50%, -100px) scale(1.5)",

                opacity: 0
            }
        ],

        {
            duration: 700,
            easing: "ease-out"
        }
    );


    setTimeout(() => {

        sparkle.remove();

    }, 700);

});


// ==========================
// 🚀 ПАРАЛАКС ЕМОДЗІ
// ==========================

const emojis =
    document.querySelectorAll(".particles span");

document.addEventListener("mousemove", (event) => {

    const mouseX =
        event.clientX / window.innerWidth - 0.5;

    const mouseY =
        event.clientY / window.innerHeight - 0.5;


    emojis.forEach((emoji, index) => {

        const speed =
            (index + 1) * 8;

        emoji.style.marginLeft =
            mouseX * speed + "px";

        emoji.style.marginTop =
            mouseY * speed + "px";

    });

});


// ==========================
// 🚀 ЗАПУСК
// ==========================

window.addEventListener("load", () => {

    console.log(
        "🚀 Сайт повністю завантажено!"
    );

});