
var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var ext=['.com','.net','.us','.io']
var corte = []
var fin = []

//for para hacer el corte del noun
for (let j = 0; j < noun.length; j++) {
    corte.push( noun[j].slice(0,4))
    fin.push(noun[j].slice(4,6))
    
}

//for para concatenar 
for (let i = 0; i < pronoun.length; i++) {
    for (let z = 0; z < adj.length; z++) {
        for (let j = 0; j < noun.length; j++) {
            for (let n = 0; n < ext.length; n++) {
                console.log(pronoun[i]+adj[z]+noun[j].slice(0,4)+"."+noun[j].slice(4,6)+ext[n]);
                console.log(pronoun[i]+adj[z]+noun[j]+ext[n]);
               
                
            }
        
        }
    }
}


