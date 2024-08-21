import { readDatabase } from '../utils';

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const data = await readDatabase('database.csv');
            const fields = Object.keys(data).sort();
            let responseText = 'This is the list of our students\n';
            fields.forEach((field) => {
                responseText += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
            });
            res.status(200).send(responseText.trim());
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const data = await readDatabase('database.csv');
            if (!data[major]) {
                res.status(500).send('Major not found');
                return;
            }
            res.status(200).send(`List: ${data[major].join(', ')}`);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

export default StudentsController;
