import React, { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const PageContext = createContext()

export const PageProvider = ({children}) =>{
    const [selectedPage, setSelectedPage] = useState('newClient')

    PageProvider.propTypes ={
        children: PropTypes.array,
    }


    return(
        <PageContext.Provider value={{selectedPage, setSelectedPage}}>
            {children}
        </PageContext.Provider>
    )

    
}