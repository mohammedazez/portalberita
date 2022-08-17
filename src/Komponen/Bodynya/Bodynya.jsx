import React, { useState, useEffect } from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import axios from 'axios'


const Bodynya = () => {
    const [data, setData] = useState([])

    //pake tombol untuk show data
    // const tampilkanBerita = () => {
    //     axios.get("https://newsapi.org/v2/top-headlines?country=id&apiKey=433d6559a40f4b37822ee501e52d8e2b")
    //         .then((response) => {
    //             setData(response.data.articles)
    //         })
    // }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("https://newsapi.org/v2/top-headlines?country=id&apiKey=433d6559a40f4b37822ee501e52d8e2b")
            setData(result.data.articles)
        }
        fetchData()
    })


    return (

        <div className="container">


            {/* tombolnya */}
            {/* <div>
                <button onClick={tampilkanBerita}>Tampilkan Berita</button>
            </div> */}

            
            <div className="container">
                <div className="row mt-5 mb-5 "  >
                    {
                        data.map((value) => {
                            return (
                                <div className="col-3" >
                                    <div className="m-3">
                                        <div className="Card p-4 " style={{ height: '750px', width: '300px', border: '15px solid #07A8CB' }}>
                                            <img src={value.urlToImage} className="card-img-top mb-4 ml-3" style={{ height: '200px', width: '220px' }} alt="..." />
                                            <div className="Card-Body" >
                                                <h5 className="Card-Title text-white" >{value.title}</h5>
                                                <p className="Card-Text text-primary" >
                                                    {value.description}
                                                </p>
                                                <a className="btn btn-primary" href={value.url} >View</a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

            </div>
            {/* <div class="row m-3" id="kategori"></div>
            <div class="row me-2 ms-2" id="berita"></div>
                 */}



        </div>
    );

}
export default Bodynya
