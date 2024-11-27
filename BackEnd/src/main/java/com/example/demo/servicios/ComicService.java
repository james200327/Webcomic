package com.example.demo.servicios;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entidades.Comic;
import com.example.demo.repositorios.ComicRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ComicService {
	private ComicRepository comicRepository;

	public ComicService(ComicRepository comicRepository) {
		this.comicRepository = comicRepository;
	}
	
	public Comic agregarComic(Comic comic) {
		
		return comicRepository.save(comic);
	}
	
	public Comic modificarComic(Long id, Comic comic) {
		
		Comic comicExistente = comicRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("Comic no encontrado"));
		
<<<<<<< HEAD
		comicExistente.setTitulo(comic.getTitulo());
		comicExistente.setAutor(comic.getAutor());
		comicExistente.setGenero(comic.getGenero());
		comicExistente.setPrecio(comic.getPrecio());
		comicExistente.setStock(comic.getStock());
		//comicExistente.setFecha_publicacion(comic.getFecha_publicacion());
=======
				if (comic.getTitulo() != null && !comic.getTitulo().isEmpty()) {
					comicExistente.setTitulo(comic.getTitulo());
				}
				if (comic.getAutor() != null && !comic.getAutor().isEmpty()) {
					comicExistente.setAutor(comic.getAutor());
				}
				if (comic.getGenero() != null && !comic.getGenero().isEmpty()) {
					comicExistente.setGenero(comic.getGenero());
				}
				if (comic.getPrecio() != 0) {  // Suponiendo que un precio de 0 indica que no se quiere modificar
					comicExistente.setPrecio(comic.getPrecio());
				}
				if (comic.getStock() != 0) {  // Suponiendo que un stock de 0 indica que no se quiere modificar
					comicExistente.setStock(comic.getStock());
				}
				/*if (comic.getDescripcion() != null && !comic.getDescripcion().isEmpty()) {
					comicExistente.setDescripcion(comic.getDescripcion());
				}*/
				if (comic.getImagenUrl() != null && !comic.getImagenUrl().isEmpty()) {
					comicExistente.setImagenUrl(comic.getImagenUrl());
				}

				if (comic.getDescripcion() != null && !comic.getDescripcion().isEmpty()) {
					comicExistente.setDescripcion(comic.getDescripcion());
				}

>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
		
		return comicRepository.save(comicExistente);
	}
	
	public void eliminarComic (Long id) {
		
		if(!comicRepository.existsById(id)) {
			throw new EntityNotFoundException("Comic no encontrado");
		}
		
		comicRepository.deleteById(id);
	}
	
	public List<Comic> obtenerTodosLosComics(){
		
		return comicRepository.findAll();
	}
	
	public Comic obtenerComicPorId(Long id) {
		
		return comicRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("Comic no encontrado"));
	}
	
}
