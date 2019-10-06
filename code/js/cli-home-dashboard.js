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
            .sidebar("setting", "closable", false)
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

        $("#load-modal-informar-horas-trabalhadas")
            .load("../html/modal-informar-horas-trabalhadas.html")
        ;
    })
;