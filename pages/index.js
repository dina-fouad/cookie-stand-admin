import Head from 'next/head'
import { useState } from 'react';

import Header from '../components/Header.js';
import CreateForm from '../components/CreateForm.js';
import ReportTable from '../components/ReportTable.js';
import Footer from '../components/Footer.js'

export default function Home() {

  const[hours,setHours]=useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'])
  const[totals,setTotals]=useState([0])
  const [cookie, setcookie] = useState([]);

  function cookiehandeler(event){

    event.preventDefault();

    const cookie= {
      location: event.target.location.value,
      minCust:event.target.min.value,
      maxCust:event.target.max.value,
      avgCookies:event.target.avg.value
    }

    setcookie(cookies =>[...cookies , cookie])
  }

  return (
    <div className="bg-green-50">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">

        <h3 className="">Report Table Coming Soon...</h3>

     <div className="mt-5 text-center">
      {
        cookie.map(item => {
            return (
                <p class=" ">{JSON.stringify(item)}</p>
            )
        })
    }

    < Footer />

</div>
      </main>
    
     
    </div>
  )
}