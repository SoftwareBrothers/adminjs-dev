const path = require('path');
const { exec } = require('child_process');

function runWorkspaceScript(workspace, script) {
  exec(`yarn workspace ${workspace} ${script}`, (err, stdout, stderr) => {
    if (err) {
      console.log(stderr);
      return;
    }
    console.log(`Running ${workspace} ${script} finished`);
  });
}

const examplePackagePath = '../adminjs-example-app/package.json';
const { dependencies } = require(path.join(__dirname, examplePackagePath));

Object.keys(dependencies).forEach((workspace) =>
  /@adminjs/.test(workspace) ? runWorkspaceScript(workspace, 'build') : null
);
