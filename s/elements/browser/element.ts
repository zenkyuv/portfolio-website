import {html} from "lit"

import {styles} from "./styles.css.js"
import {lvimIcon} from "./static/lvim-icon.js"
import {carbon} from "../../utils/prepare_frontend.js"

export const BrowserElement = carbon({styles}, use => {
	const count = use.signal(0)
	const increment = () => count.value++

	return html`
		<div class="icon">${lvimIcon}</div>
	`
})
