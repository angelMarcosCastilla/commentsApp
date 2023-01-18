import { useState } from 'react';

interface Props {
	initialScore: number;
}
const Score: React.FC<Props> = ({ initialScore = 0 }) => {
	const [score, setScore] = useState(initialScore);

	const handleIncrementScore = (): void => {
		setScore(score + 1);
	};

	const handleDecrementScore = (): void => {
		setScore(score - 1);
	};

	const isDisabledDecrementButton = score === 0;

	return (
		<div className='score-container'>
			<button className='score__button' onClick={handleIncrementScore}>+</button>
			<span className='score__number'>{score}</span>
			<button className='score__button' disabled={isDisabledDecrementButton} 
      onClick={handleDecrementScore}>
				-
			</button>
		</div>
	);
};

export default Score;
