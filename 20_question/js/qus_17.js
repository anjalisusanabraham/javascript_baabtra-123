const contentContainer = document.getElementById("content-container");
const loadMoreButton = document.getElementById("load-more-button");

let page = 1; 
const perPage = 5; 
let isLoading = false;

function fetchMoreContent() {
    if (isLoading) {
        return;
    }

    isLoading = true;

    
    setTimeout(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${perPage}`)
            .then((response) => response.json())
            .then((data) => {
                isLoading = false;

                if (data.length === 0) {
                    loadMoreButton.disabled = true;
                    loadMoreButton.textContent = "No more items";
                    return;
                }

                data.forEach((item) => {
                    const itemElement = document.createElement("div");
                    itemElement.classList.add("content-item");
                    itemElement.textContent = item.title;
                    contentContainer.appendChild(itemElement);
                });

                page++;
            })
            .catch((error) => {
                isLoading = false;
                console.error("Error fetching data:", error);
            });
    }, 1000); 
}

loadMoreButton.addEventListener("click", fetchMoreContent);


fetchMoreContent();
