// 改会员的
let body = $response.body;
let json_data = JSON.parse(body);
console.log(json_data["data"]["isfree"]);
json_data["data"]["isfree"] = 1;
$done({
body: JSON.stringify(json_data)
});