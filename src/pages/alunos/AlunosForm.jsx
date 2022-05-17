import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import apiAcademico from '../../services/apiAcademico'
import { useForm } from 'react-hook-form'

const AlunosForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    function salvar(dados){
        console.log(dados)
    }
    
    return (
        <div>
            <h1>Alunos</h1>
            <Container>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register("nome", {required: 'Campo Obrigatório'})} />
                    {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control  type="number" {...register("cpf", {required: 'Campo Obrigatório'})} />
                    {errors.cpf && <span className="text-danger">{errors.cpf.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Matricula: </Form.Label>
                    <Form.Control type="text" {...register("matricula", {required: 'Campo Obrigatório'})} /> 
                    {errors.matricula && <span className="text-danger">{errors.matricula.message}</span>} 
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="text" {...register("email", {required: 'Campo Obrigatório'})} /> 
                    {errors.email && <span className="text-danger">{errors.email.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control type="number" {...register("telefone", {required: 'Campo Obrigatório'})} /> 
                    {errors.telefone && <span className="text-danger">{errors.telefone.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>CEP: </Form.Label>
                    <Form.Control type="number" {...register("cep", {required: 'Campo Obrigatório'})} /> 
                    {errors.cep && <span className="text-danger">{errors.cep.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Logradouro: </Form.Label>
                    <Form.Control type="text" {...register("logradouro", {required: 'Campo Obrigatório'})} /> 
                    {errors.logradouro && <span className="text-danger">{errors.logradouro.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Complemento: </Form.Label>
                    <Form.Control type="text" {...register("complemento", {required: 'Campo Obrigatório'})} /> 
                    {errors.complemento && <span className="text-danger">{errors.complemento.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Numero: </Form.Label>
                    <Form.Control type="number" {...register("numero", {required: 'Campo Obrigatório'})} /> 
                    {errors.numero && <span className="text-danger">{errors.numero.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Bairro: </Form.Label>
                    <Form.Control type="text" {...register("bairro", {required: 'Campo Obrigatório'})} /> 
                    {errors.bairro && <span className="text-danger">{errors.bairro.message}</span>}
                </Form.Group>
                <div className="text-center">
                    <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
                    <Link to={-1} className='btn btn-danger'><BsArrowLeft /> Voltar</Link>
                </div>
            </Form>
                </Container>
        </div>
    )
}

export default AlunosForm;