import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use(express.json());

app.post('/', (req, res) => {
    console.log(req);

    res.json({ message: 'Data received', data: req.body });
});

app.listen(5100, () => {
    console.log('server running.... on 5100');
});