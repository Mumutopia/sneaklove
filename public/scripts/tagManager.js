
//create 
const wrapperCreate = document.getElementById("add-tag-form");
const btnCreateTag = wrapperCreate.querySelector("#btn_new_tag");
const inputTag = wrapperCreate.querySelector("#new_tag_name");
const selectTag = document.getElementById("tags");

// console.log(selectTag);

function createTag(event) {
    axios
        .post('/tag-add', { label: inputTag.value })
        .then((httpResponse) => addTag(httpResponse.data))
        .catch((err) => console.error(err));
}

console.log("btnCreateTag", btnCreateTag);


function addTag(tag) {
    // display the list we fetched via AJAX method

    const option = document.createElement('option')
    option.setAttribute("value", `${tag._id}`);
    option.textContent = `${tag.label}`;
    selectTag.appendChild(option);

}


function fetchAllTags(evt) {
    axios // user axios
        .get("/tag-add") // a verif avec guillaume
        .then((httpResponse) => displayTags(httpResponse.data)) // is success
        .catch((err) => console.error(err)); // if failure
}

btnCreateTag.onclick = createTag;


function displayTags(tags) {
    // display the list we fetched via AJAX method
    selectTag.innerHTML = `<option value="-1" disabled selected>Choose a category</option>`;
    tags.forEach((tag) => {
        const option = document.createElement('option')
        option.setAttribute("value", `${tag.label}`);
        // option.setAttribute("name", tag.label);
        option.textContent = `${tag.label}`;

        selectTag.appendChild(option);
    });
}




