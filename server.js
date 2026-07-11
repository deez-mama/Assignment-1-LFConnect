const http = require ("http") //Importing http module into this file'

const server = http.createServer((req,res)=>{
    let body = ""

    if(req.method==="POST" && req.url==="/hobbies"){
        req.on("data",(chunk)=>{
            body += chunk;
        });

        req.on("end",()=>{
            const hobbyData = JSON.parse(body);
            console.log(hobbyData);
        });
        
        const hobbyDataString = JSON.stringify(hobbyData);
        res.end(hobbyDataString);
    }
});

server.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
}); //Start listening to requests on port 3000