// instances
import * as fs from "node:fs";
import * as path from "node:path";

import { getFileList, prepareEnvironment, copyAssets } from "@/utils";
import { markups } from "@/markups";

// constants
const outPutFolder = path.resolve("./public", "output"); // Path to the output folder where the banners will be generated // Path to the output folder where the banners will be generated
const folderLocation = path.resolve("./public", "banner_maker"); // Path of the folder where the banners to be created are located
const folderTemplate = path.resolve("./public", "template"); // Path to the output folder where the banners will be generated
const emailOptions = {
    "BB--": "indexEmailBB.html",
    "CL--": "indexEmailCL.html",
    "EL--": "indexEmailEL.html",
    "JM--": "indexEmailJM.html",
    "MC--": "indexEmailMC.html",
};

/**
 * checks if string includes "__email"
 * @param {str} name
 * @returns boolean
 */
const isEmail = (name) => name.includes("__email");

/**
 * this function prepares the folder and performs
 *  the banner creation process for each of the folders
 *  that you have.
 * @param {Array} list
 */
const createBaseFolders = (list) => {
    prepareEnvironment(outPutFolder); // Prepare the environment by deleting the contents of the output folder if it exists and creating it again.
    list.forEach((element) => {
        const folderPath = path.join(outPutFolder, element); // Generates the full path to the output folder for each element
        fs.mkdirSync(folderPath); // Creates the output folder for each item
        if (!isEmail(element)) {
            fs.writeFileSync(path.join(folderPath, "index.js"), ""); // Create an empty file named 'index.js' in the created folder
        }
    });
};

/**
 * receives and clears the folder titles that already
 * have an established format
 * @param {*} element
 * @returns clean elements
 */
const getBannerData = (element) => {
    return {
        width: element.split("__").pop().split("x").shift(), // Gets the width of the banner from the folder title
        height: element.split("x").pop(), // Gets the height of the banner from the folder title
        name: element.split("__").shift(), // Gets the name of the banner from the folder title
        frames: element.includes("-ff") ? true : false, // Gets the frames
    };
};

/**
 * Creates the HTML markup for different elements
 * @param {string} className - The class name of the element
 * @param {string} type - The type of markup to generate (html, js, css, img, img-a)
 * @returns {string} - The generated markup
 */
const elementMarkup = (
    fileName,
    type = "bannerHtml",
    width = "",
    height = ""
) => {
    const [name, special] = fileName.split("."); // Gets the base name of the file by removing the file extension
    return markups[special === "link" ? "emailHtmlLink" : type](
        name,
        fileName,
        width,
        height
    );
};

/**
 * executes all the logic to create the html structure with its style and base script
 * @param {string} list
 */
const createHtmlFiles = (list) => {
    // Reads the contents of the file 'indexbanner.html' from the folder 'template'.
    const baseBannerHtml = fs.readFileSync(
        `${folderTemplate}/indexbanner.html`,
        "utf8"
    );

    // Reads the contents of the 'indexEmail.html' file from the 'template' folder
    let baseEmailHtml = fs.readFileSync(
        `${folderTemplate}/indexEmail.html`,
        "utf8"
    );

    // Reads the contents of the 'index.js' file from the 'template' folder
    const baseJs = fs.readFileSync(`${folderTemplate}/index.js`, "utf8");

    // create html for each folderLocation
    list.forEach((element) => {
        let baseHtml = isEmail(element) ? baseEmailHtml : baseBannerHtml;

        if (isEmail(element)) {
            const option = Object.keys(emailOptions).find((key) =>
                element.includes(key)
            );
            if (option) {
                const fileName = emailOptions[option];
                baseHtml = fs.readFileSync(
                    `${folderTemplate}/${fileName}`,
                    "utf8"
                );
            }
        }

        // Gets the width, height and name of the banner from the title of the folder.
        const { width, height, name, frames } = getBannerData(element);
        const assetsDestination = isEmail(element)
            ? path.join(`${outPutFolder}/${element}`, "img")
            : path.join(`${outPutFolder}/${element}`, "assets");
        const assetFolder = isEmail(element)
            ? `${folderLocation}/${element}/img`
            : `${folderLocation}/${element}/assets`;
        // Banner asset folder path
        const bannerAssets = fs.existsSync(assetFolder)
            ? getFileList(assetFolder)
            : []; // Gets the list of banner assets (images) if the folder exists, otherwise it is an empty array.

        copyAssets(assetFolder, assetsDestination);

        let html = "";
        if (isEmail(element)) {
            const bannerMarkup = bannerAssets
                .map((element) => elementMarkup(element, "emailHtml"))
                .join("\n");

            // replace tags in html for content
            html = baseHtml.replace("__CONTENTEMAIL__", bannerMarkup);
        } else {
            const bannerMarkup = bannerAssets
                .map((element) => elementMarkup(element))
                .join("\n"); //
            const codeMarkup = bannerAssets
                .map((element) => elementMarkup(element, "jsAnimation", frames))
                .join("\n"); // Generates HTML markup of banner elements
            const styleMarkup = bannerAssets
                .map((element) =>
                    elementMarkup(element, "cssNode", width, height)
                )
                .join("\n"); // Generates CSS markup for banner elements

            const bannerBackground = "#00809a"; // Banner background color
            const baseStyles = fs.readFileSync(
                `${folderTemplate}/bannerStyles.css`,
                "utf8"
            ); // css styles for the banner

            // replace tags in html for content
            const bannerStyles = baseStyles
                .replace("__WIDTH__", width)
                .replace("__HEIGHT__", height)
                .replace("__stylesMarkup__", styleMarkup)
                .replace("__BG__", bannerBackground); //

            // replace tags in html for content
            html = baseHtml
                .replace("__NOMBRE__", name)
                .replace("__WIDTH__", width)
                .replace("__HEIGHT__", height)
                .replace("__BANNER__", bannerMarkup)
                .replace("/*__STYLES__*/", bannerStyles); // Replaces the tags in the base HTML with the generated content

            // replace tags in js for content
            const contentJs = baseJs.replace("__CODE__", codeMarkup); // Replaces the tags in the base JS with the generated content.

            fs.writeFileSync(
                `${outPutFolder}/${element}/index.js`,
                contentJs,
                "utf8"
            ); // Saves the generated JS content to the corresponding file
        }

        fs.writeFileSync(
            `${outPutFolder}/${element}/${name}.html`,
            html,
            "utf8"
        ); // Saves the generated HTML content in the corresponding file

        console.log(`${element}/${name}.html created successfully!`); // Displays a success message on the console
    });
};

/**
 * starts the execution of the script
 */
const startProcess = () => {
    const fileList = getFileList(folderLocation);
    createBaseFolders(fileList); // Create the necessary output folders
    createHtmlFiles(fileList); // create emails and banners
    console.log("test number one"); // Gets the list of files and folders inside the provided folder
};

export default function handler(_req, res) {
    try {
        startProcess();
        return res.status(200).json(true);
    } catch (err) {
        console.error(err);
        return res.status(417).json(err);
    }
}
