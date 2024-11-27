package com.example.demo.entidades;

import java.util.Date;

<<<<<<< HEAD
<<<<<<< HEAD
=======
import jakarta.persistence.Column;
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
=======
import jakarta.persistence.Column;
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Comic {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	private String titulo;
	private String autor;
	private String genero;
	private double precio;
	private int stock;
	private String imagenUrl;
<<<<<<< HEAD
<<<<<<< HEAD

=======
	@Column(length = 1000)
	private String descripcion;
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
=======
	@Column(length = 1000)
	private String descripcion;
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
	

	//private Date fecha_publicacion;
	
	public Comic() {
		
	}

	public Comic(Long id, String titulo, String autor, String genero, double precio, int stock,
<<<<<<< HEAD
<<<<<<< HEAD
			String imagenUrl) {
=======
			String imagenUrl, String descripcion) {
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
=======
			String imagenUrl, String descripcion) {
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
		
		this.id = id;
		this.titulo = titulo;
		this.autor = autor;
		this.genero = genero;
		this.precio = precio;
		this.stock = stock;
		this.imagenUrl = imagenUrl;
<<<<<<< HEAD
<<<<<<< HEAD
		//this.fecha_publicacion = fecha_publicacion;
	}

=======
		this.descripcion = descripcion;
		//this.fecha_publicacion = fecha_publicacion;
	}

=======
		this.descripcion = descripcion;
		//this.fecha_publicacion = fecha_publicacion;
	}

>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
	public String getDescripcion(){
		return descripcion;
	}

	public void setDescripcion(String descripcion){
		this.descripcion = descripcion;
	}

<<<<<<< HEAD
>>>>>>> parent of a21eaebb (Merge branch 'main' of https://github.com/james200327/Webcomic)
=======
>>>>>>> 1c7a41697ae9ab51318e6bcf3efe2e2b8bcc96a7
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public String getImagenUrl() {
	    return imagenUrl;
	}

	public void setImagenUrl(String imagenUrl) {
	    this.imagenUrl = imagenUrl;
	}
	
	
	
	
}
