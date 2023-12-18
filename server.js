import express from 'express';
const app = express();
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config();
import { nanoid } from 'nanoid';
import jobRouter from './routers/jobRouter.js';
app.use('/api/v1/jobs', jobRouter);
import notFoundMiddleware from './middleware/not-found.js';

let jobs = [
    { id: nanoid(), company: 'apple', position: 'front-end' },
    { id: nanoid(), company: 'google', position: 'back-end' },
];

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());
// NOT FOUND MIDDLEWARE
// notFoundMiddleware
// app.use('*', (req, res) => {
//     res.status(404).json({ msg: 'not found' });
// });

//ERROR MIDDLEWARE
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ msg: 'something went wrong' });
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(notFoundMiddleware)

app.get('/api/v1/jobs', (req, res) => {
    res.status(200).json({ jobs });
});

app.post('/', (req, res) => {
    console.log(req);

    res.json({ message: 'Data received', data: req.body });
});
// CREATE JOB

app.post('/api/v1/jobs', (req, res) => {
    const { company, position } = req.body;
    if (!company || !position) {
        return res.status(400).json({ msg: 'please provide company and position' });
    }
    const id = nanoid(10);
    // console.log(id);
    const job = { id, company, position };
    jobs.push(job);
    res.status(200).json({ job });
});

// GET ALL JOBS
app.get('/api/v1/jobs', (req, res) => {
    // console.log(jobss);
    res.status(200).json({ jobs });
});

// GET SINGLE JOB

app.get('/api/v1/jobs/:id', (req, res) => {
    const { id } = req.params;
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        throw new Error('no job with that id');
        return res.status(404).json({ msg: `no job with id ${id}` });
    }
    res.status(200).json({ job });
});

// EDIT JOB

app.patch('/api/v1/jobs/:id', (req, res) => {
    const { company, position } = req.body;
    if (!company || !position) {
        return res.status(400).json({ msg: 'please provide company and position' });
    }
    const { id } = req.params;
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    }

    job.company = company;
    job.position = position;
    res.status(200).json({ msg: 'job modified', job });
});

// DELETE JOB

app.delete('/api/v1/jobs/:id', (req, res) => {
    const { id } = req.params;
    const job = jobs.find((job) => job.id === id);
    if (!job) {
        return res.status(404).json({ msg: `no job with id ${id}` });
    }
    const newJobs = jobs.filter((job) => job.id !== id);
    jobs = newJobs;

    res.status(200).json({ msg: 'job deleted' });
});


const port = process.env.PORT || 5100;
app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
});