// instances
import { basePath } from "@/next.config";
import * as fs from "node:fs";
import * as path from "node:path";

const BASE_PATH = path.resolve("./public/pending_tasks/emails");

const getBannerFolders = (basePath) => fs.readdirSync(basePath);

const getAssets = (assetPath) => {
    const fullPath = path.resolve(`${BASE_PATH}/${assetPath}`, "img");
    return fs.readdirSync(fullPath);
};

const startProcess = () => {
    let bannerFolders = getBannerFolders(BASE_PATH);

    bannerFolders.splice(0, 1)

    console.log(bannerFolders)

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
