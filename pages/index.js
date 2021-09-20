import Head from 'next/head'
import { useState } from 'react';
import { useAuth } from '../contexts/auth'
import CookieStandAdmin from '../components/CookieStandAdmin';
import LoginForm from '../components/LoginForm';
import useResource from '../hooks/useResource'

import Header from '../components/Header.js';


export default function Home() {

  const { user, login, logout } = useAuth();
  const { resources, loading, createResource, deleteResource } = useResource();

  return (
    <div className="bg-green-50 ">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Cookie Stand Admin" />

      {user ? (
        <>
          <CookieStandAdmin />
        </>
      ) : (
        <>
          <LoginForm />
        </>
      )}

    </div>
  )
}

  
