const { writeFileSync } = require("node:fs");
const { homedir } = require("node:os");
const { join } = require("node:path");

function UserConfig() {
    function InsertConfig(config) {
        console.log(config)
        writeFileSync(
            join(homedir(), 'AppData\\Roaming\\PNGtubeSettings\\settings.json'),
            JSON.stringify(config),
            { encoding: "utf-8" }
        );
    };
    return {
        InsertConfig
    }
};

module.exports = {
    UserConfig
}