let descuentoJunior= 15;

let nombre= document.getElementById ("nombre");
console.log (nombre);

let apellido= document.getElementById ("apellido");
console.log (apellido);

let mail= document.getElementById ("mail");
console.log (mail);

let cantidadTickets= document.getElementById ("cantidadTickets");
console.log (cantidadTickets);

let categoria= document.getElementById ("categoriaSelect");
console.log (categoria);

let totalPago= document.getElementById ("totalPago");

let totalValorTickets= document.getElementById ("totalValorTickets");


function quitarClaseError(){
    let x = document.querySelectorAll(".form-control, .form-select");
@@ -76,39 +76,31 @@ function totalAPagar(){
            alert ("Seleccione una categoría");
            return;
        }
    }


    function totalValorTickets ()
    { cantidadTickets*valorTicket;
    } 


    let totalValorTickets
    let DescuentoSegunCategoria
    let totalValorTickets = (cantidadTickets.value)*valorTicket;

    switch (DescuentoSegunCategoria) 
    {
    switch (categoria.value) 
    { 
        case "n":
        document.write("totalValorTickets==totalValorTickets")
        totalPago.innerHTML = (totalValorTickets = totalValorTickets);
        break;

        case"e":
        document.write("totalValorTickets== (totalValorTickets - (descuentoEstudiante/100*totalValorTickets))")
        totalPago.innerHTML = (totalValorTickets= (totalValorTickets - (descuentoEstudiante/100*totalValorTickets)))
        break

        case"t":
        document.write("totalValorTickets== (totalValorTickets-(descuentoTrainee/100*totalValorTickets))")
        totalPago.innerHTML = (totalValorTickets = (totalValorTickets-(descuentoTrainee/100*totalValorTickets)))
        break;

        case"j":
        document.write("totalValorTickets==(totalValorTickets-(descuentoJunior/100*totalValorTickets))")
        totalPago.innerHTML = (totalValorTickets =(totalValorTickets-(descuentoJunior/100*totalValorTickets)))
        break;
        default:
        break;
     }    

    let btnResumen
    let btnBorrar

    totalPago.innerHTML=totalValorTickets;
    }

    btnResumen.addEventListener('click',totalAPagar);

    btnBorrar.addEventListener('click',resetTotalAPagar);