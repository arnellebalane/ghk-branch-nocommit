import 'babel-polyfill';
import shell from 'shelljs';


function precommit(config = {}) {
    let branches = config.branches || [];
    let command = shell.exec('git rev-parse --abbrev-ref HEAD',
        { silent: true });
    if (!command.code) {
        let currentBranch = command.output.trim();
        return !branches.includes(currentBranch);
    }
    return true;
}


exports['pre-commit'] = precommit;
