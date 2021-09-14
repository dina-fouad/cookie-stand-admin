import Head from 'next/head'
import { useState } from 'react';



export default function Home() {

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
      
      <header className="p-4 bg-green-600 ">
        <h1 className="">Cookie Stand Admin</h1>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">

        <form className=" green-400 flex-col w-2/3 bg-green-400 mx-auto my-8" onSubmit={cookiehandeler}>
          
          <h1 className="text-center p-4 ">Create Cookie Stand</h1>

          <div className="flex mx-2 my-3">
          <label className="mr-7">Location</label>
            <input name="location" className="flex bg-white-100 "/>
          </div>

          <div className="grid grid-cols-4 place-items-center mt-5 mb-5">
            <div className="col ">
              <label className="min" >Minimum Customers per Hour</label>
              <input name="min" />
            </div>
            <div className="col">
              <label className='max'>Maximum Customers per Hour</label>
              <input name="max" />
            </div>
            <div className="col ">
              <label className='avg'>Average Cookies per Sale</label>
              <input name="avg"/>
            </div>
            <button className=" bg-green-600  ">create</button>
          </div>
      
        </form>
        <h3 className="">Report Table Coming Soon...</h3>

     <div className="mt-5 text-center">
      {
        cookie.map(item => {
            return (
                <p class=" ">{JSON.stringify(item)}</p>
            )
        })
    }

</div>
      </main>
      <footer className="p-5 bg-green-600">
       &copy; 2021
      </footer>
     
    </div>
  )
}