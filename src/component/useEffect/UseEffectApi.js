import React, {useEffect , useState}from 'react'

const UseEffectApi = () => {

    const [users, setusers] = useState([])

    const getUsers =async()=>{
      
    const response = await fetch('https://api.github.com/users');
  
   setusers ( await response.json());
 
    }

    useEffect(() => {

        getUsers();
       
    }, [])
    return (
        <>
            <h2>List Of GitHub Users</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                   
                   {
                       users.map((cur)=>{
                           return(
                               <>
                             <div className="col-10 col-md-4 mt-5">
                        <div className="card p-2">
                            <div className="d-flex align-items-center"></div>
                            <div className="image"><img src=""className="rounded" width="155" /></div>
                            <div className="ml-3 w-100"></div>
                            <h4 className="mb-0 mt-0 textleft">{cur.login}</h4><span className="textleft">Web Developer</span>
                            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounder text-white start">{cur.id}</div>
                            <div className="d-flex flex-colum"><span className="articles">{cur.url}</span><span className="number1"></span></div>
                            <div className="d-flex flex-colum"><span className="followers">{cur.html_url}</span><span className="number2"></span></div>
                            <div className="d-flex flex-colum"><span className="rating">{cur.followers_url}</span><span className="number3"></span></div>

                        </div>

                    </div>

                               </>
                           )

                       })
                   }



                   

                </div>
            </div>
        </>
    )
}

export default UseEffectApi;
