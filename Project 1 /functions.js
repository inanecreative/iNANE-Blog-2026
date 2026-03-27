const modal = document.getElementById("newsModal");
const cards = document.querySelectorAll(".news-box") ;
const closeBtn = document.querySelector(".close-modal") ;

cards.forEach(card => {
    card.addEventListener("click", () => {
        // 1. get the data from the card you clicked
        const imgSrc = card.querySelector(".newsImage").src;
        const title = card.querySelector("h1").innerText;
        const text = card.querySelector ("p").innerText;

        // 2. put that data into the modal
        document.getElementById("modalImg").src = imgSrc;
        document.getElementById("modalTitle").innerText = title;
        document.getElementById("modalText").innerText = text;
        
        // 3. show the modal
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // prevent scrolling behind the modal
    });
});

// close when clicking "X" or the background

closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto"
};

window.onclick = (event) => {
    if(event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};
