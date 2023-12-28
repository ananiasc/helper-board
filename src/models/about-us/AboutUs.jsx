import './AboutUs.css'
import React from 'react'
import { useTranslation } from 'react-i18next'

function AboutUs() {
  const { i18n, t } = useTranslation()

  return (
    <>
      <h1 className='title'>{t('aboutUs')}</h1>
    </>
  )
}

export default AboutUs
