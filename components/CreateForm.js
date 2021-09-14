export default function CreateForm(props) {
    return (

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
          )
        }