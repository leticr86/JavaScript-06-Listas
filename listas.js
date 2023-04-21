// Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra = ['Leche', 'Pan', 'Huevos', 'Frutas', 'Verduras'];

// Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push('Aceite de Girasol');

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculas = [
  {titulo: 'El Padrino', director: 'Francis Ford Coppola', fecha: '1972'},
  {titulo: 'El Caballero de la Noche', director: 'Christopher Nolan', fecha: '2008'},
  {titulo: 'El Gran Hotel Budapest', director: 'Wes Anderson', fecha: '2014'}
];

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let peliculasPosteriores2010 = peliculas.filter(pelicula => pelicula.fecha > '2010');

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directores = peliculas.map(pelicula => pelicula.director);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let titulos = peliculas.map(pelicula => pelicula.titulo);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let directoresTitulos = directores.concat(titulos);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let directoresTitulosSpread = [...directores, ...titulos];
