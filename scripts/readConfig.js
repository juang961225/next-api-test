// import * as fs from "node:fs";
// import * as path from "node:path";

const fs = require ("fs");
const path = require ("path");

const readFile = (path) => fs.readFileSync(path, {encoding: "utf8"});

const getConfig = (path) => {
    const rawData = readFile(path);
    const formateData = JSON.parse(rawData);
    return formateData;
}

const test = () => {
    const content = getConfig('public/banner_maker/audi_prueba-ff3__300x600/config.json');

    console.log(content);
}

test();