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
		
		comicExistente.setTitulo(comic.getTitulo());
		comicExistente.setAutor(comic.getAutor());
		comicExistente.setGenero(comic.getGenero());
		comicExistente.setPrecio(comic.getPrecio());
		comicExistente.setStock(comic.getStock());
		comicExistente.setFecha_publicacion(comic.getFecha_publicacion());
		comicExistente.setRutaImagen(comic.getRutaImagen());
		
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
