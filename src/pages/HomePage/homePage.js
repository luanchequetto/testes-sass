import React, { useContext } from 'react';
import { PageContext } from '../../assets/utils/PageContext';
import ClientsForm from '../../components/ClientsForm/clientsForm';
import DefaultTemplate from '../../templates/defaultTemplate';


function HomePage() {
  const {selectedPage} = useContext(PageContext)
  console.log


  return (
    <DefaultTemplate>
      {selectedPage === 'newClient' ? <ClientsForm/> : <ClientsForm/>}

    </DefaultTemplate>

  );
}

export default HomePage;