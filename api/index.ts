import express from 'express';

    const app = express();
    const port = 3001;

    app.use(express.json());

    app.get('/api/test', (req, res) => {
      res.send('Hello from GET API');
    });

    app.post('/api/postest', (req, res) => {
      res.send(`Received POST data: ${JSON.stringify(req.body)}`);
    });

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
