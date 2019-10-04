$(".ui.checkbox").checkbox();
$(".ui.dropdown").dropdown();

$("#cli-criar-projeto")
    .on("click", () => {
        $("#cli-modal-criar-projeto").modal("show")
    })
;

$("#cli-close-modal-icon")
    .on("click", () => {
        $("#cli-modal-criar-projeto").modal("hide")
    })
;

$("#cli-btn-criar-projeto")
    .on("click", () => {
        $("#cli-modal-criar-projeto").modal("hide")
    })
;