import path from "path";
import shell from "shelljs";

const scriptDir = path.join(__dirname, "../..");

const options = {
  async: true,
  silent: true
};

const commands = {
  predict: `python ${scriptDir}/predict.py`,
  init: `python ${scriptDir}/init.py`
};

// Recieves predicted direction from predict.py and run movement script
const predictPy = res => {
  const child = exec(commands.predict);
  child.stdout.on("data", direction => movePy(direction, res));
};

// Excecute turtlebot movement then resolves HTTP request
const movePy = (direction, res) => {
  const child = exec(`${commands.init} ${direction}`);
  child.stdout.on("data", _ => res.json({ direction }));
};

const exec = cmd => shell.exec(cmd, options);

export default predictPy;
