function isNumberKey(evt)
{
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  
  //number keys
  if (charCode >= 48 && charCode <= 57)
  {
    return true;
  }

  //these overlap with the arrow keys in ascii
  if (["%", "&", "'", "("].includes(evt.key))
  {
    return false;
  }

  //arrow keys
  if (charCode >= 37 && charCode <= 40)
  {
    return true;
  }

  //misc (control, backspace, tab, insert, delete)
  if (evt.ctrlKey || charCode == 8 || charCode == 9 || charCode == 45 || charCode == 46)
  {
    return true;
  }

  return false;
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
