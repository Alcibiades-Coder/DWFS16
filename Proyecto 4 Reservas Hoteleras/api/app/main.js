//// Template para Manejo de Reservas

const loadInitialTemplate = () => {
    const template = `
        <h1>Reservas</h1>
            <form id="user-form">
                <div>
                    <label>Nombre</label>
                    <input name="name" />
                </div>
                <div>
                    <label>Fecha de Nacimiento</label>
                    <input id="nacimiento" name="date" type="date" />
                </div>
                <div>
                    <label>Ciudad</label>
                    <input name="city" type="text" />
                </div>
                <div>
                    <label>Hotel</label>
                    <select name="hotel">
                        <option value="Paraiso">Paraiso</option>
                        <option value="Niagara">Niagara</option>
                        <option value="Cozumel">Cozumel</option>
                        <option value="En Sueño">En Sueño</option>
                    </select>
                </div>
                <div>
                    <label>N° de Adultos</label>
                    <select name="numpassengers">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div>
                    <label>N° de Niños</label>
                    <select name="numkids">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div>
                    <label>Tipo de Habitación</label>
                    <select name="roomtype">
                        <option value="Single">Single (1 Queen size bed)</option>
                        <option value="Double">Double (1 Queen size bed-2 Single size bed)</option>
                        <option value="Double Queen">Double Queens (2 Queen size bed)</option>
                        <option value="Double Kings">Double Kings (2 King size bed)</option>
                        <option value="Master Suite">Master Suite (1 Super King size bed-2 Queen size bed)</option>
                    </select>
                </div>
                <div>
                    <label>Fecha de Ingreso</label>
                    <input name="checkin" type="date" />
                </div>
                <div>
                    <label>Fecha de Salida</label>
                    <input name="checkout" type="date" />
                </div>
                <div>
                    <label>Estado de la Reserva</label>
                    <input type="text" name="state" value="Creada" readonly>
                </div>
                
                <button type="submit">Enviar</button>
            </form>
        <h1>Listado de Reservas</h1>
            <ul id="user-list"></ul>
        
            <h2>Buscar Reserva por ID</h2>
        <form id="search-form">
            <label>ID de la Reserva:</label>
            <input type="text" id="search-id" placeholder="Ingrese el ID de la reserva" />
            <button type="submit">Buscar</button>
        </form>        
        <div id="search-results"></div>
        
        <h2>Buscar Reserva por Hotel</h2>
        <form id="search-hotel">
            <label>Nombre del Hotel:</label>
                    <select id="hotel-name">
                        <option value="Paraiso">Paraiso</option>
                        <option value="Niagara">Niagara</option>
                        <option value="Cozumel">Cozumel</option>
                        <option value="En Sueño">En Sueño</option>
                    </select>
            <button type="submit">Buscar</button>
        </form>        
        <div id="hotel-results"></div>
        <h2>Buscar Reserva por Tipo de Habitación</h2>
        <form id="search-room">
            <label>Tipo de Habitación:</label>
                    <select id="roomtype-name">
                        <option value="Single">Single</option>
                        <option value="Double">Double</option>
                        <option value="Double Queen">Double Queens</option>
                        <option value="Double Kings">Double Kings</option>
                        <option value="Master Suite">Master Suite</option>
                    </select>
            <button type="submit">Buscar</button>
        </form>        
        <div id="rooms-results"></div>

        <h2>Buscar Reservas por Rango de Fechas</h2>
        <form id="search-dates">
            <label>Fecha de Inicio:</label>
            <input type="date" id="start-date" name="start-date" />
            <label>Fecha de Fin:</label>
            <input type="date" id="end-date" name="end-date" />
        <button type="submit">Buscar</button>
</form>

<h2>Buscar Reserva por N° de Adultos</h2>
        <form id="search-numpassengers">
            <label>Pasajeros Adultos en la Reserva:</label>
            <input type="text" id="search-adults" placeholder="Ingrese el N° de Adultos en la reserva" />
            <button type="submit">Buscar</button>
        </form>        
        <div id="search-results"></div>
<div id="adults-results"></div>

<h2>Buscar Reserva por Estado</h2>
        <form id="search-state">
            <label>Tipo de Estado:</label>
                    <select id="state-name">
                        <option value="Creada">Creada</option>
                        <option value="Modificada">Modificada</option>
                    </select>
            <button type="submit">Buscar</button>
        </form>        
        <div id="state-results"></div>

        <h2>Modificar Reserva por ID</h2>
        <form id="update-form">
            <label>ID de la Reserva:</label>
            <input type="text" id="update-id" placeholder="Ingrese el ID de la reserva" />
            <button type="submit">Buscar</button>
        </form>        
        <div id="update-results"></div>
  `;
        
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = template;
}

//// Función de Controlador para Actualizar las Reservas de Pasajeros por ID

const updateUsersById = () => {
    const updateUserForm = document.getElementById('update-form');
    updateUserForm.onsubmit = async (e) => {
        e.preventDefault();
        
        const updateId = document.getElementById('update-id').value.trim();

        try {

    // Llama a la API para obtener los datos del usuario

const response = await fetch(`/users/${updateId}`, {
                headers: {
                    Authorization: localStorage.getItem('jwt')
                }
            });

            if (!response.ok) {
                throw new Error("No se encontraron reservas para el estado especificado.");
            }

            const user = await response.json();

    // Muestra el formulario pre-rellenado con los datos del usuario

            const updateResults = document.getElementById('update-results');
            const formatDate = user.date.split("T")[0];
            const formatCheckin = user.checkin.split("T")[0];
            const formatCheckout = user.checkout.split("T")[0];
            
            
            updateResults.innerHTML = `
                <div>
                   <form id="update-user-form">
                        <div>
                            <label>Nombre</label>
                            <input name="name" value="${user.name}" />
                        </div>
                        <div>
                            <label>Fecha de Nacimiento</label>
                            <input name="date" type="date" value="${formatDate}" />
                        </div>
                        <div>
                            <label>Ciudad</label>
                            <input name="city" type="text" value="${user.city}" />
                        </div>
                        <div>
                            <label>Hotel</label>
                            <select name="hotel">
                                <option value="Paraiso" ${user.hotel === "Paraiso" ? "selected" : ""}>Paraiso</option>
                                <option value="Niagara" ${user.hotel === "Niagara" ? "selected" : ""}>Niagara</option>
                                <option value="Cozumel" ${user.hotel === "Cozumel" ? "selected" : ""}>Cozumel</option>
                                <option value="En Sueño" ${user.hotel === "En Sueño" ? "selected" : ""}>En Sueño</option>
                            </select>
                        </div>
                        <div>
                            <label>N° de Adultos</label>
                            <select name="numpassengers">
                                <option value="1" ${user.numpassengers === 1 ? "selected" : ""}>1</option>
                                <option value="2" ${user.numpassengers === 2 ? "selected" : ""}>2</option>
                                <option value="3" ${user.numpassengers === 3 ? "selected" : ""}>3</option>
                                <option value="4" ${user.numpassengers === 4 ? "selected" : ""}>4</option>
                                <option value="5" ${user.numpassengers === 5 ? "selected" : ""}>5</option>
                            </select>
                        </div>
                        <div>
                            <label>N° de Niños</label>
                            <select name="numkids">
                                <option value="0" ${user.numkids === 0 ? "selected" : ""}>0</option>
                                <option value="1" ${user.numkids === 1 ? "selected" : ""}>1</option>
                                <option value="2" ${user.numkids === 2 ? "selected" : ""}>2</option>
                                <option value="3" ${user.numkids === 3 ? "selected" : ""}>3</option>
                                <option value="4" ${user.numkids === 4 ? "selected" : ""}>4</option>
                            </select>
                        </div>
                        <div>
                            <label>Tipo de Habitación</label>
                            <select name="roomtype">
                                <option value="Single" ${user.roomtype === "Single" ? "selected" : ""}>Single</option>
                                <option value="Double" ${user.roomtype === "Double" ? "selected" : ""}>Double</option>
                                <option value="Double Queen" ${user.roomtype === "Double Queen" ? "selected" : ""}>Double Queen</option>
                                <option value="Double Kings" ${user.roomtype === "Double Kings" ? "selected" : ""}>Double Kings</option>
                                <option value="Master Suite" ${user.roomtype === "Master Suite" ? "selected" : ""}>Master Suite</option>
                            </select>
                        </div>
                        <div>
                            <label>Fecha de Ingreso</label>
                            <input name="checkin" type="date" value="${formatCheckin}" />
                        </div>
                        <div>
                            <label>Fecha de Salida</label>
                            <input name="checkout" type="date" value="${formatCheckout}" />
                        </div>
                        <div>
                            <label>Estado de la Reserva</label>
                            <input type="text" name="state" value="Modificada" readonly>
                        </div>
            
                        <button type="submit">Actualizar</button>
                    </form>
                </div>
            `;

    // Evento para enviar el formulario de actualización

            const updateUserForm = document.getElementById('update-user-form');
            updateUserForm.onsubmit = async (e) => {
                e.preventDefault();
                
                const formData = new FormData(updateUserForm);
                const data = Object.fromEntries(formData.entries());

    // Realiza la solicitud PUT para actualizar el usuario
                
                const updateResponse = await fetch(`/users/${updateId}`, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: localStorage.getItem('jwt')
                    }
                });

                if (updateResponse.ok) {
                    alert("Usuario actualizado con éxito.");
                    updateResults.innerHTML = ""; 
                } else {
                    alert("Error al actualizar el usuario.");
                }
            };
        } catch (error) {
            document.getElementById('update-results').innerHTML = `<p>${error.message}</p>`;
        }
    };
};


//// Función de Controlador para Listar las Reservas de Pasajeros por estado de reserva

const searchUsersByState = () => {
    const searchStateForm = document.getElementById('search-state');
    searchStateForm.onsubmit = async (e) => {
        e.preventDefault();
        
    // Obtiene el nombre del hotel del campo de selección

        const stateName = document.getElementById('state-name');
        const stateSelected = stateName.value;

        try {

    // Llamada a la API para obtener las reservas en el hotel especificado
            
            const response = await fetch(`/users/state?state=${encodeURIComponent(stateSelected)}`, {
                headers: {
                    Authorization: localStorage.getItem('jwt')
                }
            });

            if (!response.ok) {
                throw new Error("No se encontraron reservas para el estado especificado.");
            }

            const users = await response.json();

    // Selecciona el contenedor de resultados de búsqueda por hotel
    
            const stateResults = document.getElementById('state-results');
            
            if (users.length > 0) {
                // Genera el HTML para mostrar los usuarios encontrados
                stateResults.innerHTML = users.map(user => `
                    <div>
                        <h3>Reserva a Nombre de: ${user.name}</h3>
                        <p>ID de la Reserva: ${user._id}</p>
                        <p>Hotel: ${user.hotel}</p>
                        <p>Para: ${user.numpassengers} Adultos y ${user.numkids} Niños</p>
                        <p>Tipo de Habitación: ${user.roomtype}</p>
                        <p>Fecha de Ingreso: ${user.checkin}</p>
                        <p>Fecha de Salida: ${user.checkout}</p>
                        <p>Estado Reserva: ${user.state}</p>
                        <button data-id="${user._id}">Eliminar</button>
                    </div>
                `).join('');

//// Función de Controlador para Borrar Reserva de Pasajero por ID          

                users.forEach(user => {
                    const deleteButton = document.querySelector(`[data-id="${user._id}"]`);
                    deleteButton.onclick = async () => {
                        await fetch(`/users/${user._id}`, {
                            method: 'DELETE',
                            headers: { Authorization: localStorage.getItem('jwt') },
                        });
                        deleteButton.parentElement.remove();
                        alert('Reserva eliminada con éxito');
                    };
                });
            } else {

    // Si no se encuentran resultados, muestra un mensaje
                
                stateResults.innerHTML = `<p>No se encontraron reservas en el hotel especificado.</p>`;
            }
        } catch (error) {

    // Maneja el error y muestra un mensaje

            document.getElementById('state-results').innerHTML = `<p>${error.message}</p>`;
        }
       

    };
};

//// Función Controlador para Listar las Reservas de Pasajeros por Número de Adultos

const searchUsersByNumPassengers = () => {
    const searchAdultForm = document.getElementById('search-numpassengers');
    searchAdultForm.onsubmit = async (e) => {
        e.preventDefault();
        
    // Obtiene el nombre del hotel del campo de selección
 
        const adults = document.getElementById('search-adults').value.trim();
        
        try {

    // Llamada a la API para obtener las reservas en el hotel especificado
            
            const response = await fetch(`/users/adults?adults=${encodeURIComponent(adults)}`, {
                headers: {
                    Authorization: localStorage.getItem('jwt')
                }
            });

            if (!response.ok) {
                throw new Error("No se encontraron resultados para el N° especificado.");
            }

            const users = await response.json();

    // Selecciona el contenedor de resultados de búsqueda por hotel

            const adultsResults = document.getElementById('adults-results');
            
            if (users.length > 0) {

    // Genera el HTML para mostrar los usuarios encontrados

                adultsResults.innerHTML = users.map(user => `
                    <div>
                        <h3>Reserva a Nombre de: ${user.name}</h3>
                        <p>ID de la Reserva: ${user._id}</p>
                        <p>Hotel: ${user.hotel}</p>
                        <p>Para: ${user.numpassengers} Adultos y ${user.numkids} Niños</p>
                        <p>Tipo de Habitación: ${user.roomtype}</p>
                        <p>Fecha de Ingreso: ${user.checkin}</p>
                        <p>Fecha de Salida: ${user.checkout}</p>
                        <p>Estado Reserva: ${user.state}</p>
                        <button data-id="${user._id}">Eliminar</button>
                    </div>
                `).join('');

    // Controlador para Borrar Reserva de Pasajero por ID

                users.forEach(user => {
                    const deleteButton = document.querySelector(`[data-id="${user._id}"]`);
                    deleteButton.onclick = async () => {
                        await fetch(`/users/${user._id}`, {
                            method: 'DELETE',
                            headers: { Authorization: localStorage.getItem('jwt') },
                        });
                        deleteButton.parentElement.remove();
                        alert('Reserva eliminada con éxito');
                    };
                });
            } else {
    // Si no se encuentran resultados, muestra un mensaje

                adultsResults.innerHTML = `<p>No se encontraron reservas con N° de adultos especificado.</p>`;
            }
        } catch (error) {

    // Maneja el error y muestra un mensaje

            document.getElementById('adults-results').innerHTML = `<p>${error.message}</p>`;
        }
       

    };
};


//// Función de Controlador para Listar las Reservas de Pasajeros por rango de fechas

const searchUsersByDateRange = () => {
   const searchHotelForm = document.getElementById('search-hotel');
    searchHotelForm.onsubmit = async (e) => {
        e.preventDefault();
        
    // Obtiene el nombre del hotel del campo de selección

        const hotelName = document.getElementById('hotel-name');
        const hotelSelected = hotelName.value;

        try {

    // Llamada a la API para obtener las reservas en el hotel especificado

            const response = await fetch(`/users/hotel?hotel=${encodeURIComponent(hotelSelected)}`, {
                headers: {
                    Authorization: localStorage.getItem('jwt')
                }
            });

            if (!response.ok) {
                throw new Error("No se encontraron reservas para el hotel especificado.");
            }

            const users = await response.json();

    // Selecciona el contenedor de resultados de búsqueda por hotel

            const hotelResults = document.getElementById('hotel-results');
            
            if (users.length > 0) {
                // Genera el HTML para mostrar los usuarios encontrados
                hotelResults.innerHTML = users.map(user => `
                    <div>
                        <h3>Reserva a Nombre de: ${user.name}</h3>
                        <p>ID de la Reserva: ${user._id}</p>
                        <p>Hotel: ${user.hotel}</p>
                        <p>Para: ${user.numpassengers} Adultos y ${user.numkids} Niños</p>
                        <p>Tipo de Habitación: ${user.roomtype}</p>
                        <p>Fecha de Ingreso: ${user.checkin}</p>
                        <p>Fecha de Salida: ${user.checkout}</p>
                        <p>Estado Reserva: ${user.state}</p>
                        <button data-id="${user._id}">Eliminar</button>
                    </div>
                `).join('');

    // Controlador para Borrar Reserva de Pasajero por ID

                users.forEach(user => {
                    const deleteButton = document.querySelector(`[data-id="${user._id}"]`);
                    deleteButton.onclick = async () => {
                        await fetch(`/users/${user._id}`, {
                            method: 'DELETE',
                            headers: { Authorization: localStorage.getItem('jwt') },
                        });
                        deleteButton.parentElement.remove();
                        alert('Reserva eliminada con éxito');
                    };
                });
            } else {
                
    // Si no se encuentran resultados, muestra un mensaje

                hotelResults.innerHTML = `<p>No se encontraron reservas en el hotel especificado.</p>`;
            }
        } catch (error) {

    // Maneja el error y muestra un mensaje

            document.getElementById('hotel-results').innerHTML = `<p>${error.message}</p>`;
        }
       

    };
};


//// Función de Controlador para Listar las Reservas de Pasajeros por nombre de Hotel

const searchUsersByHotel = () => {
    const searchHotelForm = document.getElementById('search-hotel');
    searchHotelForm.onsubmit = async (e) => {
        e.preventDefault();
        
    // Obtiene el nombre del hotel del campo de selección

        const hotelName = document.getElementById('hotel-name');
        const hotelSelected = hotelName.value;

        try {

    // Llamada a la API para obtener las reservas en el hotel especificado

            const response = await fetch(`/users/hotel?hotel=${encodeURIComponent(hotelSelected)}`, {
                headers: {
                    Authorization: localStorage.getItem('jwt')
                }
            });

            if (!response.ok) {
                throw new Error("No se encontraron reservas para el hotel especificado.");
            }

            const users = await response.json();

    // Selecciona el contenedor de resultados de búsqueda por hotel

            const hotelResults = document.getElementById('hotel-results');
            
            if (users.length > 0) {
                // Genera el HTML para mostrar los usuarios encontrados
                hotelResults.innerHTML = users.map(user => `
                    <div>
                        <h3>Reserva a Nombre de: ${user.name}</h3>
                        <p>ID de la Reserva: ${user._id}</p>
                        <p>Hotel: ${user.hotel}</p>
                        <p>Para: ${user.numpassengers} Adultos y ${user.numkids} Niños</p>
                        <p>Tipo de Habitación: ${user.roomtype}</p>
                        <p>Fecha de Ingreso: ${user.checkin}</p>
                        <p>Fecha de Salida: ${user.checkout}</p>
                        <p>Estado Reserva: ${user.state}</p>
                        <button data-id="${user._id}">Eliminar</button>
                    </div>
                `).join('');

    // Función de Controlador para Borrar Reserva de Pasajero por ID

                users.forEach(user => {
                    const deleteButton = document.querySelector(`[data-id="${user._id}"]`);
                    deleteButton.onclick = async () => {
                        await fetch(`/users/${user._id}`, {
                            method: 'DELETE',
                            headers: { Authorization: localStorage.getItem('jwt') },
                        });
                        deleteButton.parentElement.remove();
                        alert('Reserva eliminada con éxito');
                    };
                });
            } else {

    // Si no se encuentran resultados, muestra un mensaje

                hotelResults.innerHTML = `<p>No se encontraron reservas en el hotel especificado.</p>`;
            }
        } catch (error) {

    // Maneja el error y muestra un mensaje

            document.getElementById('hotel-results').innerHTML = `<p>${error.message}</p>`;
        }
       

    };
};

//// Función de Controlador para Listar las Reservas de Pasajeros por tipo de Habitación

const searchUsersByRoomType = () => {
    const searchRoomForm = document.getElementById('search-room');
    searchRoomForm.onsubmit = async (e) => {
        e.preventDefault();
        
    // Obtiene el nombre del hotel del campo de selección

        const roomName = document.getElementById('roomtype-name');
        console.log(roomName.value);
        const roomSelected = roomName.value;
        
        try {

    // Llamada a la API para obtener las reservas en el hotel especificado

            const response = await fetch(`/users/roomtype?roomtype=${encodeURIComponent(roomSelected)}`, {
                headers: {
                    Authorization: localStorage.getItem('jwt')
                }
            });

            if (!response.ok) {
                throw new Error("No se encontraron habitaciones para el tipo especificado.");
            }

            const users = await response.json();

    // Selecciona el contenedor de resultados de búsqueda por hotel

            const roomsResults = document.getElementById('rooms-results');
            
            if (users.length > 0) {

    // Genera el HTML para mostrar los usuarios encontrados

                roomsResults.innerHTML = users.map(user => `
                    <div>
                        <h3>Reserva a Nombre de: ${user.name}</h3>
                        <p>ID de la Reserva: ${user._id}</p>
                        <p>Hotel: ${user.hotel}</p>
                        <p>Para: ${user.numpassengers} Adultos y ${user.numkids} Niños</p>
                        <p>Tipo de Habitación: ${user.roomtype}</p>
                        <p>Fecha de Ingreso: ${user.checkin}</p>
                        <p>Fecha de Salida: ${user.checkout}</p>
                        <p>Estado Reserva: ${user.state}</p>
                        <button data-id="${user._id}">Eliminar</button>
                    </div>
                `).join('');

    // Función de Controlador para Borrar Reserva de Pasajero por ID

                users.forEach(user => {
                    const deleteButton = document.querySelector(`[data-id="${user._id}"]`);
                    deleteButton.onclick = async () => {
                        await fetch(`/users/${user._id}`, {
                            method: 'DELETE',
                            headers: { Authorization: localStorage.getItem('jwt') },
                        });
                        deleteButton.parentElement.remove();
                        alert('Reserva eliminada con éxito');
                    };
                });
            } else {

    // Si no se encuentran resultados, muestra un mensaje

                roomsResults.innerHTML = `<p>No se encontraron reservas en el hotel especificado.</p>`;
            }
        } catch (error) {

    // Maneja el error y muestra un mensaje

            document.getElementById('rooms-results').innerHTML = `<p>${error.message}</p>`;
        }
       

    };
};

//// Función de Controlador de Busqueda para Listar las Reservas de Pasajeros por ID

const searchUsers = () => {
    const searchForm = document.getElementById('search-form');
    searchForm.onsubmit = async (e) => {
        e.preventDefault();
        const searchId = document.getElementById('search-id').value.trim();

        if (!searchId) {
            alert("Por favor, ingrese un ID válido.");
            return;
        }

        try {

    // Llamada a la API para obtener el usuario por su ID

            const response = await fetch(`/users/${searchId}`, {
                headers: {
                    Authorization: localStorage.getItem('jwt')
                }
            });

            if (!response.ok) {
                throw new Error("No se encontró ninguna reserva con el ID especificado.");
            }

            const user = await response.json();

    // Selecciona el contenedor de resultados de búsqueda

            const searchResults = document.getElementById('search-results');
            
    // Muestra el usuario si se encuentra

            searchResults.innerHTML = `
                <div>
                    <h3>Resultado de la búsqueda</h3>
                    <p>Reserva a Nombre de: ${user.name}</p>
                    <p>ID de la Reserva: ${user._id}</p>
                    <p>En el Hotel: ${user.hotel}</p>
                    <p>Para: ${user.numpassengers} Adultos y ${user.numkids} Niños</p>
                    <p>Tipo de Habitación: ${user.roomtype}</p>
                    <p>Fecha de Ingreso: ${user.checkin}</p>
                    <p>Fecha de Salida: ${user.checkout}</p>
                    <p>Estado Reserva: ${user.state}</p>
                    <button data-id="${user._id}">Eliminar</button>
                </div>
            `;

//// Función de Controlador para Borrar Reserva de Pasajero por ID

            const deleteButton = searchResults.querySelector(`[data-id="${user._id}"]`);
            deleteButton.onclick = async () => {
                await fetch(`/users/${user._id}`, {
                    method: 'DELETE',
                    headers: { Authorization: localStorage.getItem('jwt') },
                });
                searchResults.innerHTML = '';
                alert('Eliminado con éxito!');
            };
        } catch (error) {

    // Muestra un mensaje si no se encuentra el usuario o hay un error

            document.getElementById('search-results').innerHTML = `<p>${error.message}</p>`;
        }
    };
};



//// Función de Controlador para Listar todas las Reservas de Pasajeros

const getUsers = async () => {
    const response = await fetch('/users', {
        headers: {
            Authorization: localStorage.getItem('jwt')
        }
    });
    const users = await response.json();
    const template = user => `
        <li>
           <div><p>Reserva a Nombre de: ${user.name} 
           <p>Id de la Reserva: ${user._id}
           <p>En el Hotel: ${user.hotel} 
           <p>Para: ${user.numpassengers} Adultos y ${user.numkids} Niños 
           <p>Tipo de Habitación: ${user.roomtype} 
           <p>Fecha de Ingreso: ${user.checkin} 
           <p>Fecha de Salida: ${user.checkout}
           <p>Estado Reserva: ${user.state}</p> 
           <p></div><button data-id="${user._id}">Eliminar</button>
        </li>
    `
    // Controlador para Borrar Reserva de Pasajero por ID

    const userList = document.getElementById('user-list');
    userList.innerHTML = users.map(user => template(user)).join('');
    users.forEach(user => {
        const userNode = document.querySelector(`[data-id="${user._id}"]`)
        userNode.onclick = async e => {
            await fetch(`/users/${user._id}`, {
               method: 'DELETE', 
               headers: {
                Authorization: localStorage.getItem('jwt'),
               }
            })
            userNode.parentNode.remove()
            alert('Eliminado con Exito!')
        }
    })
}

//// Listener para el Formulario de Actualización de Pasajeros
 
const addUpdateFormListener = () => {
    const userForm = document.getElementById('user-form');
    userForm.onsubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(userForm);
        const data = Object.fromEntries(formData.entries())
        await fetch('/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('jwt'),
            }
        })
        userForm.reset();
        getUsers();
    }
}

//// Listener para el Formulario de Creación de Pasajeros

const addFormListener = () => {
    const userForm = document.getElementById('user-form');
    userForm.onsubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(userForm);
        const data = Object.fromEntries(formData.entries())
        await fetch('/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('jwt'),
            }
        })
        userForm.reset();
        getUsers();
    }
}

//// Template para Registro

const loadRegisterTemplate = () => {
    const template = `
        <h1>Registro</h1>
            <form id="register-form">
                <div>
                    <label>Correo</label>
                    <input name="email" />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" name="password" />
                </div>
                <button type="submit">Enviar</button>
            </form>
            <a href="#" id="login">Iniciar Sesión</a>
        <div id="error"></div>
        `;
        const body = document.getElementsByTagName('body')[0];
        body.innerHTML = template
}


//// Template para Login

const loadLoginTemplate = () => {
    const template = `
        <h1>Login</h1>
            <form id="login-form">
                <div>
                    <label>Correo</label>
                    <input name="email" />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" name="password" />
                </div>
                <button type="submit">Enviar</button>
            </form>
            <a href="#" id="register">Registrarse</a>
        <div id="error"></div>
    `;

    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = template
}


//// Listener para ir al Formulario de Login

const gotoLoginListener = () => {
    const gotoLogin = document.getElementById('login')
    gotoLogin.onclick = (e) => {
        e.preventDefault()
        loginPage();
    }
}

//// Listener para ir al Formulario de Register

const gotoRegisterListener = () => {
    const gotoRegister = document.getElementById('register')
    gotoRegister.onclick = (e) => {
        e.preventDefault()
        registerPage();
    }
}


//// Listener del Formulario de Login

const addLoginListener = () => {
    const loginForm = document.getElementById('login-form')
    loginForm.onsubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(loginForm)
        const data = Object.fromEntries(formData.entries())

        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const responseData = await response.text()
        if (response.status >= 300) {
            const errorNode = document.getElementById('error')
            errorNode.innerHTML = responseData
        } else {
            localStorage.setItem('jwt', `Bearer ${responseData}`)
            bookingPage()
        }
    }
}

//// Listener del Formulario de Register

const addRegisterListener = () => {
    const registerForm = document.getElementById('register-form')
    registerForm.onsubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(registerForm)
        const data = Object.fromEntries(formData.entries())

        const response = await fetch('/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const responseData = await response.text()
        if (response.status >= 300) {
            const errorNode = document.getElementById('error')
            errorNode.innerHTML = responseData
        } else {
           alert(responseData);
           
            loginPage()
           
            
        }
    }
}

//// Funcion para Almacenar el Login en LocalStorage

const checkLogin = () =>
    localStorage.getItem('jwt');

//// Funcion para ejecutar todas las funciones en Booking Page

const bookingPage = () => {
    loadInitialTemplate()
    addFormListener()
    getUsers()
    searchUsers()
    searchUsersByHotel()
    searchUsersByRoomType()
    searchUsersByDateRange()
    searchUsersByNumPassengers()
    searchUsersByState()
    updateUsersById()
}

//// Funcion para ejecutar todas las funciones en Register Page

const registerPage = () => {
    loadRegisterTemplate()
    addRegisterListener()
    gotoLoginListener()
}

//// Funcion para ejecutar todas las funciones en Login Page

const loginPage = () => {
    loadLoginTemplate()
    addLoginListener()
    gotoRegisterListener()
}

//// Función para Desplegar en Pantalla Booking Page o Login Page si es que esta o no logueado el Usuario

window.onload = () => {
    const isLoggedIn = checkLogin()
    if(isLoggedIn){
        bookingPage()
    } else {
       loginPage()
    }
}
