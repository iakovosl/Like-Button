let $likeButton = document.querySelector(".like i"); //$ Means that the variable contains an HTML element
let $likeCount = document.getElementById("like-count");
let $likeWrapper = document.querySelector(".like");
let hasbeenClicked = false;


function likeClickHandler(){

    if (hasbeenClicked) {
          //console.log("Like button clicked");
    let likes = $likeCount.innerText;
    likes = Number(likes);
    likes--;
    $likeCount.innerText = likes;
    //console.log(likes, typeof likes);
    $likeWrapper.classList.add("liked"); //dynamically adds the class "liked"
    let hasbeenClicked = false;
    
    }else{
          //console.log("Like button clicked");
    let likes = $likeCount.innerText;
    likes = Number(likes);
    likes++;
    $likeCount.innerText = likes;
    //console.log(likes, typeof likes);
    $likeWrapper.classList.add("liked"); //dynamically adds the class "liked"
    hasbeenClicked = true;
    }
    
}

$likeButton.addEventListener("click", likeClickHandler);