
string = 'kayak'

const isPalindrome = (str) => {
    if (str.length == 1 || str.length == 0){
        return true 
    }

    if (str.charAt(0) == str.charAt(str.length - 1)){
        return isPalindrome(str.slice(1, str.length - 1))
    }

    return false
} 


console.log(isPalindrome(string))