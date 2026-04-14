let black_keys = document.querySelectorAll(".black-key");
let white_keys = document.querySelectorAll(".white-key");

black_keys.forEach((black_key, index) => {

    black_key.style.width = ((window.innerWidth / 21) * 50 / 100) + "px";
    black_key.style.left = ((window.innerWidth / 21)) * index + ((window.innerWidth / 21) * 50 / 100) + (((window.innerWidth / 21) * 50 / 100) / 2) + "px";
   
    switch (index) {
        case 2:
        case 6:
        case 9:
        case 13:
        case 16:
        case 20: black_key.style.visibility = "hidden";
            break;
    };
});

