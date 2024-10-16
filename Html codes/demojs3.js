function addPassengerDetails()
{
    const noofpassenger=document.getElementById("nopassengers").value;
    alert(noofpassenger);
    for(let i=1;i<=noofpassenger;i++)
    {
        const cousernamelabel=document.createElement("label");
        const labeltext=document.createTextNode("Co-User"+i+" name");
        cousernamelabel.appendChild(labeltext);
        cousernamelabel.setAttribute("class","form-label");

        const cousername=document.createElement("input");
        cousername.setAttribute("class","form-control");
        cousername.setAttribute("id","cousername"+i);

        const couseragelabel=document.createElement("label");
        const labeltext1=document.createTextNode("Co-User"+i+" Age");
        couseragelabel.appendChild(labeltext1);
        couseragelabel.setAttribute("class","form-label");
        
        const couserage=document.createElement("input");
        couserage.setAttribute("type","number");
        couserage.setAttribute("class","form-control");
        couserage.setAttribute("id","couserage"+i);
       
        const divelement=document.getElementById("passengerdetails");
        divelement.appendChild(cousernamelabel);
        divelement.appendChild(cousername);
        divelement.appendChild(couseragelabel);
        divelement.appendChild(couserage);
    }

}


function GetData()
{
    const username=document.getElementById("username").value;
    const userage=document.getElementById("age").value;
    const nopassengers=document.getElementById("nopassengers").value;
    var couserdetailsstring="*****";
    for(let i=1;i<=nopassengers;i++)
    {
        const cousername=document.getElementById("cousername"+i).value;
       // alert(cousername);
        const couserage=document.getElementById("couserage"+i).value;
        //alert(couserage)
        couserdetailsstring+="\n Co-Passeneger details-"+cousername+" "+couserage;
    }
   /* print all details inside div tag having id=seatdetails*/
   const pretag=document.getElementById("seatdetails");
   const labeltext2=document.createTextNode("username"+"userage"+"couserdetailsstring");
   pretag.appendChild(labeltext2);
   const getelement=document.getElementById("seatdetails").value;
   getelement.appendChild(pretag);
}