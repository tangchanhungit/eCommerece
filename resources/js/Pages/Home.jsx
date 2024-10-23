import React from 'react'
import Layouts from "../Layouts/Layout";
import Layout from '../Layouts/Layout';

export default function Home ({name}) {
  return (
    <div className='title'>Hello {name} </div>
  )
}

// Home.layout = page => <Layout children = {}/>
