$(".ui.checkbox").checkbox();
$(".ui.dropdown").dropdown();


$("#criar-projeto")
    .on("click", () => {
        $("#adm-modal-criar-projeto").modal("show")
    })
;

$("#sidebar-criar-projeto")
    .on("click", () => {
        $("#adm-modal-criar-projeto").modal("show")
    })
;

$("#adm-close-modal-icon")
    .on("click", () => {
        $("#adm-modal-criar-projeto").modal("hide")
    })
;

$("#btn-criar-projeto")
    .on("click", () => {
        $("#adm-modal-criar-projeto").modal("hide")
    })
;