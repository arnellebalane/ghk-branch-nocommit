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
            return readline.keyInYN('You are not supposed to commit in this '
                + 'branch. Proceed?');
        }
    }
    return true;
}


exports['pre-commit'] = precommit;
