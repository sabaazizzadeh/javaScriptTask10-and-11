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