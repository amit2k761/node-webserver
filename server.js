const express = require('express'); 
const hbs = require('hbs');
var app = express();
const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine',hbs);

app.use((req,resp,next)=>{
var now= new Date().toString();

console.log(`${now} :${req.method} ${req.url}`);

next();
});
// app.use((req,resp,next)=>{
// resp.render('maintenace.hbs');
// });
app.use(express.static(__dirname + '/public'));
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});
// hbs.registerHelper('screamit',(text)=>{
// return text.toUpperCase();
// })
app.get('/',(req,resp)=>{
//resp.send(`<h1><em> hey what up </em> </h1>`);
// express notices object and converts into json and sent into json
resp.render('home.hbs',{
    name : "amit",
    likes:['biking', 'eating'],
    pagetitle : 'Home page',
    
});
});
app.get('/about',(req, resp)=>{
resp.render('about.hbs',{
    pagetitle : 'about page',

});
});
app.get('/bad',(req,resp)=>{
    resp.send({
        error : 'unable to send resp'
    })
})
// bind the appl to a port on machine
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});




