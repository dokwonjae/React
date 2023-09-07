// 1251
// let a = "";
// for (let i = 1; i <= 100; i++) {
//   a += " " + i;
// }
// alert(a)

// 1252
// let a = prompt()
// let nul = "";
// for (let i = 1; i <= a; i++) {
//   nul += i + " " ;
// }
// alert(nul)

// 1253
// let a = prompt().split(" ")
// let nul =""
// if(a[0]<a[1]){
// for(let i=a[0];i<=a[1];i++){
//     nul += i + " "
// }
// }else{
//     for(let i=a[1];i<=a[0];i++){
//     nul += i + " "
//     }
// }
// alert(nul)

// 1254
// let a = prompt().split(" ")
// let b =a[0].charCodeAt(0)
// let c =a[1].charCodeAt(0)
// let nul =""
// for (let i = b; i <= c; i++) {
//   nul += String.fromCodePoint(i) + " " ;
// }
// alert(nul)

// 1255
// let a = prompt().split(" ")
// let b = a.map(Number)
// let nul = ""
// for(let i =b[0];i<=b[1];i+=0.01){
//     nul += i.toFixed(2) +" "
// }
// alert(nul)

// 1256
// let a = Number(prompt());
// let nul = ""
// for(let i =1;i<=a;i++){
//     nul += "*"
// }
// alert(nul)

// 1257
// let a = prompt().split(" ").map(Number)
// let nul =""
// for(a[0];a[0]<=a[1];a[0]++){
//     if(a[0]%2==1){
//     nul += a[0] + " "
//     }
// }
// alert(nul)

// 1258
// let a = prompt()
// let sum = 0;
// for(let i =1; i<=a; i++){
//     sum += i;
// }
// alert(sum)

// 1259
// let a = Number(prompt())
// let sum = 0;
// for(let i = 1;i<=a;i++){
//     if(i%2==0){
//         sum+=i;
//     }
// }
// alert(sum)

// 1260
// let a = prompt().split(" ").map(Number)
// let sum = 0;
// for(let i = a[0];i<=a[1];i++){
//     if(i%3==0){
//         sum+=i;
//     }
// }
// alert(sum)

// 1261
// let a = prompt().split(" ").map(Number)
// let nul = ""
// for(let i = 0; i<a.length ;i++){
// if(a[i]%5==0){
//     nul +=a[i]
//     break
// }
// }
// alert(nul)

// 1265
// let a = Number(prompt())
// let nul = ""
// for(let i=1;i<10;i++){
//     nul += 3 +"*"+i+"="+3*i + "\n"
// }
// alert(nul)

// 1266
// let a = Number(prompt());
// let b = prompt().split(" ").map(Number)
// let sum =0;
// for(let i=0;i<a;i++){
// sum += b[i]
// }
// alert(sum)

// 1267
// let a = Number(prompt());
// let b = prompt().split(" ").map(Number)
// let sum =0;
// for(let i=0;i<a;i++){
//     if(b[i]%5==0){
//         sum += b[i]
//     }
// }
// alert(sum)

// 1268
// let a = Number(prompt());
// let b = prompt().split(" ").map(Number)
// let sum =0;
// for(let i=0;i<a;i++){
//     if(b[i]%2==1){
//         sum ++
//     }
// }
// alert(sum)

// 1269
// let num = prompt().split(" ").map(Number)
// let a = num[0]
// let b = num[1]
// let c = num[2]
// let n = num[3]
// let sum = a
// for(let i=2; i<=n; i++){
// sum = sum * b + c
// }
// alert(sum)

// 1270
// let a = Number(prompt())
// let cnt=0
// for(let i=1; i<=a;i++){
//     if(i%10==1){
//     cnt++
//     }
// }
// alert(cnt)

// 1271
// let a = Number(prompt());
// let b = prompt().split(" ").map(Number)
// let max =0;
// for(let i=0;i<a;i++){
//     if(max<b[i]){
//         max = b[i]
//     }
// }
// alert(max)

// 1272
// let a = prompt().split(" ").map(Number);
// let sum = 0;
// let start = 1;
// let max = Math.max(a[0], a[1]);
// let min = Math.min(a[0], a[1]);

// for (let i = 0; i <= max; i++) {
//   if (i % 2 == 0) {
//     a[i] = start++
//   } else {
//     a[i]= a[i-1] * 10;
//   }
//   sum = a[min-1]+a[max-1]
// }
// alert(sum);

// 1273

// let a = Number(prompt())
// let nul =""
// for(let i=1;i<=a;i++){
//     if(a%i==0){
//         nul+=i+" "
//     }
// }
// alert(nul)

// 1274
// let a = Number(prompt())
// let cnt = 0
// for(let i=1;i<=a;i++){
//     if(a%i==0){
//         cnt++
//     }
// }
// if(cnt==2){
//     alert("prime")
// }else{
//     alert("not prime")
// }
// alert(nul)

// 1275
// let a = prompt().split(" ").map(Number)
// alert(Math.pow(a[0],a[1]))

// 1276
// let a = Number(prompt())
// let n = 1
// for(let i=a;i>0;i--){
//     n*=i
// }
// alert(n)

// 1277
// let a = Number(prompt())
// let b = prompt().split(" ").map(Number)
// let nul = ""
// for(let i =0; i<a;i++){
//     if(i==0 || i==a-1 || i== (a-1)/2){
//         nul += b[i] + " "
//     }
// }
// alert(nul)

// 1278
// let a = Number(prompt())
// let cnt =0;
// if(a>0){
// while(true){
// a = parseInt(a/10)
// cnt++
// if(a==0){
// break;
// }
// }
// }
// alert(cnt)

// 1279
// let a = prompt().split(" ").map(Number)
// let sum =0
// for(let i =a[0];i<=a[1];i++){
//     if(i%2==0){
//         sum -=i
//     }else{
//         sum +=i
//     }
// }
// alert(sum)

// 1280
// let a = prompt().split(" ").map(Number);
// let sum = 0;
// let nul = "";
// for (let i = a[0]; i <= a[1]; i++) {
//   if (i % 2 == 0) {
//     nul += "+" + i
//     sum -= i;
//   } else {
//     nul += "-" + i
//     sum += i;
//   }
// }
// alert(nul+"=" + sum);

// 1281
// let a = prompt().split(" ").map(Number);
// let sum = 0;
// let nul = "";
// for (let i = a[0]; i <= a[1]; i++) {
//   if (i % 2 == 0) {
//     nul += "-" + i
//     sum -= i;
//   } else {
//     nul += "+" + i
//     sum += i;
//   }
// }
// alert(nul+"=" + sum);

// 1282
// let a = prompt().split(" ").map(Number);
// let sum = 0;
// let nul = "";
// for (let i = a[0]; i <= a[1]; i++) {
//   if (i % 2 == 1 && nul == "") {
//     nul += i;
//     sum += i;
//   } else if (i % 2 == 0) {
//     nul += "-" + i;
//     sum -= i;
//   } else {
//     nul += "+" + i;
//     sum += i;
//   }
// }
// alert(nul + "=" + sum);

// 1283
// let a = prompt().split("\n")
// let b = a[2].split(" ")
// let sum = a[0]
// for(i=0;i<a[1];i++){
// sum = (sum/100) * b[i]
// }
// alert(sum-a[0])

// 1284
// let a = Number(prompt());
// let cnt = 0;
// let nul = "";
// for (let i = 1; i <= a; i++) {
//     cnt = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j == 0) {
//       cnt++;
//     }
//   }
//   if (cnt == 2) {
//     nul += i +" "
//   }
// }
// let b = nul.split(" ").map(Number)
// let min = b[0]
// let bl = b.length
// let max = b[b.length-1]
// let nul2 =""
// for(let i = 0;i<bl;i++){
// for(let j = 0;j<=i;j++){
//     if(b[i]*b[j]==a){
//         nul2 += b[j]+" "+b[i]
//     }
// }
// }
// alert(nul2)

// 1286
// let a = prompt().split("\n").map(Number)
// let min= a[0]
// let max = a[0]
// for(let i =0; i<a.length;i++){
//     if(min>a[i]){
//         min = a[i]
//     }else if(max<a[i]){
//         max = a[i]
//     }
// }
// alert(max+"\n"+min)


// 1294
// let str = prompt("시저의 암호 입력");
// let str2 = str;
// let str3 = "";
// let str4 = 0;
// for (let i = 0; i < str.length; i++) {
//   str4 = str[i].charCodeAt(0);
//   if (str4 == 32) {
//     str3 += String.fromCharCode(str4);
//   }else{
//     str3 += String.fromCharCode(str4 +3);
//   }
// }
// console.log(str3);

// 1295
// let str = prompt("문장 입력");
// let result = "";
// let char;
// for(let i=0; i<str.length; i++){
//     if(str[i] === str[i].toUpperCase()){    
//         result = result + str[i].toLowerCase()
//     }
//     else if(str[i] === str[i].toLowerCase()){
//         result = result + str[i].toUpperCase()
//     }
// }
// console.log(result)
// 1675
// let str = prompt("시저의 암호 입력");
// let str2 = str;
// let str3 = "";
// let str4 = 0;
// for (let i = 0; i < str.length; i++) {
//   str4 = str[i].charCodeAt(0);
//   if (str4 == 32) {
//     str3 += String.fromCharCode(str4);
//   }else{
//     str3 += String.fromCharCode(str4 -3);
//   }
// }
// console.log(str3);