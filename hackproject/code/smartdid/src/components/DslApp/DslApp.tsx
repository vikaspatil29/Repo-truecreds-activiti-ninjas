import React, { FC } from 'react';
import styles from './DslApp.module.css';
import {Route, Routes, NavLink, useLocation} from 'react-router-dom';
import Applicant from '../Applicant/Applicant';
import Cosigner from '../Cosigner/Cosigner';
import LoanDetails from '../LoanDetails/LoanDetails';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface DslAppProps {}

const DslApp: FC<DslAppProps> = () => {

  const routes = [
    {
      path: '/',
      exact: true,
      element: <Applicant/>,
      title: 'Student Loans - Student'
    },
    {
      path: '/cosigner',
      exact: true,
      element: <Cosigner/>,
      title: 'Student Loans - CoSigner'
    },
    {
      path: '/loan',
      exact: true,
      element: <LoanDetails/>,
      title: 'Student Loan Details'
    }
  ]


  return (
    <div className={styles.DslApp}>
      <Container fixed>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" sx={{ alignItems: 'center', background: '#E55C20' }} >
      <Toolbar>
        <Typography variant="h5" className={styles.PageHeading} noWrap>
          DISCOVER DIGITAL STUDENT LOAN
        </Typography>
      </Toolbar>
    </AppBar>
    </Box>
    
       <Box sx={{ flexGrow: 1 }} className={styles.Content}>
    {/*
       <article className={styles.AppHeader}>
       <Typography variant="h4" noWrap>
          Discover SmartDID Student Loan
        </Typography>
      </article>
    */}
      <Routes>
        {
          routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element}  />
          ))
        }
      </Routes>
      </Box>
      </Container>
    </div>
  )
};

export default DslApp;
