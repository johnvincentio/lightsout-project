// AllStyles

import styled from 'styled-components';

import { appTheme } from '../themes/themes';

// fill: theme.palette.common.white,
// backgroundColor: theme.palette.primary.dark

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	margin: 0 auto;
	line-height: 1.2em;
`;

export const Header = styled.div`
	background-color: white;
	padding-top: calc(2 * ${appTheme.topNavLineHeight}px - 3px);
	padding-bottom: 5px;
	width: 100%;
`;

export const InnerContainer = styled.main`
	display: flex;
	flex-direction: row;

	// height: ${props => (props.player ? '400px' : '100%')};

	// min-height: 100vh;		// causes too much height
	height: 100%;

	// height: 400px; // force space at bottom for player
	overflow-y: scroll;
`;

export const FoldersContainer = styled.div`
	min-width: 30%;
	max-width: 50%;
	flex-direction: row;
`;

export const FilesContainer = styled.div`
	min-width: 50%;
	max-width: 100%;
	flex-direction: row;
`;

export const Columns = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	box-shadow: ${appTheme.boxShadow.n4};
`;

export const Rows = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100%;
	width: 100%;
`;

export const ControlsBox = styled.div`
	padding: 10px;
	margin: 10px;
	min-width: 185px;
`;

export const Title = styled.h6`
	font-size: 1.2em;
	font-weight: 400;
	line-height: 1.5;
	letter-spacing: 0.01938em;
	text-align: left;
	overflow: hidden;
	// white-space: nowrap;
	text-overflow: ellipsis;
	color: rgba(0, 0, 0, 0.87);
`;

export const SubTitle = styled.p`
	font-size: 0.875rem;
	font-weight: 400;
	line-height: 1.43;
	letter-spacing: 0.0171em;
	color: rgba(0, 0, 0, 0.54);
`;

export const AllStyles = theme => ({
	itemText: {
		paddingLeft: '20px'
	},
	icon: {
		height: '28px',
		width: '28px',
		fill: theme.palette.primary.main
	},
	folderIcon: {
		height: '28px',
		width: '28px',
		marginRight: '16px',
		fill: theme.palette.primary.main
	},
	playIcon: {
		height: '32px',
		width: '32px',
		fill: theme.palette.primary.main
	},
	largeIcon: {
		height: '36px',
		width: '36px',
		fill: theme.palette.primary.main
	},
	controlIcon: {
		height: '28px',
		width: '28px',
		fill: theme.palette.primary.main
	}
});

/*
export const SliderContainer = styled.div`
	width: 100%;
	// height: 30%;
	// background-color: #2196f3;
	// animation: positionChange 0.5s ease-in-out;
`;

export const SliderStyle = styled.input`
	-webkit-appearance: none;
	appearance: none;

	overflow: hidden;
	width: 80%;
	height: 15px;
	border-radius: 5px;

	background: #d3d3d3;
	outline: none;

	opacity: 0.7;
	-webkit-transition: 0.2s;
	transition: opacity 0.2s;

	&:hover {
		// height: 5px;
		// margin-top: 0px;
		opacity: 1;
		cursor: pointer;
	}

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;

		width: 25px;
		height: 25px;
		border-radius: 50%;

		// box-shadow: -2500px 0px 0px 2500px #0d47a1;
		background-color: #4caf50;
		cursor: pointer;
	}

	&::-webkit-slider-thumb:hover {
		opacity: 1;
		cursor: pointer;
	}
`;
*/

/*
const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${props => (props.primary ? 'violet' : 'palevioletred')};
  border: ${props =>
    props.primary ? '2px solid violet' : '2px solid palevioletred'};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    color: white;
    background-color: ${props =>
      props.primary ? 'violet' : 'palevioletred'};
  }
`;
*/
