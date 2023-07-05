console.log("i'm here");

var tl = new TimelineMax({ repeat: -1, repeatDelay: 2 });

$(document).ready(function () {
    // Frame 1
    tl.from(".bg1", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".bg2", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "second")
.from(".bg3", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "third")
.from(".cta", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".legal", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".logo", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".text1", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".text2", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "second")
.from(".text3", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "third");
});
