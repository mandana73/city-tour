import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default function Home (){
    return(
        <Hero>
             <Banner title="اتاق های لوکس" subtitle="اتاق های
             لوکس از 300تومان شروع می شوند">
                 <Link to='/rooms' className="btn-primary">
                     اتاق های ما
                 </Link>
             </Banner>
        </Hero>   
    )
}

