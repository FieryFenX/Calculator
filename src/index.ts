// @ts-check

import Calculator from "Calculator";
import Controls from "Controls";
import Display from "Display";

main();

function main()
{
	const outputElement = document.getElementById( 'display' ) as HTMLElement;
	const display = new Display( outputElement );
	const calculator = new Calculator( display );
	const buttons = document.querySelectorAll( 'div.buttons>button' );
	
	new Controls( calculator, buttons );
}
