import Head from 'next/head'
import axios from 'axios'
import { useState } from 'react';
import Header from '../components/Header.js';
import CreateForm from '../components/CreateForm.js';
import ReportTable from '../components/ReportTable.js';
import Footer from '../components/Footer.js'

export default function CookieStandAdmin(props) {

    const[hours,setHours]=useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'])
    const[report,allstores]=useState([])
    const [totals, settotals] = useState([]);
  

    function cookiehandeler(event){

        event.preventDefault();
    
        
         let  minCust=(event.target.min.value)
         let maxCust=(event.target.max.value)
         let avgCookies= (event.target.avg.value)
    
    let sum = 0
        const cookie = {
          location : event.target.location.value,
          sales:hours.map(()=>Math.ceil(avgCookies*(Math.ceil(Math.random()*(maxCust-minCust)+minCust)))),
        }
    
        for (let i=0; i< cookie.sales.length; i++){
          sum=sum+cookie.sales[i]
        }
        cookie.total=sum
        
      allstores([...report,cookie])
      
     
      let totalSum=totals.map((item,idx)=>{
        if (idx===totals.length-1){
            return item + cookie.total
        }
         return item + cookie.sales[idx]
      })
       
     settotals(totalSum)
    
    }
    
    
      // (Math.random() * (max - min + 1) + min) 
    
      return (
        
          <div className="">
            <Head>
              <title>Cookie Stand Admin</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main className=" flex flex-col my-10 justify-center mx-auto h-full items-center">
            <CreateForm cookiehandeler={cookiehandeler}/>
            <ReportTable   
            hours={hours}
              report={report}
              totals={totals}
             />
            </main>
          
            <Footer report={report} />
          </div>
        )

}
