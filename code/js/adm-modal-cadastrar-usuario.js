$("#cadastrar-usuario")
    .on("click", () => {
        $("#adm-modal-cadastrar-usuario").modal("show")
    })
;

$("#cadastrar-usuario-close-modal-icon")
    .on("click", () => {
        $("#adm-modal-cadastrar-usuario").modal("hide")
    })
;

$("#btn-cadastrar-usuario")
    .on("click", () => {
        $("#adm-modal-cadastrar-usuario").modal("hide")
    })
;