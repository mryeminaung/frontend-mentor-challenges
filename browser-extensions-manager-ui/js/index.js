let extensions = [
	{
		logo: "./assets/images/logo-devlens.svg",
		name: "DevLens",
		description:
			"Quickly inspect page layouts and visualize element boundaries.",
		isActive: true,
	},
	{
		logo: "./assets/images/logo-style-spy.svg",
		name: "StyleSpy",
		description: "Instantly analyze and copy CSS from any webpage element.",
		isActive: true,
	},
	{
		logo: "./assets/images/logo-speed-boost.svg",
		name: "SpeedBoost",
		description: "Optimizes browser resource usage to accelerate page loading.",
		isActive: false,
	},
	{
		logo: "./assets/images/logo-json-wizard.svg",
		name: "JSONWizard",
		description:
			"Formats, validates, and prettifies JSON responses in-browser.",
		isActive: true,
	},
	{
		logo: "./assets/images/logo-tab-master-pro.svg",
		name: "TabMaster Pro",
		description: "Organizes browser tabs into groups and sessions.",
		isActive: true,
	},
	{
		logo: "./assets/images/logo-viewport-buddy.svg",
		name: "ViewportBuddy",
		description:
			"Simulates various screen resolutions directly within the browser.",
		isActive: false,
	},
	{
		logo: "./assets/images/logo-markup-notes.svg",
		name: "Markup Notes",
		description:
			"Enables annotation and notes directly onto webpages for collaborative debugging.",
		isActive: true,
	},
	{
		logo: "./assets/images/logo-grid-guides.svg",
		name: "GridGuides",
		description:
			"Overlay customizable grids and alignment guides on any webpage.",
		isActive: false,
	},
	{
		logo: "./assets/images/logo-palette-picker.svg",
		name: "Palette Picker",
		description: "Instantly extracts color palettes from any webpage.",
		isActive: true,
	},
	{
		logo: "./assets/images/logo-link-checker.svg",
		name: "LinkChecker",
		description: "Scans and highlights broken links on any page.",
		isActive: true,
	},
	{
		logo: "./assets/images/logo-dom-snapshot.svg",
		name: "DOM Snapshot",
		description: "Capture and export DOM structures quickly.",
		isActive: false,
	},
	{
		logo: "./assets/images/logo-console-plus.svg",
		name: "ConsolePlus",
		description:
			"Enhanced developer console with advanced filtering and logging.",
		isActive: true,
	},
];

const extensionSection = document.querySelector(".extension-cards");

const themeToggleBtn = document.querySelector(".theme-toggle");
const allBtn = document.querySelector(".btn1");
const activeBtn = document.querySelector(".btn2");
const inActiveBtn = document.querySelector(".btn3");

allBtn.addEventListener("click", () => {
	displayExtensions(extensions);
	applyTheme();
	setActiveButton(allBtn);
});

activeBtn.addEventListener("click", () => {
	const activeExtensions = extensions.filter((e) => e.isActive);
	displayExtensions(activeExtensions);
	applyTheme();
	setActiveButton(activeBtn);
});

inActiveBtn.addEventListener("click", () => {
	const inactiveExtensions = extensions.filter((e) => !e.isActive);
	displayExtensions(inactiveExtensions);
	applyTheme();
	setActiveButton(inActiveBtn);
});

function setActiveButton(activeButton) {
	[allBtn, activeBtn, inActiveBtn].forEach((btn) =>
		btn.classList.remove("active-btn"),
	);
	activeButton.classList.add("active-btn");
}

function displayExtensions(list) {
	let html = "";
	extensionSection.innerHTML = "";

	list.forEach((extension) => {
		html += `
		<div class="extension-card">
			<div class="ext-head">
				<img class="ext-img" src="${extension.logo}" alt="${extension.name}"/>
				<div class="ext-body">
					<h4>${extension.name}</h4>
					<p>${extension.description}</p>
				</div>
			</div>
			<div class="ext-action">
				<button class="remove-btn" data-name="${extension.name}">Remove</button>
				<label class="toggle-switch">
					<input type="checkbox" class="switch-input" ${
						extension.isActive ? "checked" : ""
					} data-name="${extension.name}" />
					<span class="switch-slider"></span>
				</label>
			</div>
		</div>`;
	});

	extensionSection.innerHTML = html;

	document.querySelectorAll(".remove-btn").forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const name = e.target.dataset.name;
			extensions = extensions.filter((ext) => ext.name !== name);
			displayExtensions(extensions);
			applyTheme();
		});
	});

	document.querySelectorAll(".switch-input").forEach((input) => {
		input.addEventListener("change", (e) => {
			const name = e.target.dataset.name;
			const ext = extensions.find((ext) => ext.name === name);
			if (ext) ext.isActive = e.target.checked;
		});
	});
}

document.addEventListener("DOMContentLoaded", () => {
	if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");
	displayExtensions(extensions);
	applyTheme();
});

themeToggleBtn.addEventListener("click", () => {
	const currentTheme = localStorage.getItem("theme");
	localStorage.setItem("theme", currentTheme === "light" ? "dark" : "light");
	applyTheme();
});

function applyTheme() {
	const themeIcon = document.querySelector(".theme-icon");
	const title = document.querySelector(".title");
	const extNav = document.querySelector(".ext-nav");
	const body = document.body;
	const cards = document.querySelectorAll(".extension-card");
	const currentTheme = localStorage.getItem("theme");

	if (currentTheme === "dark") {
		themeIcon.src = "./assets/images/icon-sun.svg";
		themeToggleBtn.style.backgroundColor = "#131B2E";
		title.style.color = "#FFFFFF";
		extNav.style.backgroundColor = "#1E2538";
		body.style.background = "linear-gradient(180deg, #0D1224 0%, #131B2E 100%)";
		cards.forEach((card) => {
			card.style.backgroundColor = "#1E2538";
			card.style.color = "#F5F7FA";
		});
	} else {
		themeIcon.src = "./assets/images/icon-moon.svg";
		themeToggleBtn.style.backgroundColor = "#d8d8d8ff";
		title.style.color = "#000000";
		extNav.style.backgroundColor = "#FFFFFF";
		body.style.background =
			"linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%) no-repeat";
		cards.forEach((card) => {
			card.style.backgroundColor = "#FFFFFF";
			card.style.color = "#1E2538";
		});
	}
}
