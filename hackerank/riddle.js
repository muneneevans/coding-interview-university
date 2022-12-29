/*
Make the function more readable and maintainable
Please do not comment on this public gist (comments will be removed)
Please do not fork on this public gist - if you got here from 
an application form, please reply privately on the form.
This is used as part of a hiring pipeline, I ask you to respect that.
*/

function filterWordsByLength(text) {

    const wordArray = text
        .toLocaleLowerCase()
        .split(' ')
        .reverse()

    wordArray.forEach((word) => word.trim())
    const longWords = wordArray.filter(word => word.length > 5)
    const result = longWords.reduce((accumulator, current) => `${accumulator}, ${current}`, "")

    return result
}


console.log(filterWordsByLength("evans     Munene mimimi mi kanyithia 44"))