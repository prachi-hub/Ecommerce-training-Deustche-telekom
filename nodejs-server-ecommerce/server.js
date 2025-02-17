const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

const filePath = path.join(__dirname, 'signup_data.json');

app.post('/signup', (req, res) => {
    const signupData = req.body;

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                const initialData = [];
                saveDataToFile(initialData, signupData, res);
            } else {
                return res.status(500).json({ message: 'Error reading file' });
            }
        } else {
            const existingData = JSON.parse(data);
            existingData.push(signupData);

            saveDataToFile(existingData, null, res);
        }
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    fs.readFile(path.join(__dirname, 'signup_data.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading signup data' });
        }

        const users = JSON.parse(data);

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
        }
    });
});

function saveDataToFile(data, newSignupData, res) {
    if (newSignupData) {
        data.push(newSignupData);
    }

    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error writing to file' });
        }
        res.status(200).json({ message: 'Signup data successfully saved' });
    });
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
