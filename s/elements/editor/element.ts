import {html} from "lit"
import {VimWasm} from "vim-wasm"

import {styles} from "./styles.css.js"
import {carbon} from "../../utils/prepare_frontend.js"

export const EditorElement = carbon({styles}, use => {
	const {canvas,input} = use.init(() => {
		const canvas = document.createElement("canvas")
		const input = document.createElement("input")
		const vim = new VimWasm({
			canvas: canvas,
			input: input,
			workerScriptPath: '../../../node_modules/vim-wasm/vim.js',
		})
	vim.start()
	canvas.width = use.element.clientWidth
	canvas.height = use.element.clientHeight
	vim.resize(use.element.clientWidth, use.element.clientHeight)
	const dispose = () => {}
	return [{canvas,input}, dispose]
})

	return html`
		${input}
		${canvas}
	`
})
