function isNumberKey(evt)
{
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  
  if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
  {
     return false;
  }

  return true;
}

function getTextboxNumber(textbox)
{
  if(isNaN(Number(document.getElementById(textbox).value)) || document.getElementById(textbox).value == "")
  {
    document.getElementById(textbox).value = 0;
    return 0;
  }
  
  return document.getElementById(textbox).value;
}