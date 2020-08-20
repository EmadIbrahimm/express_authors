const express = require('express');
const port = 3000;
const app = express();

// const authors = express.authors(path.join(__dirname,));
// const routes = ['/','/authors/1/','/authors/2/','/authors/3/', '/authors/4/' ]
// app.use(routes, authors);

const authors = [
    {
        id:1,
        name: 'Lawrence Nowell',
        country: 'UK'
    },
    {
        id: 2,
        name: 'William Shakespeare',
        country: 'UK',
    },
    {
        id: 3,
        name: 'Charles Dickens',
        country: 'US'
    },
    {
        id: 4,
        name: 'Oscar Wilde',
        country: 'UK',
    }
]

app.get('/authors/:id/', (req, res)=>{

    console.log('id', req.params.id)
    // res.send('<h1>Lawrence Nowell, UK</h1>');
});



app.listen(port, ()=>{
    console.log('server started on port' + port)
})