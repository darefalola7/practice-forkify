import { elements } from "./base";
import { limitRecipeTitle } from "../views/searchView";

export const toggleLikeBtn = (isLiked) => {
  const iconString = isLiked ? "icon-heart" : "icon-heart-outlined";
  // console.log(document.querySelector(".recipe__love"));
  document
    .querySelector(".recipe__love use")
    .setAttribute("href", `img/icons.svg#${iconString}`);

  // icons.svg#icon-heart-outlined
};

export function toggleLikeMenu(numLikes) {
  elements.likesMenu.style.visibility = numLikes > 0 ? "visible" : "hidden";
}

export function renderLike(like) {
  const markup = `
    <li>
        <a class="likes__link" href="#${like.id}">
            <figure class="likes__fig">
                <img src="${like.img}" alt="${like.title}">
            </figure>
            <div class="likes__data">
                <h4 class="likes__name">${limitRecipeTitle(like.title)}</h4>
                <p class="likes__author">${like.author}</p>
            </div>
        </a>
    </li>
  `;
  elements.likesList.insertAdjacentHTML("beforeend", markup);
}

export function deleteLike(id) {
  const el = document.querySelector(`.likes__link[href="#${id}"]`)
    .parentElement;
  console.log(el);
  if (el) el.remove();
}
