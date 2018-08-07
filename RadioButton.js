function fixEdgeBug(Default, Other)
{
  if(window.navigator.userAgent.indexOf("Edge") > -1)
	{
		if(!document.getElementById(Default).checked && !document.getElementById(Other).checked)
		{
			document.getElementById(Default).checked = false;
			document.getElementById(Other).checked = true;
		}
	}
}

function hideMapCenter(id)
{
  var radioButton = document.getElementById(id);
  radioButton.style.display = "none";
}

function showMapCenter(id)
{
  var radioButton = document.getElementById(id);
  radioButton.style.display = "block";
}

function checkPivot(pivotButton, pivot)
{
  if(document.getElementById(pivotButton).checked == true)
  {
    var radioButton = document.getElementById(pivot);
    radioButton.style.display = "block";
  }
}