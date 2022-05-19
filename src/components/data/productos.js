export const products = [
  {
    "id": 1,
    "nombre": "cort stratocaster",
    "stock": 10,
    "precio": 75800,
    "imagen": "imagen/descarga1.jpg",
    "categoria": "guitarra"
  },
  {
    "id": 2,
    "nombre": "Fender telecarter",
    "stock": 3,
    "precio": 450000,
    "imagen": "imagen/images2.jpg",
    "categoria": "guitarra"
  },
  {
    "id": 3,
    "nombre": "Gibson lp",
    "stock": 10,
    "precio": 450000,
    "imagen": "imagen/images3.jpg",
    "categoria": "guitarra"
  },
  {
    "id": 4,
    "nombre": "Ltd",
    "stock": 9,
    "precio": 120000,
    "imagen": "imagen/images.jpg",
    "categoria": "guitarra"
  },
  {
    "id": 5,
    "nombre": "Amplificador Marshall",
    "stock": 5,
    "precio": 125000,
    "imagen": "imagen/descarga2.jpg",
    "categoria": "amplificador"
  },
  {
    "id": 6,
    "nombre": "Head rush",
    "stock": 3,
    "precio": 120000,
    "imagen": "imagen/descarga5.jpg",
    "categoria": "pedalera"
  },
  {
    "id": 7,
    "nombre": "Amplificador Fender 60ac",
    "stock": 8,
    "precio": 90000,
    "imagen": "imagen/images4.jpg",
    "categoria": "amplicador"
  },
  {
    "id": 8,
    "nombre": "Amplificador Fender 100",
    "stock": 8,
    "precio": 140000,
    "imagen": "imagen/images6.jpg",
    "categoria": "amplicador"
  }
];
export const getProducts = new Promise((resolve, reject) => {
  let condition = true
  if (condition) {
    setTimeout(() => {
      resolve(products)
    }, 2000);
  } else {
    reject('no me sale')
  }
})


