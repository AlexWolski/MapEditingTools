function translateMap(input, output, translateX, translateY, translateZ)
{
  var scaledMap = new customMap(document.getElementById(input).value);
  
  scaledMap.Translate(getTextboxNumber(translateX), getTextboxNumber(translateY), getTextboxNumber(translateZ));
  
  document.getElementById(output).value = scaledMap.toString();
}