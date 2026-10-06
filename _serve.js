const http=require('http'),fs=require('fs'),path=require('path');
const root=process.cwd();
const TYPES={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.md':'text/markdown; charset=utf-8','.json':'application/json'};
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]);
  if(p==='/')p='/index.html';
  const f=path.join(root,p);
  if(!f.startsWith(root)){res.writeHead(403);return res.end();}
  fs.readFile(f,(e,d)=>{
    if(e){res.writeHead(404);return res.end('404');}
    res.writeHead(200,{'Content-Type':TYPES[path.extname(f)]||'application/octet-stream'});
    res.end(d);
  });
}).listen(8799,()=>console.log('http://localhost:8799'));
