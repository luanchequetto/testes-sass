import React, { useState } from 'react';
import PropTypes from 'prop-types'
import FormInput from '../FormInput/formInput';



function ClientsForm() {

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [contato, setContato] = useState('')
  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')




  return (
    <div>
      <h1>Cadastrar Cliente</h1>
      <form>
        <FormInput
          type='text'
          placeholder='Digite seu nome'
          value={nome}
          setFunc={setNome}
          title='Nome'
        />
        <FormInput
          type='text'
          placeholder='Digite seu email'
          value={email}
          setFunc={setEmail}
          title='E-mail'
        />
        <FormInput
          type='number'
          placeholder='Digite seu contato'
          value={contato}
          setFunc={setContato}
          title='Contato'
        />
        <h3>Endereço</h3>
        <FormInput
          type='text'
          placeholder='Digite sua rua'
          value={rua}
          setFunc={setRua}
          title='Rua'
        />
        <FormInput
          type='number'
          placeholder='Digite o número'
          value={numero}
          setFunc={setNumero}
          title='Número'
        />
        <FormInput
          type='text'
          placeholder='Digite um complemento/referência'
          value={complemento}
          setFunc={setComplemento}
          title='Complemento'
        />
        <FormInput
          type='text'
          placeholder='Digite o bairro'
          value={bairro}
          setFunc={setBairro}
          title='Bairro'
        />
        <FormInput
          type='text'
          placeholder='Digite sua cidade'
          value={cidade}
          setFunc={setCidade}
          title='Cidade'
        />
        <FormInput
          type='text'
          placeholder='Digite seu estado'
          value={estado}
          setFunc={setEstado}
          title='Estado'
        />


      </form>

    </div>
  );
}

export default ClientsForm;