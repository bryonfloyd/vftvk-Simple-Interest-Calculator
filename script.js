
function compute()
{  
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;

        var d = new Date();
        var n = d.getFullYear();
    
        var m = n + parseInt(years);
        var ir = rate/100;
    
        if (principal == "" || principal <= 0){
           alert("Enter a positive number."); 
           window.location.reload();

        } else{
           var interest = principal*ir*years;   
           
           document.getElementById('result').innerHTML = 
                                'If you deposit <mark>' + principal + '</mark>,<br>' 
                                + 'at an interest rate of <mark>' + rate + '%</mark>.<br>'
                                + 'You will receive an amount of <mark>' + interest + '</mark>,<br>'
                                + 'in the year <mark>' + m + '</mark>';
          }               
        
}

function slider() 
{
    var rate = document.getElementById("rate").value;
    
    document.getElementById('slideDisplay').innerHTML = rate+'%';
    
}
