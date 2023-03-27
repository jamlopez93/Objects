const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const form = document.querySelector('form');
const grid = document.querySelector('#grid');
const formDataArray = [];


const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

function upperCaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const formData = new FormData(event.target); 
  const title = formData.get('title'); 
  const author = formData.get('author');
  const pages = formData.get('pages');
  const isRead = formData.get('isRead'); 
  const read = isRead ? 'Read' : 'Not Read';    
  const div = document.createElement('div'); 
  const titleParagraph = document.createElement('p');
    titleParagraph.textContent = `Title: ${title}`;
    div.appendChild(titleParagraph);
  const authorParagraph = document.createElement('p');
    authorParagraph.textContent = `Author: ${author}`;
    div.appendChild(authorParagraph);
  const pagesParagraph = document.createElement('p');
    pagesParagraph.textContent = `Pages: ${pages}`;
    div.appendChild(pagesParagraph);
  const readParagraph = document.createElement('p');
    readParagraph.textContent = `${read}`;
    div.appendChild(readParagraph);
  grid.appendChild(div); 
  const formDataObject = {
    title,
    author,
    pages,
    isRead: isRead ? true : false 
  };
  formDataArray.push(formDataObject);
  console.log(formDataArray);
  closeModal();
});

