import State from './State'
import { Location } from '../models/locations'

class LocationsState extends State<Location> {
	private state: {
		countries: Location[]
		cities: Location[]
	} = {
		countries: [],
		cities: [],
	}

	private static instance: LocationsState

	private constructor() {
		super()
	}

	static getInstance() {
		if (this.instance) {
			return this.instance
		}

		this.instance = new LocationsState()
		return this.instance
	}

	public setState(arr: Location[]) {
		this.state.countries = arr

		this.updateListeners()
	}

	public setCities(arr: Location[]) {
		this.state.cities = arr

		this.updateListeners()
	}

	getState() {
		return this.state
	}

	private updateListeners() {
		for (const listener of this.listeners) {
			listener([...this.state.cities, ...this.state.countries].slice())
		}
	}
}

const instance = LocationsState.getInstance()

export default instance
