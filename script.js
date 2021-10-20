const showMore = () => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("more-btn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Show more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = `

                    Show less`;
        moreText.style.display = "inline";
    }
}


const moreBtn = document.querySelector("#more-btn")
moreBtn.addEventListener("click", showMore)
