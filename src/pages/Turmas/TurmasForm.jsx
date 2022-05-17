import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import apiAcademico from '../../services/apiAcademico'
import { useForm } from 'react-hook-form'

const TurmasForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    function salvar(dados){
        console.log(dados)
    }

    return (
        <div>
            <h1>Turmas</h1>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register("nome", {required: 'Campo Obrigatório'})} />
                    {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Capacidade: </Form.Label>
                    <Form.Control type="number" {...register("capacidade", {required: 'Campo Obrigatório'})} />
                    {errors.capacidade && <span className="text-danger">{errors.capacidade.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Tipo: </Form.Label>
                    <Form.Control type="text" {...register("tipo", {required: 'Campo Obrigatório'})} />
                    {errors.tipo && <span className="text-danger">{errors.tipo.message}</span>}
                </Form.Group>
                <div className="text-center">
                    <Button onClick={handleSubmit(salvar)}><FaCheck /> Salvar</Button>{' '}
                    <Link to={-1} className='btn btn-danger'><BsArrowLeft />  Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default TurmasForm