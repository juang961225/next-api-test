// instances
import { basePath } from "@/next.config";
import * as fs from "node:fs";
const path = require("node:path");

const typeFolder = "emails"

let BASE_PATH = path.resolve("./public/pending_tasks/" + typeFolder);

console.log(BASE_PATH)

const getFolders = (basePath) => fs.readdirSync(basePath);

const getAssets = (assetPath) => {

    const fullPath = path.resolve(`${BASE_PATH}/${assetPath}`, "img");

    return fs.readdirSync(fullPath);
};

const startProcess = () => {
    let bannerFolders = getFolders(BASE_PATH);

    const bannerData = bannerFolders.map((element) => {
        const assets = getAssets(element);
        return {
            name: element,
            assets,
        };
    });

    return bannerData;
};

export default function handler(_req, res) {
    try {
        const output = startProcess();
        return res.status(200).json({ result: output });
    } catch (err) {
        console.error(err);
        return res.status(417).json(err);
    }
}

