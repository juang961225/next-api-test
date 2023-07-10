
const startProcess = () => {



    return 'banner';
}

export default function handler(req, res) {
    console.log(req.body);
    try {
        const output = startProcess();
        return res.status(200).json({"result": output});
    } catch (err) {
        console.error(err);
        return res.status(417).json(err);
    }
}
