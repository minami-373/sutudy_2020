// url https://yukicoder.me/problems/no/374
let table = Number(process.argv[2]);
let tableCoin = Number(process.argv[3]);

if (table < tableCoin){
    console.log("K");
    return;
}

let coin = 0;
while (table > tableCoin){
    tableCoin = table + tableCoin;
    coin++;
}

if (coin % 2 == 0){
    console.log("K");
} else{
    console.log("S");
}