persona = {
    nombre: marian
    direccion: {
        calle: rivadavia
        numero: 123
    }
}


tablas
------

# Personas

| id | nombre | direccion |
|=========================|
| 1  | marian | 5         |

# Direcciones

| id | calle     | numero |
|=========================|
| 5  | rivadavia | 123    |


# Consulta 
select nombre, calle, numero from personas JOIN direcciones on personas.direccion = direcciones.id


| nombre | calle     | numero |
|=============================|
| marian | rivadavia | 123    |

