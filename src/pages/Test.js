import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Button from 'antd/es/button'

export default function Home (
    {
    state = {
        loading: false,
        iconLoading: false,
      },
    
      enterLoading = () => {
        this.setState({ loading: true });
      }
    ,
      enterIconLoading = () => {
        this.setState({ iconLoading: true });
      }
      return(
          <Hero>
          
          </Hero>   
          )
          )
}

