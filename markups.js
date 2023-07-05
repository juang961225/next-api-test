exports.markups = {
    jsAnimation: (name, frame) => {
        let label = 'Animation';

        if (name.includes("1")) {
            label = "first";
        } else if (name.includes("2")) {
            label = "second";
        } else if (name.includes("3")) {
            label = "third";
        } else {
            label = "first"; // Default label if none of the above conditions are met
        }

        if (frame) {
            return `.from(".${name}", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "${label}")`;
        } else {
            return `.to(".${name}", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "${label}")`;
        }
    },
    cssNode: (name, fileName, width, height) => `
    .${name} {
        top: 0px;
        left: 0px;
        width: ${width}px;
        height: ${height}px;
        position: absolute;
        /* z-index: 0; */
    }`,
    bannerHtml: (name, fileName) =>
        `<div class="${name}"><img src="./assets/${fileName}" alt="${name}"></div>`,
    emailHtml: (name, fileName) => `                        
    <!-- BEGIN : IMAGE -->
    <tr>
        <td align="center" style="padding:0;margin:0;display:block;height:auto;"> <img
                src="./img/${fileName}" width="600" alt="${name}"
                style="max-width:600px; display:block;height:auto; font-size: 26px; font-weight: bold; color:#ffffff;"
                class="full-width" /> </td>
    </tr>
    <!-- END : IMAGE -->`,
    emailHtmlLink: (name, fileName) => `
    <!-- BEGIN : IMAGE -->
    <tr>
        <td align="center" style="padding:0;margin:0;display:block;height:auto;">
            <a href="__link__" target="_blank">
                <img src="./img/${fileName}" width="600" alt="${name}"
                    style="max-width:600px; display:block;height:auto; font-size: 26px; font-weight: bold; color:#ffffff;"
                    class="full-width" />
            </a>
        </td>
    </tr>
    <!-- END : IMAGE -->`,
};
