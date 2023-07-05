console.log("i'm here");

var tl = new TimelineMax({ repeat: -1, repeatDelay: 2 });

$(document).ready(function () {
    // Frame 1
    tl.from(".", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".bg_mc_biggood", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".big_good_logo", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".cta", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".cta_2", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "second")
.from(".disclaimer_legal", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".mc_logo", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".titular_1", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".titular_2", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "second");
});
