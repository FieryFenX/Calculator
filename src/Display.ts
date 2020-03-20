/**
 * Экран для отображения результата.
 */
class Display
{
	output: HTMLElement;

	constructor( output: HTMLElement )
	{
		this.output = output;
	}
	

	setValue( value: string )
	{
		this.output.textContent = value;
	}
	

	prepare( number: number ): string
	{
		return number.toPrecision( 11 )
			.replace( /(?:\.0*|(\.\d+?)0*)$/, '$1' );
	}
}

export {
	Display as default,
};
