class Tabs {
	header: HTMLElement
	tab: NodeListOf<HTMLElement>
	content: NodeListOf<HTMLElement>

	tabSelector: string = ''
	activeClass: string = ''

	constructor(
		headerSelector: string = '',
		tabSelector: string = '',
		contentSelector: string = '',
		activeClass: string = '',
	) {
		this.header = document.querySelector(headerSelector)!
		this.tab = document.querySelectorAll(tabSelector)!
		this.content = document.querySelectorAll(contentSelector)!

		this.activeClass = activeClass
		this.tabSelector = tabSelector

		this.hideTabContent()
		this.showTabContent()

		this.init()
	}

	private hideTabContent() {
		this.content.forEach((item) => {
			item.style.display = 'none'
		})

		this.tab.forEach((item) => {
			item.classList.remove(this.activeClass)
		})
	}

	private showTabContent(i: number = 0) {
		this.content[i].style.display = 'block'
		this.tab[i].classList.add(this.activeClass)
	}

	private init() {
		this.header.addEventListener('click', (e: Event) => {
			const target = <HTMLElement>e.target
			const parent = <HTMLElement>target.parentElement

			if (
				target.classList.contains(this.tabSelector.replace(/\./, '')) ||
				parent.classList.contains(this.tabSelector.replace(/\./, ''))
			) {
				this.tab.forEach((item, i) => {
					if (target === item || parent === item) {
						this.hideTabContent()
						this.showTabContent(i)
					}
				})
			}
		})
	}
}

export default Tabs
