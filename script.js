// complete the given function

function palindrome(str){
     let rev = "";
        str = str.toLowerCase();
        // str = str.replace(" " , "");
        str = str.replace(/ |'|,|;|:/gi, "");
        // console.log(str);
//         str = str.replace("'" , "");
//         str = str.replace("." , "");
// 		str = str.replace("?" , "");
// 		str = str.replace(";" , "");
// 		str = str.replace(":" , "");
        let l = str.length;
        let i = 0; 
        let j = (l-1);
        while(i<=j) {
            if(str.charAt(i) != str.charAt(j)) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
  let ans = palindrome("a man, a plan, a canal Panama");
  console.log(ans);

module.exports = palindrome
