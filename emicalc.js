

function calculateEMI(){
  const p= document.querySelector("#loan").value;
  const ir=document.querySelector("#int").value;
  const t=document.querySelector("#tenure").value;
  const r=ir/100/12;
        const emivalue=(p*r*(1+r)**t)/((1+r)**t-1);
const value=document.getElementById('payment').innerHTML=emivalue.toFixed(2);


 }