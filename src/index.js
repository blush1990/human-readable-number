module.exports = function toReadable (number) {
  let num = [];
  let arr = String(number).split("")
  let single = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let decimal = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let hun = "hundred";
  for (let i=0; i<arr.length; i++){
    if (arr.length === 1){
      return single[number];
    }
    else if (arr.length === 2 && arr[0] === "1"){
      return single[number];
    }
    else if (arr.length === 2 && arr[1] === "0"){
      return decimal[Number(arr[0])-2];
    }
    else if (arr.length === 2){
      return decimal[Number(arr[0])-2] + " " + single[arr[1]]
    }
    else if (arr.length === 3 && arr[1] === "0" && arr[2] === "0") {
      return single[arr[0]] + " " + hun;
    }
    else if (arr.length === 3 && arr[2] === "0" && arr[1] === "1"){
      return single[arr[0]] + " " + hun + " "+ single[10];
    }
    else if (arr.length === 3 && arr[2] === "0"){
      return single[arr[0]] + " " + hun + " "+ decimal[Number(arr[1])-2];
    }
    else if (arr.length === 3 && arr[1] === "0"){
      return single[arr[0]] + " " + hun + " " + single[arr[2]];
    }
    else if (arr.length === 3 && arr[1] === "1") {
      return single[arr[0]] + " " + hun + " " + single[Number(arr[2])+10];
    }
    else {
      return single[arr[0]] + " " + hun + " "+ decimal[Number(arr[1])-2] + " " + single[arr[2]];
    }
  }  
}
