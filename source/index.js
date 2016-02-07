import 'babel-polyfill';
import shell from 'shelljs';
import readline from 'readline-sync';


function precommit(config = {}) {
    let branches = config.branches || [];
    let command = shell.exec('git rev-parse --abbrev-ref HEAD',
        { silent: true });
    if (!command.code) {
        let currentBranch = command.output.trim();
        let allowed = !branches.includes(currentBranch);
        if (!allowed) {
            let proceed = readline.keyInYN(`Attempting to commit in branch `
                + `"${currentBranch}". Proceed?`);
            if (!proceed) {
                return `Aborting commit in branch "${currentBranch}"`;
            }
        }
    }
    return true;
}


exports['pre-commit'] = precommit;
