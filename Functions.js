function translateMap(input, output, translateX, translateY, translateZ)
{
  var displacement = new Point(Number(getTextboxNumber(translateX)), Number(getTextboxNumber(translateY)), Number(getTextboxNumber(translateZ)));
  var translatedMap = new customMap(document.getElementById(input).value);
  
  translatedMap.Translate(displacement);
  
  document.getElementById(output).value = translatedMap.toString();
}

function rotateMap(input, output, pivotButton, rotateX, rotateY, rotateZ, pivotX, pivotY, pivotZ)
{
  var rotatedMap = new customMap(document.getElementById(input).value);
  var rotation = new quaternion(-Number(getTextboxNumber(rotateX)), Number(getTextboxNumber(rotateY)), -Number(getTextboxNumber(rotateZ)));
  
  if(document.getElementById(pivotButton).checked == true)
  {
    var pivot = new Point(Number(getTextboxNumber(pivotX)), Number(getTextboxNumber(pivotY)), Number(getTextboxNumber(pivotZ)));
    rotatedMap.Rotate(rotation, pivot);
  }
  else
  {
    rotatedMap.Rotate(rotation);
  }
  
  document.getElementById(output).value = rotatedMap.toString();
}