
export function GetAllVolunteers() {

  const volunteers = [
    {
      "FireBaseCode": "ABC123",
      "Description": "Recolección de basura en parque comunitario",
      "Location": "Parque Central, Ciudad X",
      "VolunteerCode": "VOL001",
      "Details": "Se requiere ayuda para separar los desechos reciclables.",
      "IsPrivate": false,
      "VolunteerDate": "2024-10-22T09:00:00",
      "Image": "https://static.vecteezy.com/system/resources/previews/046/934/664/non_2x/park-by-the-river-photo.jpg"
    },
    {
      "FireBaseCode": "DEF456",
      "Description": "Limpieza de playa",
      "Location": "Playa Azul, Costa Y",
      "VolunteerCode": "VOL002",
      "Details": null,
      "IsPrivate": false,
      "VolunteerDate": "2024-10-23T10:00:00",
      "Image": "https://simcorner.com/cdn/shop/articles/national.jpg?v=1685513251"
    },
    {
      "FireBaseCode": "GHI789",
      "Description": "Reforestación en área natural",
      "Location": "Bosque de la Ciudad Z",
      "VolunteerCode": "VOL003",
      "Details": "Plantación de árboles nativos.",
      "IsPrivate": true,
      "VolunteerDate": "2024-11-01T08:30:00",
      "Image": "https://simcorner.com/cdn/shop/articles/national.jpg?v=1685513251"
    },
    {
      "FireBaseCode": "JKL012",
      "Description": "Limpieza de río",
      "Location": "Río Verde, Ciudad X",
      "VolunteerCode": null,
      "Details": "Actividad organizada por el grupo local de voluntarios.",
      "IsPrivate": false,
      "VolunteerDate": "2024-10-25T07:00:00",
      "Image": "https://example.com/images/reporte4.jpg"
    },
    {
      "FireBaseCode": "MNO345",
      "Description": "Restauración de senderos en parque nacional",
      "Location": "Parque Nacional Montaña Verde",
      "VolunteerCode": "VOL004",
      "Details": "Se recomienda llevar guantes y herramientas básicas.",
      "IsPrivate": false,
      "VolunteerDate": "2024-11-10T09:00:00",
      "Image": "https://example.com/images/reporte5.jpg"
    },
    {
      "FireBaseCode": "MNO345",
      "Description": "Restauración de senderos en parque nacional",
      "Location": "Parque Nacional Montaña Verde",
      "VolunteerCode": "VOL004",
      "Details": "Se recomienda llevar guantes y herramientas básicas.",
      "IsPrivate": false,
      "VolunteerDate": "2024-11-10T09:00:00",
      "Image": "https://example.com/images/reporte5.jpg"
    },
    {
      "FireBaseCode": "MNO345",
      "Description": "Restauración de senderos en parque nacional",
      "Location": "Parque Nacional Montaña Verde",
      "VolunteerCode": "VOL004",
      "Details": "Se recomienda llevar guantes y herramientas básicas.",
      "IsPrivate": false,
      "VolunteerDate": "2024-11-10T09:00:00",
      "Image": "https://example.com/images/reporte5.jpg"
    }
  ]

  return volunteers.map((item) => {
    
    const 
    { 
      FireBaseCode, 
      Description, 
      Image, 
      IsPrivate, 
      VolunteerDate, 
      Location 
    } = item

    return {
      FireBaseCode,
      Description,
      Image,
      VolunteerDate,
      IsPrivate,
      Location
    }
  })
}
