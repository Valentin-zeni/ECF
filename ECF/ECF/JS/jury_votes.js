var select = document.querySelectorAll("select")
var options = document.querySelectorAll("option");
var radios = document.querySelectorAll("#style");

var result1 = document.getElementById("value_ile");
console.log(select);
console.log(options);
console.log(radios);

for (i = 0; i < select.length; i++) {
    select[i].addEventListener('change', choixLivres);
}

function choixLivres() 
{
    for (j = 0; j < select.length; j++)
    {
        console.log(select.length);

        for(k = 0; k < radios.length; k++)
        {
            console.log(radios.length);

            if (options[1].selected == true) 
            {
                result1.innerHTML = radios[1].value;
            }
        }
    }
}



// console.log(radio1.value);

// for( i = 0 ; i < select.length ; i++ )
// {
// 	select[i].addEventListener("change", choixLivres );
// }

// console.log(select);

