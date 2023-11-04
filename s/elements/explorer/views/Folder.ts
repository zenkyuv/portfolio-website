import {html} from "@benev/slate"

import {styles} from "./styles.css.js"
import {obsidian} from "../../../utils/prepare_frontend.js"
import {portfolio, PortfolioFolder} from "../../../static/portfolio.js"
import triangleSvg from "../../../icons/ionicons/triangle.svg.js"

export const Folder = obsidian({styles}, use => (folder_name: PortfolioFolder) => {
	const [folderOpened, setFolderOpened] = use.state(false)
	const portfolio_folder_items = portfolio[folder_name]
	
	return html`
		<div class="folder-items" ?data-opened=${folderOpened}>
			<button class="folder-name" @click=${() => setFolderOpened(!folderOpened)}>
				${triangleSvg}
				<span>${folder_name}/</span>
			</button>
			${portfolio_folder_items.map(folder_item => html`
				<button class="folder-item">${folder_item.name}</button>
			`)}
		</div>
	`
})
