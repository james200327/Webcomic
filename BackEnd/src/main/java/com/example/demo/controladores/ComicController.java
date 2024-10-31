package com.example.demo.controladores;

import java.io.File;
import java.util.Date;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entidades.Comic;
import com.example.demo.servicios.ComicService;


@RestController
@RequestMapping("/api/comics")
public class ComicController {

	private ComicService comicService;

	public ComicController(ComicService comicService) {
		this.comicService = comicService;
	}
	
	public ResponseEntity<String> agregarComic(
	        @RequestParam("titulo") String titulo,
	        @RequestParam("descripcion") String autor,
	        @RequestParam("genero") String genero,
	        @RequestParam("precio") Double precio,
	        @RequestParam("stock") Integer stock,
	        @RequestParam("fechaPubli")Date fechaPubli,
	        @RequestParam("imagen") MultipartFile imagen) {
	    try {
	        // Guardar imagen en el sistema de archivos (o una ruta específica)
	        String imagePath = "/ruta/al/directorio/" + imagen.getOriginalFilename();
	        imagen.transferTo(new File(imagePath));

	        // Crear y guardar el cómic en la base de datos
	        Comic nuevoComic = new Comic();
	        nuevoComic.setTitulo(titulo);
	        nuevoComic.setAutor(autor);
	        nuevoComic.setGenero(genero);
	        nuevoComic.setPrecio(precio);
	        nuevoComic.setStock(stock);
	        nuevoComic.setFecha_publicacion(fechaPubli);
	        nuevoComic.setRutaImagen(imagePath); // guardamos la ruta de la imagen

	        comicService.agregarComic(nuevoComic);

	        return new ResponseEntity<>("Cómic agregado con imagen", HttpStatus.CREATED);
	    } catch (Exception e) {
	        return new ResponseEntity<>("Error al agregar el cómic con imagen", HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	@PostMapping("/modificar/{id}")
	public ResponseEntity<Comic> modificarComic(@PathVariable Long id,@RequestBody Comic comic){
		
		Comic comicModificado = comicService.modificarComic(id, comic);
		return new ResponseEntity<>(comicModificado, HttpStatus.OK);
	}
	
	@PostMapping("/eliminar/{id}")
	public ResponseEntity<Comic> eliminarComic(@PathVariable Long id){
		
		comicService.eliminarComic(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("/todos")
	public ResponseEntity<List<Comic>> obtenerListaComics(){
		
		List<Comic>comics = comicService.obtenerTodosLosComics();
		return new ResponseEntity<>(comics,HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Comic> obtenerComicId(@PathVariable Long id){
		
		 Comic comic = comicService.obtenerComicPorId(id);
	        return new ResponseEntity<>(comic, HttpStatus.OK);
	}
}
