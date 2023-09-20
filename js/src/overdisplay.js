const cover = new Component(
    "#over-display",
    coverListener,
    {"img":document.querySelector("#selected-image")},
    [["display","flex"],["display","none"]],
    "cover"
)