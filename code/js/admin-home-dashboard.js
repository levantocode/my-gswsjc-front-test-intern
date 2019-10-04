$(document).ready((e) => {
    $(".ui.accordion").accordion();
    $(".ui.dropdown").dropdown();
    $("#project").progress();

    $(".ui.sidebar")
        .sidebar({
            context: $(".bottom.container")
        })
        .sidebar("attach events", ".menu .openbtn")
        .sidebar("setting", "dimPage", false)
    ;

    $("#ver-detalhes")
        .on("click", () => {
            if ($("#detalhes-expansion").css("display") == "none") {
                $("#detalhes-expansion").css("display", "block");
            }
            else {
                $("#detalhes-expansion").css("display", "none");
            }
        })
    ;


    $("#load-header")
        .load("../html/header.html")
    ;

    $("#load-footer")
        .load("../html/footer.html")
    ;

    $("#load-aviso-horas-trabalhadas")
        .load("../html/aviso-horas-trabalhadas.html")
    ;


    $("#load-adm-modal-criar-projeto")
        .load("../html/adm-modal-criar-projeto.html")
    ;

    $("#load-adm-modal-cadastrar-usuario")
        .load("../html/adm-modal-cadastrar-usuario.html")
    ;


    $("#load-cli-modal-criar-projeto")
        .load("../html/cli-modal-criar-projeto.html")
    ;
})
;