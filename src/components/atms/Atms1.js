export const Atms = ()=>{
    let coordenadas;
    document.addEventListener('click',()=>{
        coordenadas = funcionInit()
    })
    //getAllAtms()

    return(
        <>
            <button onClick={()=>{getAllAtms(coordenadas)}}>TODOS LOS ATMS</button>

        </>
    )
}

const getAllAtms = async (coordenadas)=>{
    const datos = await fetch(`http://localhost:8080/atm/${coordenadas.coords.latitude}/${coordenadas.coords.longitude}`,{
        method: 'GET',/* 
        headers:{
            'Content-Type': 'application/json',
            'Authorization': "jwt eyJ6aXAiOiJERUYiLCJlbmMiOiJBMTI4R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.gEtd6CUojrDiuYTRe4dQU3XgNOdmvZ-SRFUtNt3hPnWVg-8BxHVTccUmZ2apS6j1MOHZ6PMXlQhXJfn7l8_z-R6yCe4nP6J2-Ou2Bb4AXGsXV9yT-8BaaUnRStSBjhyMiaHeCXzRHZGsWHLcEdxWtfWU0bABn-xmX9wIibg45-9W-Jc6BV4tjFGyB7DsTfWWZb3yctAuVNV1irrVzOVkQBd2RAMVR2CjMPHf7B2-ux1xCgGfPKEgC1ZRyFTZYDSZp7Jwx3Bq65cv9sUr9VG2ceZ5ZGh5okj0I4UKe_JlJHeBUlv3dlqtKYgyFxQWeHBpKKgSPVI4Q5wf6tD-xtkZdg.hp6PTDVNAUssc5wQ.WtP7fFZWXWQIX4OQs0DOo62f-CiDiqhm3TC9ggX70EyXVIMeKY6PoClfpk2rZnaiUb0xYpa3l4CQnBrzRdQHmrwM0qgTUz3wjWtWcSkZW0F6ctiQuhI30tx1hNV2mDkSyPCdGczl_RaJRovVXLa513KQ5qpnimW0IsS3hEtViPOLMXFu9NBj0n48LaE0ipe2rvWF1ais22D0Y7CKHojIqjyOA4nx83s8-KbdQN9eezjJLrImQcEY2g5mMs8pN3NDplUOAyUl5ggREz8Pd2t4WSoLyje-rRWFgf5eCH0_.gEl4enYCm5HwXcXadsK6Zw",
        } */
    })

    const respuesta = await datos.json()
    console.log("TODOS LOS DATOS ", respuesta.coords)
}

const funcionInit = () => {
	if (!"geolocation" in navigator) {
		return alert("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
	}

	const onUbicacionConcedida = ubicacion => {
		console.log("Tengo la ubicación: ", ubicacion.coords.latitude, ubicacion.coords.longitude);
        return(ubicacion)
	}
  
	const onErrorDeUbicacion = err => {
		//console.log("Error obteniendo ubicación: ", err);
	}

	const opcionesDeSolicitud = {
		enableHighAccuracy: true, // Alta precisión
		maximumAge: 0, // No queremos caché
		timeout: 5000 // Esperar solo 5 segundos
	};
	// Solicitar
	navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onErrorDeUbicacion, opcionesDeSolicitud);

};