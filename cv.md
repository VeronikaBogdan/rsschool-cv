# **Veronika Bogdan**
### **Contacts**
**Location:** Minsk, Belarus  
**Phone:** +375(29)5623235  
**E-mail:** veron9399bogdan@gmail.com  
**Telegram** @veron9399  
### **Information About Myself**
I'm a second-year student of Faculty of Mechanics and Mathematics of BSU. 

### **Skills**
+ HTML&CSS
+ JS
+ C++
+ Git
+ Figma

### **Code Example**
**Reverse words**  
_Complete the function that accepts a string parameter, and reverses each word in the string. **All** spaces in the string should be retained._
```javascript
function reverseWords(str) {
  const arrWords = str.split(" "); 
  
  str = '';
  let count = 1;
  
  for(let word of arrWords){
    const arrLetters = word.split("").reverse().join("");
    
    if(count < arrWords.length){    
      str = str + arrLetters + " ";
      count++;
    } else {
      str = str + arrLetters;
    }
  }
    
  return str;
}
```