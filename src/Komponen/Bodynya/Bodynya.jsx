import React, { useState, useEffect } from "react";

import Nav from "react-bootstrap/Nav";

// import Navbarnya from "../Navbarnya/Navbarnya";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import axios from "axios";

const Bodynya = () => {
  const [data, setData] = useState([]);
  const [kategori, setKategori] = useState("");

  //import dropdown Kateogri Berita dari
  const API_KEY = "1bd110aff3464ecf82b4c5890acdad2a";
  
 
  
 
  
  

  useEffect(() => {
    if (kategori === "headline") {
        const HEADLINES_NEWS =
    "https://newsapi.org/v2/top-headlines?country=id&apiKey=" + API_KEY;
      axios
        .get(HEADLINES_NEWS)
        .then((res) => {
          setData(res.data.articles);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setKategori("");
        });
    } else if (kategori === "sport") {
        const SPORTS_NEWS =
        "https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=" +
        API_KEY;
      axios
        .get(SPORTS_NEWS)
        .then((res) => {
          setData(res.data.articles);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setKategori("");
        });
    } else if (kategori === "business") {
        const BUSINESS_NEWS =
    "https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=" +
    API_KEY;
      axios
        .get(BUSINESS_NEWS)
        .then((res) => {
          setData(res.data.articles);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setKategori("");
        });
    } else if (kategori === "entertainment") {
        const ENTERTAINMENT_NEWS =
        "https://newsapi.org/v2/top-headlines?country=id&category=entertainment&apiKey=" +
        API_KEY;
      axios
        .get(ENTERTAINMENT_NEWS)
        .then((res) => {
          setData(res.data.articles);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setKategori("");
        });
    } else if (kategori === "health") {
        const HEALTH_NEWS =
    "https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=" +
    API_KEY;
      axios
        .get(HEALTH_NEWS)
        .then((res) => {
          setData(res.data.articles);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setKategori("");
        });
    } else if (kategori === "technology") {
        const TECHNOLOGY_NEWS =
    "https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=" +
    API_KEY;
      axios
        .get(TECHNOLOGY_NEWS)
        .then((res) => {
          setData(res.data.articles);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setKategori("");
        });
    }
  }, [kategori]);

  //buat default tampilan HEADLINE NEWS
  useEffect(() => {
    const HEADLINES_NEWS =
    "https://newsapi.org/v2/top-headlines?country=id&apiKey=" + API_KEY;
    axios
      .get(HEADLINES_NEWS)
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setKategori("");
      });
  }, []);

  //handle sport true ,maka useEffect akan mengambil data dari sport
  const handleSport = () => {
    setKategori("sport");
  };
  //handle business true ,maka useEffect akan mengambil data dari business
  const handleBusiness = () => {
    setKategori("business");
  };
  //handle entertainment true ,maka useEffect akan mengambil data dari entertainment
  const handleEntertainment = () => {
    setKategori("entertainment");
  };
  //handle health true ,maka useEffect akan mengambil data dari health
  const handleHealth = () => {
    setKategori("health");
  };
  //handle technology true ,maka useEffect akan mengambil data dari technology
  const handleTechnology = () => {
    setKategori("technology");
  };
  //handle headline true ,maka useEffect akan mengambil data dari headline
  const handleHeadline = () => {
    setKategori("headline");
  };

  //pake tombol untuk show data
  // const tampilkanBerita = () => {
  //     axios.get("https://newsapi.org/v2/top-headlines?country=id&apiKey=433d6559a40f4b37822ee501e52d8e2b")
  //         .then((response) => {
  //             setData(response.data.articles)
  //         })
  // }

  return (
    <div className="container">
      {/* pencarian */}
      {/* <div className="row">
                <div className="col-10 mx-auto">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleShowAll}>Search</button>
                    </form>
                </div>
            </div> */}
      <div className="container text-center mt-5 ">
        <Nav
          className="text-white tabsnya"
          fill
          variant="tabs"
          defaultActiveKey="/home"
          style={{
            backgroundImage: "linear-gradient(to right,#0E0C58, #0C3458)",
          }}
        >
          <Nav.Item>
            <Nav.Link
              className="text-primary Ini"
              href="/home"
              onClick={handleHeadline}
            >
              HeadLine News
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-primary Ini"
              eventKey="sport"
              onClick={handleSport}
            >
              Aksi & Olahraga
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-primary Ini"
              eventKey="business"
              onClick={handleBusiness}
            >
              Bisnis
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-primary Ini"
              eventKey="entertainment"
              onClick={handleEntertainment}
            >
              Hiburan
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-primary Ini"
              eventKey="kesehatan"
              onClick={handleHealth}
            >
              Kesehatan
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-primary Ini"
              eventKey="technology"
              onClick={handleTechnology}
            >
              Teknologi
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      {/* tombolnya */}
      {/* <div>
                <button onClick={handleSport}>Tampilkan Berita</button>
            </div> */}

      <div className="container">
        <div className="row mt-5 mb-5 ">
          {data.map((value) => {
            return (
              <div className="col-3">
                <div className="m-3">
                  <div
                    className="Card p-4 "
                    style={{
                      height: "750px",
                      width: "300px",
                      border: "15px solid #07A8CB",
                    }}
                  >
                    <img
                      src={value.urlToImage}
                      className="card-img-top mb-4 ml-3"
                      style={{ height: "200px", width: "220px" }}
                      alt="..."
                    />
                    <div className="Card-Body">
                      <h5 className="Card-Title text-warning ">
                        {value.title}
                      </h5>
                      <h6 className="mt-2 mb-2 Card-Subtitle text-primary">
                        {value.publishedAt}
                      </h6>
                      <p className="Card-Text text-white">
                        {value.description}
                      </p>
                      <a
                        className="btn btn-primary"
                        href={value.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Bodynya;

// export {handleSport} from './Bodynya'
