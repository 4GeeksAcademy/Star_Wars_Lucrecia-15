const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
			], characters: [],
			vehicles: [],
			planets: [],
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: async () => {
				const response = await fetch("https://www.swapi.tech/api/people")
				const data = await response.json()
				setStore({ characters: data.results })

			}, getPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets")
				const data = await response.json()
				setStore({ planets: data.results })

			},
			getVehicles: async () => {
				const response = await fetch("https://www.swapi.tech/api/vehicles")
				const data = await response.json()
				setStore({ vehicles: data.results })

			},
			handleFavorites: (name) => {
				const store = getStore()
				if (!store.favorites.includes(name)) {
					setStore({ favorites: [...store.favorites, name] })
				} else {
					setStore({
						favorites: store.favorites.filter(fav => fav !== name)
					});
				}

			},
		}
	};
};

export default getState;
