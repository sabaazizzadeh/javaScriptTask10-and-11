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

