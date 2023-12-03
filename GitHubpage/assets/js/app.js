// import { fetchData } from "./api.js";
// import { numberTokilo} from "./module.js";

const addEventOnElements =function($elements, eventType ,callback){
          for(const $item of $elements){
                    $item.addEventOnElements(eventType, callback)
          }
};

const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
          $header.classList[window.scrollY > 50 ? "add" : "remove"]
          ("active");
});


const $searchToggler = document.querySelector("[data-search-toggler]");

const $searchField = document.querySelector("[data-search-field]");

let $isExpanded = false;

$searchToggler.addEventListener("click" , function() {
      $header.classList.toggle("search-active");
      isExpanded = isExpanded ? false : true;
      this.setAttribute("aria-expanded" , isExpanded);
      $searchField.focus();
});