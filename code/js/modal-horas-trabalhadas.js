$("#informar-horas-trabalhadas")
    .on("click", () => {
        $("#aviso-horas-trabalhadas").modal("show")
    })
;

$("#btn-aviso-cancelar")
    .on("click", () => {
        $("#aviso-horas-trabalhadas").modal("hide")
    })
;

$("#btn-aviso-aceitar")
    .on("click", () => {

        setTimeout(() => {
            $("#aviso-horas-trabalhadas").modal("hide")
        }, 1000)
        
        $("#modal-informar-horas-trabalhadas").modal("show")
    })
;