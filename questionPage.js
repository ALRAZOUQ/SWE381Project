
let theIDs = Array.from(document.getElementsByClassName("post-id"))
let rating_buttons_groups = Array.from(document.getElementsByClassName("rating-buttons"))

let rating_matrix = []


for (let i = 0; i < theIDs.length; i++) {
    rating_matrix.push([theIDs[i].textContent, Array.from(rating_buttons_groups[i])])
}

for (let i = 0; i < theIDs.length; i++) {
    console.log(Array.from(rating_matrix[i][1].children))
    Array.from(rating_matrix[i][1].children).forEach(star => {
        star.addEventListener("click", () => { rate(parseInt(star.getAttribute("id")[5]), rating_matrix[i]); })
    }
    );
}

function rate(num, arr) {

    for (let j = 0; j < num; j++) {

        arr[1].children[j].classList.add("rated-star");
    }
}

