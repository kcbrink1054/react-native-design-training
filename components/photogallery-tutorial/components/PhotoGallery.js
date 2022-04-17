import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import MidSection from './MidSection'
import Body from './Body'

export default function PhotoGallery() {
  return (
    <>
      <Header/>
      <MidSection/>
      <Body/>
    </>
  )
}

const styles = StyleSheet.create({})