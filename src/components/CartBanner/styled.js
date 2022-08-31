import styled from 'styled-components';

const StyledCartBanner = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 0.8rem;
	padding: 0.6rem;
	animation: drop-in 500ms;
	animation-name: drop-in;
	border-top: 10px solid burlywood;
	border-radius: 8px;
	background-color: lightslategray;
	box-shadow: rgba(0, 0, 0, 0.45) 0 55px 10px -40px;

	@keyframes drop-in {
		from {
			transform: rotate(0deg) translateY(-90%);
			opacity: 0;
		}
		to {
			transform: rotate(0deg) translateY(0%);
			opacity: 1;
		}
	}
`;
export default StyledCartBanner;