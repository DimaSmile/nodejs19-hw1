import { stdin, stdout } from 'process';

stdin.on('data', (data) => {
    stdout.write(data.toString().split('').reverse().join(''));
});