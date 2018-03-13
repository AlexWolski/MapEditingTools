function copy(id)
{
	var copyText = document.getElementById(id);
  copyText.select();
  document.execCommand("Copy");
}

function empty(id)
{
  document.getElementById(id).value = "";
}