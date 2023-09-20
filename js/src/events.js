const imageListener = new Listener(
    "click",
    (ctx)=>{
        _selectedImage = ctx;
        _Manager.get("cover").values["img"].src = ctx.htmlElement.src;
        _Manager.get("cover").overwriteStyles(0);
    }
);
const coverListener = new Listener(
    "click",
    (ctx)=>{
        ctx.overwriteStyles(1);
    }
);