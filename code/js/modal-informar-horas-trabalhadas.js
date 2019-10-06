$('.ui.dropdown')
    .dropdown({
        showOnFocus: false
    })
;

$("#informar-horas-close-modal-icon")
    .on("click", () => {
        $("#modal-informar-horas-trabalhadas").modal("hide")
    })
;

$("#btn-gravar-horas")
    .on("click", () => {
        $("#modal-informar-horas-trabalhadas").modal("hide")
    })
;
