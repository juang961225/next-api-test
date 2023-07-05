import * as fs from "node:fs";
import * as path from "node:path";

/**
 *  is responsible for deleting everything in the folder
 * @param {string} filePath
 */
const hardDelete = (filePath) => {
    fs.rmSync(filePath, { recursive: true });
};

/**
 *  search and sort files from a folder path
 * @param {string} filePath
 * @returns items within that folder
 */
export const getFileList = (filePath) => {
    const files = fs.readdirSync(filePath);
    files.filter((file) => file !== ".DS_Store");

    // comparator function
    const comparator = (a, b) => {
        const numA = parseInt((a.match(/\d+/) || [])[0]); // Nullification check for a.match(/\d+/)
        const numB = parseInt((b.match(/\d+/) || [])[0]); // Nullification check for b.match(/\d+/)
        return numA - numB;
    };

    // Sort the list using the comparator
    const listSorted = files.sort(comparator);
    return listSorted;
};

/**
 * validates if a folder exists and deletes everything
 *  in it to make the environment ready for new banners
 */
export const prepareEnvironment = (outPutFolder) => {
    if (fs.existsSync(outPutFolder)) {
        hardDelete(outPutFolder);
    }
    fs.mkdirSync(outPutFolder);
};

/**
 *
 * @param {*} originFolder
 * @param {*} destinationFolder
 */
export const copyAssets = (originFolder, destinationFolder) => {
    if (fs.existsSync(originFolder)) {
        fs.mkdirSync(destinationFolder);
        const assetFiles = getFileList(originFolder);

        assetFiles.forEach((file) => {
            const originPath = path.join(originFolder, file);
            const destinationPath = path.join(destinationFolder, file);
            fs.copyFileSync(originPath, destinationPath);
        });
    } else {
        console.log("The asset folder does not exist");
    }
};
