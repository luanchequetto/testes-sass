import React, { useContext } from 'react';
import logoGama from '../../assets/logo-gama.png'
import './styles.css'
import { HiPlusCircle, HiUserAdd, HiUserGroup, HiViewList } from 'react-icons/hi'
import { PageContext } from '../../assets/utils/PageContext';

function Header() {

  const pageContext = useContext(PageContext)
  console.log(pageContext)
  return (
    <div className='header-content'>
      <div className='header-logo'>
        <img src={logoGama} atl='logo' className='logo' />
      </div>
      <div className='header-buttons'>
        <div className='btn' onClick={() => pageContext.setSelectedPage('newClient')}><HiUserAdd /> Cadastrar Clientes</div>
        <div className='btn' onClick={() => pageContext.setSelectedPage('listClient')}><HiUserGroup /> Listar Clientes</div>
        <div className='btn' onClick={() => pageContext.setSelectedPage('newProduct')}><HiPlusCircle /> Cadastrar Produtos</div>
        <div className='btn' onClick={() => pageContext.setSelectedPage('listProduct')}><HiViewList /> Listar Produtos</div>
      </div>
    </div>
  );
}

export default Header;