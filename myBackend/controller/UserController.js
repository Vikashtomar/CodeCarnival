
const db = require('../db/db.js');

module.exports = {
    
    get: (req, res) => {
        const userId = req.params.id;

        db.promise().query('SELECT * FROM beers WHERE id = ?', [userId])
            .then(([rows]) => {
                if (userId) {
                    if (rows.length > 0) {
                        return res.json(rows[0]); 
                    } else {
                        return res.status(404).json({ message: 'User not found' });
                    }
                }

                return db.promise().query('SELECT * FROM beers')
                    .then(([beers]) => {
                        return res.json(beers); 
                    });
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ message: 'Database query failed' });
            });
    },

    post: (req, res) => {
        const { name, age } = req.body;

        if (!name || !age) {
            return res.status(400).json({ message: 'Name and age are required' });
        }

        db.promise().query('INSERT INTO beers (name, age) VALUES (?, ?)', [name, age])
            .then(([result]) => {
                const newBeer = { id: result.insertId, name, age };
                res.status(201).json(newBeer);  // Return the created my data
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ message: 'Failed to create user' });
            });
    },

    put: (req, res) => {
        const userId = req.params.id;
        const { name, age } = req.body;

        if (!name && !age) {
            return res.status(400).json({ message: 'At least one field (name or age) is required to update' });
        }

        db.promise().query('UPDATE beers SET name = ?, age = ? WHERE id = ?', [name, age, userId])
            .then(([result]) => {
                if (result.affectedRows > 0) {
                    const updatedBeer = { id: userId, name, age };
                    return res.json(updatedBeer);  // Return the updated beer data
                } else {
                    return res.status(404).json({ message: 'User not found' });
                }
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ message: 'Failed to update user' });
            });
    },

    delete: (req, res) => {
        const userId = req.params.id;

        db.promise().query('DELETE FROM beers WHERE id = ?', [userId])
            .then(([result]) => {
                if (result.affectedRows > 0) {
                    return res.status(204).send();  
                } else {
                    return res.status(404).json({ message: 'User not found' });
                }
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ message: 'Failed to delete user' });
            });
    }
};
