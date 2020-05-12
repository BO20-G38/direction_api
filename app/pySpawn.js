import child_process from "child_process";

const spawn = child_process.spawn;

export default () => spawn("python", ["../../camera.py"]);
