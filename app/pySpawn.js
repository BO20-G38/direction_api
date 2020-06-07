import path from "path";
import shell from "shelljs";

const scriptDir = path.join(__dirname, "../..");

const options = {
  async: true,
  silent: true
};

const initCmd = `python ${scriptDir}/init.py`;
const exec = cmd => shell.exec(cmd, options);

// Excecute turtlebot movement
export const movePy = direction => exec(`${initCmd} ${direction}`);
