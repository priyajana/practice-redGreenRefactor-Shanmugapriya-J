function countVowels(myString){
    let count = 0;
    let vowels = ['a','e','i','o','u'];
    if(myString === ""){
        return 'String is empty!';
    }
    else if(!isNaN(myString)){
        return 'Invalid Input!';
    }
    else
    {
        for (letter of myString){
            if(vowels.includes(letter.toLowerCase())){
                count+=1;
            }
        }
        return count;
    }
}

module.exports = countVowels;