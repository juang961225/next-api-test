console.log("i'm here");

var tl = new TimelineMax({ repeat: -1, repeatDelay: 2 });

$(document).ready(function () {
    // Frame 1
    tl.from(".", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".banner_sin_logo", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".cta", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".flechas", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".flechas_1", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".img1", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".img2", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "second")
.from(".img4", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".logo", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".txt1", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".txt1_1", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".txt1_2", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".txt1_3", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".txt1_4", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".txt2", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "second")
.from(".txt2_1", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".txt2_2", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "second")
.from(".txt2_3", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "second")
.from(".txt2_4", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "second")
.from(".txt2_5", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "second")
.from(".txt3", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "third")
.from(".txt3_1", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first")
.from(".txt3_2", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "second")
.from(".txt3_3", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "third")
.from(".txt3_4", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "third")
.from(".txt5", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "first");
});
