// instances
import { basePath } from "@/next.config";
import * as fs from "node:fs";
import * as path from "node:path";

const getBannerFolders = (basePath) => fs.readdirSync(basePath);

const getAssets = (assetPath, PathRute, parameterValue) => {
    const fullPath = path.resolve(`${PathRute}/${assetPath}`, parameterValue);
    return fs.readdirSync(fullPath);
};

const startProcess = (parameterValue) => {
    const BASE_PATH = path.resolve(parameterValue.url);

    const bannerFolders = getBannerFolders(BASE_PATH);

    const bannerData = bannerFolders.map((element) => {
        const assets = getAssets(element, BASE_PATH, parameterValue.img);
        return {
            name: element,
            assets,
        };
    });

    return bannerData;
};

// pages/api/get_banner_data.js
export default function handler(req, res) {
    try {
        let parameterValue = req.query.parametro;
        parameterValue = JSON.parse(decodeURIComponent(parameterValue));
        // Realiza el procesamiento necesario con parameterValue y obtén el resultado
        const output = startProcess(parameterValue);
        return res.status(200).json({ result: output });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
}
