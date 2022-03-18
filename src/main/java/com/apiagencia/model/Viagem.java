package com.apiagencia.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;


@Data
@Entity
public class Viagem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(nullable = false)
	private String nome;
	
	@Column(nullable = false, unique = true)
	private String email;
	
	@Column(nullable=false, length=11, unique = true)
	private String cpf;
	
	@Column(nullable=true)
	private String destinoViagem;
	
	@Column(nullable=true)
	private String preco;
	
	
}
