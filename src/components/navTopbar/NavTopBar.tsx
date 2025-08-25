'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import logoLight from '@/assets/images/logo-light.png'
import logoDark from '@/assets/images/logo-dark.png'
import useScrollEvent from '@/hooks/useScrollEvent'
import IconifyIcon from '../wrappers/IconifyIcon'
import { Container, Nav, Navbar, NavbarCollapse, NavbarToggle, NavItem, NavLink } from 'react-bootstrap'
import Link from 'next/link'
import Gumshoe from 'gumshoejs'

const NavTopBar = ({ isDark }: { isDark?: boolean }) => {
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (navRef.current) new Gumshoe('.navbar-nav a')
  }, [])

  const { scrollY } = useScrollEvent()

  return (
    <Navbar
      expand={'lg'}
      ref={navRef}
      className={` fixed-top navbar-custom sticky-dark ${isDark && 'navbar-dark'} ${scrollY > 50 && 'nav-sticky'} `}
      id="navbar-sticky">
      <Container>
        <Link className="logo text-uppercase" href="/">
          <Image src={logoLight} width={168} height={30} alt="logoLight" className="logo-light" style={{ height: 30 }} />
          <Image src={logoDark} width={168} height={30} alt="logoDark" className="logo-dark" style={{ height: 30 }} />
        </Link>
        <NavbarToggle
          aria-controls="basic-navbar-nav"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <IconifyIcon icon="tabler:menu" />
        </NavbarToggle>
        <NavbarCollapse id="basic-navbar-nav">
          <Nav as={'ul'} className="navbar-nav ms-auto navbar-center" id="mySidenav">
            <NavItem as={'li'}>
              <NavLink as={'a'} href="#home">
                Home
              </NavLink>
            </NavItem>
            <NavItem as={'li'}>
              <NavLink as={'a'} href="#features">
                Features
              </NavLink>
            </NavItem>
            <NavItem as={'li'}>
              <NavLink as={'a'} href="#services">
                Services
              </NavLink>
            </NavItem>
            <NavItem as={'li'}>
              <NavLink as={'a'} href="#testimonial">
                Reviews
              </NavLink>
            </NavItem>
            <NavItem as={'li'}>
              <NavLink as={'a'} href="#team">
                Team
              </NavLink>
            </NavItem>
            <NavItem as={'li'}>
              <NavLink as={'a'} href="#pricing">
                Pricing
              </NavLink>
            </NavItem>
            <NavItem as={'li'}>
              <NavLink as={'a'} href="#contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <button className="btn btn-sm btn-primary ms-4">Create Account</button>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

export default NavTopBar
