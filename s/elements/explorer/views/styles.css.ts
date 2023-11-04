import {css} from "@benev/slate"

export const styles = css`
.folder-name {
	color: #75A3D6;
	font-weight: bold;
	display: flex;
	align-items: center;
	gap: 0.5em;
}

button {
	background: none;
	border: none;
	cursor: pointer;
}

.folder-item {
	color: #d5d5d5;
}

.folder-items > *:not(.folder-name) {
	display: none;
}

.folder-items {
	display: flex;
	flex-direction: column;
	gap: 0.3em;
	&[data-opened] >* {
		display: flex;
		&.folder-item {
			margin-left: 1em;
		}
		& svg {
			transform: rotate(180deg);
		}
	}
}

svg {
	width: 13px;
	height: 13px;
	transform: rotate(90deg);
}

`
