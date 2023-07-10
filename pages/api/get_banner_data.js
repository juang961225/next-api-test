// instances
import { basePath } from "@/next.config";
import * as fs from "node:fs";
import * as path from "node:path";

const BASE_PATH = path.resolve("./public/pending_tasks/banners");

const getBannerFolders = (basePath) => fs.readdirSync(basePath);

const getAssets = (assetPath) => {
    const fullPath = path.resolve(`${BASE_PATH}/${assetPath}`, "assets");
    return fs.readdirSync(fullPath);
};

const startProcess = () => {
    const bannerFolders = getBannerFolders(BASE_PATH);

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
