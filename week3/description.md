in this week we build a search page which takes the user input and use it in sql without any restrictions<br>
action="/search" => ths is the part which connect it to js. it defines the path at the end f which js is going to recieve the request.(i-e app.post("/search",...))<br>
method="POST"=>there are two types of methods to send request one shows the data it is usaully for general information and other is POST used for private information, it encrypt the information for security.<br>
<br>Map to OWASP<br><br>
res.sendFile(__dirname + "/index.html"); => line 16 => A01: Broken Access Control => by changing url user can access the pages they should not.<br>
app.post("/search",...) => line 19 => A01: Broken Access Control => no restriction on who can access data.<br>
 const query = `SELECT * FROM users WHERE username = '${searchValue}  => line 21 => A03:2021 – Injection => sql injection isnt restricted.<br>

 if (err) throw err;  => line 24 => A05:2021 – Security Misconfiguration => error is being shown to user which can revel about data base.<br>
 res.json(results); => line 25 => A02 — Cryptographic Failures =>result is directly shown to user(raw sql).<br>