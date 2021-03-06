import Calculator from "Calculator";

/**
 * Элементы управления калькулятором.
 */
class Controls
{
	calculator: Calculator;
	buttons: NodeList;

	constructor( calculator: Calculator, buttons: NodeList )
	{
		this.calculator = calculator;
		this.buttons = buttons;
	
		const onButtonClick = ( event: Event ) =>
		{
			const target = event.target as HTMLButtonElement;
			const action = target.dataset.action as string;
			const value = target.dataset.value as string;
			this.doAction( action, value );
		}
		
		for ( const button of buttons )
		{
			button.addEventListener( 'click', onButtonClick );
		}
	}
	

	doAction( action: string, value: string )
	{
		switch ( action )
		{
			case 'addition':
				this.calculator.addition();
				break;
			
			case 'subtraction':
				this.calculator.subtraction();
				break;
			
			case 'multiplication':
				this.calculator.multiplication();
				break;
			
			case 'division':
				this.calculator.division();
				break;
			
			case 'square-root':
				this.calculator.squareRoot();
				break;
			
			case 'digit':
				if ( !value )
				{
					throw new Error( 'Digit action should be with value' );
				}
				this.calculator.addDigit( value );
				break;
			
			case 'period':
				this.calculator.period();
				break;
			
			case 'change-sign':
				this.calculator.changeSign();
				break;
			
			case 'calculate':
				this.calculator.calculate();
				break;
			
			case 'backspace':
				this.calculator.backspace();
				break;
			
			case 'clear':
				this.calculator.clear();
				break;
			
			default:
				throw new Error( 'Unknown action' );
		}
	}
}

export {
	Controls as default,
};
