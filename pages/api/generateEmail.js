


const startProcess = () => {
    return true;
}

export default function handler(_req, res) {
    try {
        const output = startProcess();
        return res.status(200).json({"result": output});
    } catch (err) {
        console.error(err);
        return res.status(417).json(err);
    }
}
