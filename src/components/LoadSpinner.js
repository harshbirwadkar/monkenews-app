import React, { Component } from 'react'
import loadspinner from './Spinner.gif'

const LoadSpinner = ()=> {
        return (
            <div className='text-center'>
                <img src={loadspinner} alt="" height={"50px"} width={"50px"}/>
            </div>
        )
}

export default LoadSpinner