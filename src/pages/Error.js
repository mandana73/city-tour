import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default function Error (){
    return(
        <Hero>
        <Banner title='404' subtitle='صفحه مورد نظر شما یافت نشد'>
            <Link to='/' className='btn-primary'>
                بازشگت به خانه
            </Link>
        </Banner>
        </Hero>
    )
}