package com.example.demo.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entidades.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido,Long>{

    
}
