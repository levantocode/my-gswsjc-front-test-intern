$(".ui.sidebar")
    .sidebar({
        context: $(".bottom.container")
    })
    .sidebar("attach events", ".menu .openbtn")
    .sidebar("setting", "dimPage", false)
;