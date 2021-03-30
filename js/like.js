let $likeButton = document.querySelector(".like i"); //$ Means that the variable contains an HTML element
let $likeCount = document.getElementById("like-count");
let $likeWrapper = document.querySelector(".like");
let hasbeenClicked = false;


function likeClickHandler(){

    let likes = $likeCount.innerText;
    likes = Number(likes);
    
    if (hasbeenClicked) {
    likes--;
    $likeWrapper.classList.remove("liked"); //dynamically adds the class "liked"
    hasbeenClicked = false;
    
    }else{
    likes++;
    $likeWrapper.classList.add("liked"); //dynamically adds the class "liked"
    hasbeenClicked = true;
    }

    $likeCount.innerText = likes;
    
}

$likeButton.addEventListener("click", likeClickHandler);