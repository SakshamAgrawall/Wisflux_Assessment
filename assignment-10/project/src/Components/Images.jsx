import React, { useState }  from 'react'
import axios from "axios"

const Images = () => {
      const [photo, setPhoto] = useState("")
    const [result, setResult] = useState([])

    const changePhoto = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=lgcwyudFvB-bjLPmS0b9hwnIkssGwY7UHfS90gJjfcw`)
            .then((response) => {
                setResult(response.data.results);
            })
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-3 mb-5 bg-body-tertiary rounded">
  <div className="container-fluid ">
    <a className="navbar-brand" href="..">Unsplash Images</a>
  </div>
</nav>
           <div className='container text-center my-5'>
                <input type="text" className='form-control' placeholder="enter your search"  value={photo} onChange={(x) => {
                    setPhoto(x.target.value)
                }} />
                <button type='submit' onClick={changePhoto} className='btn btn-secondary  my-3'>Search</button>
            </div>

            <div className="container">
                <div className="row text-center text-lg-start">
                    {result.map((value) => {
                        return (
                            <div className="col-lg-3 col-md-5 col-5">
                                    <img className="img-fluid img-thumbnail d-block mb-4 " src={value.urls.regular} alt='' />
                                    <p>{value.description?value.description:"No description"}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
    </>
  )
}

export default Images;