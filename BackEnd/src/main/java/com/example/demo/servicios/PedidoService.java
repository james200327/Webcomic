package com.example.demo.servicios;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.entidades.Comic;
import com.example.demo.entidades.DetallesPedido;
import com.example.demo.entidades.Pedido;
import com.example.demo.entidades.Usuario;
import com.example.demo.repositorios.ComicRepository;
import com.example.demo.repositorios.PedidoRepository;
import com.example.demo.repositorios.UsuarioRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class PedidoService {

    private PedidoRepository pedidoRepository;
    private ComicService comicService;

    
    public PedidoService(PedidoRepository pedidoRepository, ComicService comicService) {
        this.pedidoRepository = pedidoRepository;
        this.comicService = comicService;
    }

    public Pedido crearPedido(Usuario usuario) {
       
        Pedido pedido = new Pedido();
        pedido.setUsuario(usuario);
        return pedidoRepository.save(pedido);
    }

    public Pedido agregarProducto(Long pedidoId, Long productoId, int cantidad) {
        Pedido pedido = pedidoRepository.findById(pedidoId)
                .orElseThrow(() -> new EntityNotFoundException("Pedido no encontrado"));
        Comic comic = comicService.obtenerComicPorId(productoId);
        pedido.agregarProducto(comic, cantidad);
        return pedidoRepository.save(pedido);
    }

    public Pedido eliminarProducto(Long pedidoId, Long productoId) {
        Pedido pedido = pedidoRepository.findById(pedidoId)
                .orElseThrow(() -> new EntityNotFoundException("Pedido no encontrado"));
        Comic comic = comicService.obtenerComicPorId(productoId);
        pedido.eliminarProducto(comic);
        return pedidoRepository.save(pedido);
    }

    public Pedido confirmarPedido(Long pedidoId) {
        Pedido pedido = pedidoRepository.findById(pedidoId)
                .orElseThrow(() -> new EntityNotFoundException("Pedido no encontrado"));
        pedido.confirmarPedido();
        return pedidoRepository.save(pedido);
    }
}
