import {StatusBar } from 'react-native'
import React from 'react'
import Router from './Router'

export default function Home() {
  return (
    <>
      <StatusBar barStyle="light-content" />
       <Router/>
    </>
  )
}