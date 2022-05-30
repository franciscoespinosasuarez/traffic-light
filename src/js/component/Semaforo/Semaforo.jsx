import React, { useState } from "react";
import "./Semaforo.css";

function Semaforo() {
	const [selectedColor, setSelectedColor] = useState("red");
	return (
		<>
			<div className="container">
				<div
					onClick={() => setSelectedColor("red")}
					className={
						"red" + (selectedColor === "red" ? " on-red" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("orange")}
					className={
						"orange" +
						(selectedColor === "orange" ? " on-orange" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("green")}
					className={
						"green" + (selectedColor === "green" ? " on-green" : "")
					}></div>
			</div>

			<div className="button-div">
				<button onClick={selectLight}>Show color</button>
			</div>
		</>
	);

	function selectLight() {
		if (selectedColor === "red") {
			let luz = document.querySelector(".red");
			luz.classList.add("circle");
		} else if (selectedColor === "orange") {
			let luz = document.querySelector(".orange");
			luz.classList.add("circle");
		} else if (selectedColor === "green") {
			let luz = document.querySelector(".green");
			luz.classList.add("circle");
		}
	}
}

function purple() {}

export default Semaforo;
