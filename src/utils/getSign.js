const getSign = (userInput) => {
  if(userInput.indexOf("+") > 0) return "+";
  if(userInput.indexOf("-") > 0) return "-";
  if(userInput.indexOf("*") > 0) return "*";
  if(userInput.indexOf("/") > 0) return "/";
  return "";
}


module.exports.getSign = getSign;