import React, { FC } from 'react';
import styles from './DslApp.module.css';
import {Route, Routes, NavLink, useLocation} from 'react-router-dom';
import Applicant from '../Applicant/Applicant';
import Cosigner from '../Cosigner/Cosigner';
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
      title: 'Student Loans - Applicant'
    },
    {
      path: '/cosigner',
      exact: true,
      element: <Cosigner/>,
      title: 'Student Loans - Co Signer'
    }
  ]


  return (
    <div className={styles.DslApp}>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          DISCOVER STUDENT LOANS
        </Typography>
      </Toolbar>
    </AppBar>
    </Box>
    <Container fixed>
    <Box sx={{ flexGrow: 1 }} className={styles.Content}>
      <Routes>
        {
          routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))
        }
      </Routes>
      </Box>
      </Container>
    </div>
  )
};

export default DslApp;
