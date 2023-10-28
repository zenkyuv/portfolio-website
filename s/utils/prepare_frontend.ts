import {prepare_frontend, Context, css} from "@benev/slate"

export const {carbon, oxygen, obsidian, quartz} = (
	prepare_frontend(new class extends Context {
		theme = css`
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}
		`
	})
)
