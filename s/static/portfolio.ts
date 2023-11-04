export enum Stack {
	NextJS,
	Lit,
	React
}

export type ProjectName = "Schriftsteller" | "Kanban Task Management" | "Link Sharing App" | "Terrarium"

export type Project = {
	name: ProjectName
	tech_stack: Stack[]
	content: string
}

export const portfolio = {
	personal_projects: [
		{
			name: "Schriftsteller",
			tech_stack: [Stack.NextJS],
			content: "1"
		},
		{
			name: "Kanban Task Management",
			tech_stack: [Stack.Lit],
			content: "2"
		},
		{
			name: "Link Sharing App",
			tech_stack: [Stack.React],
			content: "3"
		}
	] satisfies Project[],
	open_source_work: [{
			name: "Terrarium",
			tech_stack: [Stack.Lit],
			content: "4"
	}] satisfies Project[]
}

export type PortfolioFolder = "personal_projects" | "open_source_work"
