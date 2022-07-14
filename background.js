// chrome.runtime.onInstalled.addListener(onInstalled);

// let OF_SIGN_PARAMS = {
// 	app_token: "33d57ade8c02dbc5a333db99ff9ae26a",
// 	checksum_constant: 352,
// 	checksum_indexes: [
// 		26, 4, 8, 13, 37, 33, 25, 37, 31, 2, 9, 7, 6, 2, 18, 15, 32, 34, 12, 33, 14,
// 		15, 37, 38, 12, 14, 28, 5, 3, 2, 20, 39,
// 	],
// 	error_code: 0,
// 	format: "4013:{}:{:x}:62c82a2f",
// 	message: "",
// 	remove_headers: ["user-id"],
// 	static_param: "5crbi8oleLvrvO3VO4XM5hehABlZm495",
// 	timestamp: 1657326194888,
// };
// var account = 2;
// // let myCookies = [
// //     {
// //         "domain": ".onlyfans.com",
// //         "expirationDate": 1744098823.110746,
// //         "hostOnly": false,
// //         "httpOnly": true,
// //         "name": "csrf",
// //         "path": "/",
// //         "sameSite": "unspecified",
// //         "secure": true,
// //         "session": false,
// //         "storeId": "0",
// //         "value": "6niB8xuC66b22187c764b45354d79a6288f1b30c"
// //     },
// //     {
// //         "domain": ".onlyfans.com",
// //         "expirationDate": 1689234824,
// //         "hostOnly": false,
// //         "httpOnly": false,
// //         "name": "ref_src",
// //         "path": "/",
// //         "sameSite": "unspecified",
// //         "secure": false,
// //         "session": false,
// //         "storeId": "0",
// //         "value": ""
// //     },
// //     {
// //         "domain": ".onlyfans.com",
// //         "expirationDate": 1689234822,
// //         "hostOnly": false,
// //         "httpOnly": false,
// //         "name": "fp",
// //         "path": "/",
// //         "sameSite": "unspecified",
// //         "secure": false,
// //         "session": false,
// //         "storeId": "0",
// //         "value": "9f8510a8388341964d12c981afb3d509"
// //     },
// //     {
// //         "domain": ".onlyfans.com",
// //         "expirationDate": 1757697519.966601,
// //         "hostOnly": false,
// //         "httpOnly": true,
// //         "name": "auth_id",
// //         "path": "/",
// //         "sameSite": "unspecified",
// //         "secure": true,
// //         "session": false,
// //         "storeId": "0",
// //         "value": "133472355"
// //     },
// //     {
// //         "domain": "onlyfans.com",
// //         "expirationDate": 1657698886.568,
// //         "hostOnly": true,
// //         "httpOnly": false,
// //         "name": "sc-consts",
// //         "path": "/",
// //         "sameSite": "unspecified",
// //         "secure": true,
// //         "session": false,
// //         "storeId": "0",
// //         "value": "x"
// //     },
// //     {
// //         "domain": "onlyfans.com",
// //         "expirationDate": 1657699366.569,
// //         "hostOnly": true,
// //         "httpOnly": false,
// //         "name": "sc-online",
// //         "path": "/",
// //         "sameSite": "unspecified",
// //         "secure": true,
// //         "session": false,
// //         "storeId": "0",
// //         "value": "x"
// //     },
// //     {
// //         "domain": ".onlyfans.com",
// //         "expirationDate": 1658562799.181243,
// //         "hostOnly": false,
// //         "httpOnly": true,
// //         "name": "sess",
// //         "path": "/",
// //         "sameSite": "unspecified",
// //         "secure": true,
// //         "session": false,
// //         "storeId": "0",
// //         "value": "ffpvsjfe41g8jd7cromp7devoe"
// //     },
// //     {
// //         "domain": ".onlyfans.com",
// //         "expirationDate": 1744098824.775406,
// //         "hostOnly": false,
// //         "httpOnly": false,
// //         "name": "st",
// //         "path": "/",
// //         "sameSite": "unspecified",
// //         "secure": true,
// //         "session": false,
// //         "storeId": "0",
// //         "value": "2a68510cefe7223d897ce6b3c1105f909f1c7154062f34a5049bd01b9cc5def1"
// //     }
// // ];
// async function onInstalled(details) {
// 	console.log("🎉 Installed: ", details);
// 	chrome.storage.local.set({ OF_SIGN_PARAMS: OF_SIGN_PARAMS }, function () {
// 		console.log("OF_SIGN_PARAMS > ✅ Set");
// 	});
// 	// chrome.cookies.set({ url: "https://onlyfans.com", name: "csrf", value: "6niB8xuC66b22187c764b45354d79a6288f1b30c", domain: ".onlyfans.com", path: "/" });
// 	// myCookies.forEach((ele) => {
// 	//     console.log(`chrome.cookies.set({ url: "https://onlyfans.com", name: "${ele.name}", value: "${ele.value}", domain: "${ele.domain}", path: "${ele.path}", httpOnly: ${ele.httpOnly}, secure: ${ele.secure}, expirationDate: ${ele.expirationDate}} });`);
// 	// });
// 	// chrome.cookies.set({ url: "https://onlyfans.com", name: "auth_id", httpOnly: true, value: "147965100", domain: ".onlyfans.com", path: "/", secure: true, expirationDate: 1757404699.39577 });
// 	// chrome.cookies.set({ url: "https://onlyfans.com", name: "csrf", httpOnly: true, value: "6niB8xuC66b22187c764b45354d79a6288f1b30c", domain: ".onlyfans.com", path: "/", secure: true, expirationDate: 1743808865.354953 });
// 	// chrome.cookies.set({ url: "https://onlyfans.com", name: "fp", value: "1c9f66facebcf230ef0a0ea75ed82d5a", domain: ".onlyfans.com", path: "/", secure: false, expirationDate: 1688944865 });
// 	// chrome.cookies.set({ url: "https://onlyfans.com", name: "ref_src", value: "https%3A%2F%2Fonlyfans.com%2F%3Freturn_to%3D%252Fmy%252Fchats%252F", domain: ".onlyfans.com", path: "/", secure: false, expirationDate: 1688944866 });
// 	// chrome.cookies.set({ url: "https://onlyfans.com", name: "sess", httpOnly: true, value: "568ddejut6iv657jp5nb53ghgh", domain: ".onlyfans.com", path: "/", secure: true, expirationDate: 1658272846.803506 });
// 	// chrome.cookies.set({ url: "https://onlyfans.com", name: "st", value: "01682c4fcdec3bf07599c8d09314260daaf40c60eb3afc2cd1464a98f56db177", domain: ".onlyfans.com", path: "/", secure: true, expirationDate: 1743808867.399251 });

// 	// chrome.cookies.set({ url: "https://onlyfans.com", name: "csrf", value: "6niB8xuC66b22187c764b45354d79a6288f1b30c", domain: ".onlyfans.com", path: "/", httpOnly: true, secure: true, expirationDate: 1744098823.110746 });
// 	// chrome.cookies.set({ url: "https://onlyfans.com", name: "ref_src", value: "", domain: ".onlyfans.com", path: "/", httpOnly: false, secure: false, expirationDate: 1689234824 });
// 	// chrome.cookies.set({ url: "https://onlyfans.com", name: "fp", value: "9f8510a8388341964d12c981afb3d509", domain: ".onlyfans.com", path: "/", httpOnly: false, secure: false, expirationDate: 1689234822 });
// 	// chrome.cookies.set({ url: "https://onlyfans.com", name: "auth_id", value: "133472355", domain: ".onlyfans.com", path: "/", httpOnly: true, secure: true, expirationDate: 1757697519.966601 });
// 	// chrome.cookies.set({ url: "https://onlyfans.com", name: "sc-consts", value: "x", domain: "onlyfans.com", path: "/", httpOnly: false, secure: true, expirationDate: 1657698886.568 });
// 	// chrome.cookies.set({ url: "https://onlyfans.com", name: "sc-online", value: "x", domain: "onlyfans.com", path: "/", httpOnly: false, secure: true, expirationDate: 1657699366.569 });
// 	// chrome.cookies.set({ url: "https://onlyfans.com", name: "sess", value: "ffpvsjfe41g8jd7cromp7devoe", domain: ".onlyfans.com", path: "/", httpOnly: true, secure: true, expirationDate: 1658562799.181243 });
// 	// chrome.cookies.set({ url: "https://onlyfans.com", name: "st", value: "2a68510cefe7223d897ce6b3c1105f909f1c7154062f34a5049bd01b9cc5def1", domain: ".onlyfans.com", path: "/", httpOnly: false, secure: true, expirationDate: 1744098824.775406 });
// 	// if (account === 1) {
// 	//     // bcTokenSha: b4fe83479edd96711acfedea182a1004ee6d5bf0
// 	chrome.cookies.set({ url: "https://onlyfans.com", name: "csrf", value: "6niB8xuC66b22187c764b45354d79a6288f1b30c", domain: ".onlyfans.com", path: "/", httpOnly: true, secure: true, expirationDate: 1744101503.065539 });
// 	chrome.cookies.set({ url: "https://onlyfans.com", name: "ref_src", value: "", domain: ".onlyfans.com", path: "/", httpOnly: false, secure: false, expirationDate: 1689235463 });
// 	chrome.cookies.set({ url: "https://onlyfans.com", name: "fp", value: "9f8510a8388341964d12c981afb3d509", domain: ".onlyfans.com", path: "/", httpOnly: false, secure: false, expirationDate: 1689235462 });
// 	chrome.cookies.set({ url: "https://onlyfans.com", name: "sess", value: "b4m844htb6smgonp0qoqed9s0d", domain: ".onlyfans.com", path: "/", httpOnly: true, secure: true, expirationDate: 1658565503.06539 });
// 	chrome.cookies.set({ url: "https://onlyfans.com", name: "auth_id", value: "244719680", domain: ".onlyfans.com", path: "/", httpOnly: true, secure: true, expirationDate: 1757701502.509766 });
// 	chrome.cookies.set({ url: "https://onlyfans.com", name: "st", value: "71bcf2a322c31e701a91e861b66a200818e9dc6e84d4656b21f9b9959c894c74", domain: ".onlyfans.com", path: "/", httpOnly: false, secure: true, expirationDate: 1744101504.39563 });
// 	// }

// 	// bcTokenSha: b4fe83479edd96711acfedea182a1004ee6d5bf0
// 	// chrome.cookies.set({
// 	// 	url: "https://onlyfans.com",
// 	// 	name: "fp",
// 	// 	value: "9f8510a8388341964d12c981afb3d509",
// 	// 	domain: ".onlyfans.com",
// 	// 	path: "/",
// 	// 	httpOnly: false,
// 	// 	secure: false,
// 	// 	expirationDate: 1689235380,
// 	// });
// 	// chrome.cookies.set({
// 	// 	url: "https://onlyfans.com",
// 	// 	name: "ref_src",
// 	// 	value: "",
// 	// 	domain: ".onlyfans.com",
// 	// 	path: "/",
// 	// 	httpOnly: false,
// 	// 	secure: false,
// 	// 	expirationDate: 1689235380,
// 	// });
// 	// chrome.cookies.set({
// 	// 	url: "https://onlyfans.com",
// 	// 	name: "cookiesAccepted",
// 	// 	value: "true",
// 	// 	domain: ".onlyfans.com",
// 	// 	path: "/",
// 	// 	httpOnly: false,
// 	// 	secure: false,
// 	// 	expirationDate: 1752393568,
// 	// });
// 	// chrome.cookies.set({
// 	// 	url: "https://onlyfans.com",
// 	// 	name: "csrf",
// 	// 	value: "6niB8xuC66b22187c764b45354d79a6288f1b30c",
// 	// 	domain: ".onlyfans.com",
// 	// 	path: "/",
// 	// 	httpOnly: true,
// 	// 	secure: true,
// 	// 	expirationDate: 1744101762.273921,
// 	// });
// 	// chrome.cookies.set({
// 	// 	url: "https://onlyfans.com",
// 	// 	name: "sess",
// 	// 	value: "ffse5q2lf6qoutj0jcdunp7oic",
// 	// 	domain: ".onlyfans.com",
// 	// 	path: "/",
// 	// 	httpOnly: true,
// 	// 	secure: true,
// 	// 	expirationDate: 1658565761.814049,
// 	// });
// 	// chrome.cookies.set({
// 	// 	url: "https://onlyfans.com",
// 	// 	name: "auth_id",
// 	// 	value: "147965100",
// 	// 	domain: ".onlyfans.com",
// 	// 	path: "/",
// 	// 	httpOnly: true,
// 	// 	secure: true,
// 	// 	expirationDate: 1757701761.814135,
// 	// });
// 	// chrome.cookies.set({
// 	// 	url: "https://onlyfans.com",
// 	// 	name: "st",
// 	// 	value: "8d2c091e59588957b18ca7a2378af8b4080c2b125c0e556d15185b927179c691",
// 	// 	domain: ".onlyfans.com",
// 	// 	path: "/",
// 	// 	httpOnly: false,
// 	// 	secure: true,
// 	// 	expirationDate: 1744101763.457435,
// 	// });

// 	// chrome.cookies.getAll({ domain: ".onlyfans.com" }).then((val) => {
// 	//     val.forEach((ele) => {
// 	//         console.log(`chrome.cookies.set({ url: "https://onlyfans.com", name: "${ele.name}", value: "${ele.value}", domain: "${ele.domain}", path: "${ele.path}", httpOnly: ${ele.httpOnly}, secure: ${ele.secure}, expirationDate: ${ele.expirationDate}});`);
// 	//     });
// 	// })
// }
