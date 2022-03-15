const path = require('path');
const { exec } = require('child_process');

const runWorkspaceScript = (workspace, script) => {
  exec(`yarn workspace ${workspace} ${script}`, (err, stdout, stderr) => {
    if (err) {
      console.log(stderr);
      return;
    }
    console.log(`Running ${workspace} ${script} finished`);
  });
};

const examplePackagePath = '../packages/adminjs-example-app/package.json';
const package = require(path.join(__dirname, examplePackagePath));

const dependencies = Object.keys(package.dependencies);
const adminDependencies = dependencies.filter((d) => {
  return /@adminjs/.test(d);
});

adminDependencies.forEach((workspace) => {
  runWorkspaceScript(workspace, 'build');
});
