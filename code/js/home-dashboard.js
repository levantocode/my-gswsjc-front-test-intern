$(".ui.accordion").accordion();
$(".ui.checkbox").checkbox();
$(".ui.dropdown").dropdown();
$("#project").progress();

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