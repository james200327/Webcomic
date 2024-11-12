package com.example.demo.controladores;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entidades.DetallesPedido;
import com.example.demo.entidades.Pedido;
import com.example.demo.entidades.Usuario;
import com.example.demo.servicios.DetallePedidoService;
import com.example.demo.servicios.PedidoService;

@RestController
@RequestMapping("/api/pedidos")
public class PedidoController {
    
    private PedidoService pedidoService;

    public PedidoController(PedidoService pedidoService) {
        this.pedidoService = pedidoService;
    }

    @PostMapping("/crear")
    public ResponseEntity<Pedido> crearPedido(@RequestBody Usuario usuario) {
        Pedido pedido = pedidoService.crearPedido(usuario);
        return ResponseEntity.ok(pedido);
    }

    @PostMapping("/{pedidoId}/agregarProducto/{productoId}")
    public ResponseEntity<Pedido> agregarProducto(
            @PathVariable Long pedidoId, 
            @PathVariable Long productoId, 
            @RequestParam int cantidad) {

        Pedido pedido = pedidoService.agregarProducto(pedidoId, productoId, cantidad);
        return ResponseEntity.ok(pedido);
    }

    @DeleteMapping("/{pedidoId}/eliminarProducto/{productoId}")
    public ResponseEntity<Pedido> eliminarProducto(
            @PathVariable Long pedidoId, 
            @PathVariable Long productoId) {
        Pedido pedido = pedidoService.eliminarProducto(pedidoId, productoId);
        return ResponseEntity.ok(pedido);
    }

    @PostMapping("/{pedidoId}/confirmar")
    public ResponseEntity<Pedido> confirmarPedido(@PathVariable Long pedidoId) {
        Pedido pedido = pedidoService.confirmarPedido(pedidoId);
        return ResponseEntity.ok(pedido);
    }
}
