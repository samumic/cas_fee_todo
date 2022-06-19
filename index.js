import express from 'express';

const APP = express();
const PORT = 3000;

APP.use(express.static('source/public'));

APP.listen(PORT, () => {
    console.log(`cas-fee-todo APP listening at http://localhost:${PORT}`);
});
