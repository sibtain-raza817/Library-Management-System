document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("issueForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const book = document.getElementById("bookIssue").value;

        alert("Thank you " + name +
              "!\nYour request for the book '" + book + "' has been submitted successfully.");

        form.reset();
    });

});

let find = document.getElementById('find-btn');

find.addEventListener('click', ()=>{
    let findBox = document.getElementById('find-box').value;
    alert(`This is collection will add later...${findBox}`)
})