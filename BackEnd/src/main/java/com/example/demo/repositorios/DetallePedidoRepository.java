package com.example.demo.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entidades.DetallesPedido;

public interface DetallePedidoRepository extends JpaRepository<DetallesPedido, Long>{
    
}
