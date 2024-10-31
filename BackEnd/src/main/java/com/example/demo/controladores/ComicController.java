package com.example.demo.controladores;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entidades.Comic;
import com.example.demo.servicios.ComicService;


@RestController
@RequestMapping("/api/comics")
public class ComicController {

	private ComicService comicService;

	public ComicController(ComicService comicService) {
		this.comicService = comicService;
	}
	
	@PostMapping("/agregar")
	public ResponseEntity<Comic> agregarComic(@RequestBody Comic comic){
		
		Comic nuevoComic = comicService.agregarComic(comic);
		return new ResponseEntity<>(nuevoComic, HttpStatus.CREATED);
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
