
function consultaCep(){
    $(".barra-progresso").show();//fazer aparecer a barra de progresso "iniciar"
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep)
            $(".cep").show();//fazer aparecer o que estava oculto
            $(".barra-progresso").hide();//esconder a barra de progresso "finalizar"
           
        }
    })
}

//ocultar um elemento do site
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});