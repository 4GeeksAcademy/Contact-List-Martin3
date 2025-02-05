const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            demo: [],
			contacts: [],
        },
        actions: {
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
				const actions = getActions()
				fetch('https://playground.4geeks.com/contact/agendas/martin/contacts')
				.then(response => {
					if (response.status == 404) {
					actions.createUser()
					return null;	
					}
					return response.json();
				})
					.then(data => {
						if (data){
							console.log("Data fetched: ", data); 
							setStore({ contacts: Array.isArray(data.contacts) ? data.contacts : [] }); 
						}
					})
					
					.catch(error => console.error("Error fetching contacts:", error));
               
            },
            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({ demo: demo });
            },
            createUser: (newUser) => {
                fetch('https://playground.4geeks.com/contact/agendas/martin/contacts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error creating new user');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('User created successfully:', data);
                    
                    const actions = getActions();
                    actions.loadSomeData(); 
                })
                .catch(error => console.error("Error creating user:", error))},

                updateUser: (id, updatedUser) => {
    fetch(`https://playground.4geeks.com/contact/agendas/martin/contacts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error updating user');
        }
        return response.json();
    })
    .then(data => {
        console.log('User updated successfully:', data);

        const actions = getActions();
        actions.loadSomeData(); 
    })
    .catch(error => console.error("Error updating user:", error));
},

            deleteUser: (id) => {
                fetch(`https://playground.4geeks.com/contact/agendas/martin/contacts/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error deleting user');
                    }
                    
                    
                    return response.text().then(text => {
                        return text ? JSON.parse(text) : {};
                    });
                })
                .then(data => {
                    const store = getStore();
                    const filteredContacts = store.contacts.filter(contact => contact.id !== id);
                    setStore({ contacts: filteredContacts });
                    console.log('User deleted successfully');
            
                    const actions = getActions();
                    actions.loadSomeData(); 
                })
                .catch(error => console.error("Error deleting user:", error));
            }
            
        }}}
            

export default getState;





