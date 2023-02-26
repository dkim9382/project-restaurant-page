import restaurantImg from "./img.jpg";

export function createPage() {
    console.log("9999999");
    
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = restaurantImg;
    div.appendChild(img);

    

    

    return div;
}