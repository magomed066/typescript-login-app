type Listener<T> = (items: T[]) => void

class State<T> {
	protected listeners: Listener<T>[] = []

	addListener(listener: Listener<T>) {
		this.listeners.push(listener)
	}

	removeListener(f: Listener<T>) {
		this.listeners = this.listeners.filter((foo) => foo !== f)
	}
}

export default State
