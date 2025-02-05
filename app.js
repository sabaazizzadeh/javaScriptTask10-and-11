function counter(arr) {
    const count = {};

    arr.forEach(element => {
        count[element] = (count[element] || 0) + 1;
    });

    return count;
}

const input = ['a', 'b', 'a', 'c', 'b', 'a'];
console.log(counter(input));


function transformArray(arr) {
    return arr.map(str => ({
        value: str,
        length: str.length
    }));
}

const input2 = ['Saba', 'Sara', 'Ayda'];
console.log(transformArray(input2));


function cardGenerator() {

    const titleEL = document.createElement("div")
    const pEL = document.createElement("p")
    const buttonEL = document.createElement("button")
    console.log(titleEL, pEL, buttonEL);

    titleEL.classList.add('title')
    pEL.classList.add('content')
    buttonEL.classList.add('button')

    titleEL.textContent = 'Title'
    document.body.append(titleEL)

    pEL.textContent = 'this is paragraph'
    document.body.append(pEL)

    buttonEL.textContent = 'delete'
    document.body.append(buttonEL)


    const deleteButton = document.querySelector('.button')
    deleteButton.addEventListener(('click'), () => {
        const deleteTitle = document.querySelector('.title')
        const deleteContent = document.querySelector('.content')
        const deleteButton = document.querySelector('.button')

        deleteTitle.remove(); // Remove the box element
        deleteContent.remove(); // Remove the box element
        deleteButton.remove(); // Remove the box element
    })



}


function isValidEmail(email) {

    if (!email.includes("@") || !email.includes(".")) {
        return false;
    }


    let parts = email.split("@");
    if (parts.length !== 2) return false;

    let local = parts[0];
    let domain = parts[1];


    if (local.length === 0 || domain.length === 0) return false;


    if (!domain.includes(".")) return false;


    if (domain.startsWith(".") || domain.endsWith(".")) return false;


    if (email.startsWith("@") || email.endsWith("@")) return false;

    return true;
}


console.log(isValidEmail("saba@gmail.com"));
console.log(isValidEmail("saba-gmail.com"));
console.log(isValidEmail("saba@gmail"));
console.log(isValidEmail("@saba.com"));
console.log(isValidEmail("saba@.com"));
console.log(isValidEmail("saba@com."));

