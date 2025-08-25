import Image from 'next/image'
import logoLight from '@/assets/images/logo-light.png'
import logoDark from '@/assets/images/logo-dark.png'
import React, { ReactNode } from 'react'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Loader from '@/components/Loader'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import { currentYear } from '@/context/constants'

const layout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <>
      <Loader />
      {children}
    </>
  )
}

export default layout
