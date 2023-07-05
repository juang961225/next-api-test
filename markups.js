exports.markups = {
    jsAnimation: (name, frame) => {
        const numberToLabel = {
            1: "first",
            2: "second",
            3: "third",
        };

        const number = name.match(/\d+/)?.[0] || "1";
        const label = numberToLabel[number] || "first";

        const animationType = frame ? "from" : "to";
        return `.${animationType}(".${name}", 3, { autoAlpha: 0, y:10, ease: "power2.out" }, "${label}")`;
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
