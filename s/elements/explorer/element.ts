import {html} from "lit"

import {styles} from "./styles.css.js"
import {Folder} from "./views/Folder.js"
import {carbon} from "../../utils/prepare_frontend.js"

export const ExplorerElement = carbon({styles}, use => {

	return html`
		<h1>Portfolio</h1>
		${Folder(["personal_projects"])}
		${Folder(["open_source_work"])}
	`
})
