$("#cliente-criar-projeto")
    .on("click", () => {
        $("#cliente-modal-criar-projeto").modal("show")
    })
;

$("#cliente-close-modal-icon")
    .on("click", () => {
        $("#cliente-modal-criar-projeto").modal("hide")
    })
;

$("#cliente-btn-criar-projeto")
    .on("click", () => {
        $("#cliente-modal-criar-projeto").modal("hide")
    })
;