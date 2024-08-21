import fs from 'fs';
import path from 'path';

export const readDatabase = (filePath) => {
    return new Promise((resolve, reject) => {
        const absolutePath = path.resolve(filePath);
        fs.readFile(absolutePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            const lines = data.split('\n').filter(Boolean);
            const students = {};
            lines.forEach(line => {
                const [firstname, field] = line.split(',');
                if (!students[field]) {
                    students[field] = [];
                }
                students[field].push(firstname);
            });
            resolve(students);
        });
    });
};
