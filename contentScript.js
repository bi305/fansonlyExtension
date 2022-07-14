const siteImages = document.getElementsByTagName("img");
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.message === "checked") {
		for (let i = 0; i < siteImages.length; i++) {
			siteImages[i].style.filter = "blur(50px)";
		}
	} else if (request.message === "unchecked") {
		for (let i = 0; i < siteImages.length; i++) {
			siteImages[i].style.filter = "blur(0px)";
		}
	}
	sendResponse({ status: true });
	return true;
});

fetch(chrome.runtime.getURL("/sidebar.html"))
	.then((r) => r.text())
	.then((html) => {
		var data = document.getElementsByClassName("container m-main-container");
		var script = document.getElementsByClassName("v-text-field__slot");
		const img = document.createElement("img");
		img.src =
			"https://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/256/messages-icon.png";
		img.style.width = "25px";
		img.style.height = "25px";
		img.style.marginRight = "5px";
		img.style.cursor = "pointer";
		setTimeout(() => {
			data[0].insertAdjacentHTML("beforeend", html);
		}, 3000);
		// not using innerHTML as it would break js event listeners of the page
	});

fetch(chrome.runtime.getURL("/modal.html"))
	.then((r) => r.text())
	.then((html) => {
		var script = document.getElementsByClassName("v-text-field__slot");
		const img = document.createElement("img");
		img.src =
			"https://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/256/messages-icon.png";
		img.style.width = "25px";
		img.style.height = "25px";
		img.style.marginRight = "5px";
		img.style.cursor = "pointer";

		setTimeout(() => {
			for (scr of script) {
				scr.appendChild(img);
				scr.insertAdjacentHTML("beforeend", html);

				var modal = document.querySelector(".extension_modal");
				var modal_close = document.querySelector(".extension_close_button");
				modal_close.addEventListener("click", () => {
					modal.classList.toggle("extension_show_modal");
				});
				img.addEventListener("click", () => {
					modal.classList.toggle("extension_show_modal");
				});

				var api = document.querySelector(".extension_modal_content");

				fetch("https://jsonplaceholder.typicode.com/users")
					.then((response) => response.json())
					.then((data) => {
						data.forEach((item) => {
							let li = document.createElement("li");
							li.style.listStyleType = "none";
							li.style.cursor = "pointer";
							li.innerText = item.name;
							api.appendChild(li);
							li.addEventListener("click", () => {
								script[0].children[0].innerText = item.name;
							});
						});
					});
			}
		}, 3000);
		// not using innerHTML as it would break js event listeners of the page
	});

// (() => {
// 	setTimeout(() => {
// 		const DomManu = () => {
// 			// var data = document.getElementsByTagName("main");
// 			// var data1 = data[0];
// 			// data1.appendChild(div);

// 			const test = document.getElementsByClassName(
// 				"container m-main-container"
// 			);
// 			// const test = document.getElementsByTagName("main");
// 			var div = document.createElement("div");
// 			div.className = "users_start";
// 			div.innerHTML = `
//             <div>
//             <table>

//             <tr>
//               <td>Subcribed:</td>
//               <td>4 months</td>

//             </tr>
//             <tr>
//               <td>Total Spent:</td>
//               <td>$0</td>

//             </tr>
//             <tr>
//               <td>Renew:</td>
//               <td>Off</td>

//             </tr>
//             <tr>
//               <td>Buy Rate:</td>
//               <td>0/3</td>

//             </tr>
//             <tr>
//               <td>PPV Timeline</td>
//               <td>Open</td>

//             </tr>

//           </table>
//             </div>`;
// 			test[0].appendChild(div);
// 		};
// 		DomManu();
// 	}, 4000);
// })();
// g-input__wrapper m-no-border m-placeholder-full-lgray m-reset-bottom-gap b-make-post__text-input m-empty