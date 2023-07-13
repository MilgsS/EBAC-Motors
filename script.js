$(document).ready(function() {
    $('#carrosel1').slick({
        autoplay: true, 
    });



    $('.menu').click(function(){
        $('nav').slideToggle();

    })
})

    $('#promo').click(function(){
        const destino =  $('#Promoções')

        $(this).parent().find('h3').text()

        $('html').animate({
            scrollTop: destino.offset().top
        }, 500)
    })




    $('#sob').click(function(){
        const destino =  $('#so')

        $(this).parent().find('h3').text()

        $('html').animate({
            scrollTop: destino.offset().top
        }, 500)
    })



    $('#dest').click(function(){
        const destino =  $('#destaque')

        $(this).parent().find('h3').text()

        $('html').animate({
            scrollTop: destino.offset().top
        }, 500)
    })



    $('#cont').click(function(){
        const destino =  $('#contato')

        $(this).parent().find('h3').text()

        $('html').animate({
            scrollTop: destino.offset().top
        }, 500)
    })




    $('#telefone').mask('(00)00000-0000', {
        placeholder: '(00) 00000-0000'
    });

    $('#form').validate({
        rules: {
            nome: {
                required:true
            },
            email: {
                required:true,
                email:true
            },
            telefone: {
                required: true
            },
            veiculo: {
                required: true
            },
            menssagem: {
                required: true
            }
        },
        messages: {
            nome: 'Nome obrigatorio',
            email: 'Insira um Email valido',
            telefone: 'Numero obrigatorio',
            veiculo: 'Insira seu veiculo',
            nommenssageme: 'Insira sua menssagem '
        },

        submitHandler : function(form){
            console.log(form)
        },
        invalidHandler : function(evento, validador){
            let campinc = validador.numberOfInvalids()
            console.log(campinc)
        }

    })


