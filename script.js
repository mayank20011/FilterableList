let listitems=document.querySelectorAll("li.list-group-item.text-primary");
// console.log(listitems);

const input=document.querySelector("#filterInput");

input.addEventListener("keyup",(e)=>
{
  let datatosearch=e.target.value;
  console.log(typeof datatosearch)
  datatosearch=datatosearch.toUpperCase();
  for(let i=0; i<listitems.length;i++)
  {
    if(listitems[i].innerHTML.toUpperCase().includes(datatosearch))
    {
      listitems[i].style.display="";
    }
    else
    {
      listitems[i].style.display="none";
    }
  }
});