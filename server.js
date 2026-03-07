const app = require('./index');
const port = 3000;

app.listen(port, () => {
    console.log(`Calculatrice running on port ${port}`);
});