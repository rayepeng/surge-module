// 改会员的
let body = $response.body;
let json_data = JSON.parse(body);
console.log(json_data["article"]["isFree"]);
console.log(json_data["article"]["mag"]["isfree"]);
console.log(json_data["recommentMag"]["isfree"]);
json_data["article"]["isFree"] = 1;
json_data["article"]["mag"]["isfree"] = 1;
json_data["recommentMag"]["isfree"] = 1;
$done({
body: JSON.stringify(json_data)
});