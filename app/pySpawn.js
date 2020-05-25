import path from "path";
import shell from "shelljs";

const scriptDir = path.join(__dirname, "../..");

const options = {
  async: true,
  silent: true
};

const commands = {
  camera: `python ${scriptDir}/camera.py`,
  init: `python ${scriptDir}/init.py`
};

// Recieves predicted direction from camera.py and run movement script
const cameraPy = res => {
  const child = exec(commands.camera);
  child.stdout.on("data", direction => movePy(direction, res));
};

// Excecute turtlebot movement then resolves HTTP request
const movePy = (direction, res) => {
  const child = exec(`${commands.init} ${direction}`);
  child.stdout.on("data", _ => res.json({ direction }));
};

const exec = cmd => shell.exec(cmd, options);

export default cameraPy;
