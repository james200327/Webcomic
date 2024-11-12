package com.example.demo.entidades;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Pedido {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    //@JoinColumn(name = "usuario_id") // Esta columna almacenará el ID del usuario
    private Usuario usuario;

    @OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DetallesPedido> items = new ArrayList<>();

    // Agrega otros atributos del pedido si es necesario, como fecha o estado
    private double total;


    public void agregarProducto(Comic comic, int cantidad) {
        DetallesPedido item = new DetallesPedido();
        item.setComic(comic);
        item.setCantidad(cantidad);
        item.setPrecio(comic.getPrecio());
        items.add(item);
        total += comic.getPrecio() * cantidad;
    }

    public void eliminarProducto(Comic comic) {
        for (DetallesPedido item : items) {
            if (item.getComic().equals(comic)) {
                total -= item.getPrecio() * item.getCantidad();
                items.remove(item);
                break;
            }
        }
    }

    public void confirmarPedido() {
        for (DetallesPedido item : items) {
            Comic Comic = item.getComic();
            Comic.setStock(Comic.getStock() - item.getCantidad());
        }
        items.clear(); // Limpiar el carrito después de confirmar
        total = 0;
    }

    // Getters y setters



    public double getTotal(){
        return total;
    }

    public void setTotal(double total){
        this.total = total;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public List<DetallesPedido> getItems() {
        return items;
    }

    public void setItems(List<DetallesPedido> items) {
        this.items = items;
    }
}
