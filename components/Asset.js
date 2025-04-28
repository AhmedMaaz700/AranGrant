import Image from "next/image";
import styles from "./Asset.module.css";
import assetData from '../jsons/assetData.json';
import { useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Asset() {
  const isMobile = useMediaQuery("(max-width:1024px)");

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }; 

    return (
      <div className={styles.asset}>
        <div className="container">
          <h2>
            Our customers are our <span>greatest asset</span>
          </h2>
          <div className={styles.subtext1} style={{ gap: "16px" }}>
            <p className={styles.pTag1}>
              Our customers <strong>trust us!</strong>
            </p>
            <div className={styles.subtext2}>
              <div className={styles.starDiv}>
                <p className={styles.pTag2}>Excellent</p>
                <Image
                  src="/icons/stars.svg"
                  alt="stars"
                  width={100}
                  height={30}
                  className={styles.starsImage}
                />
              </div>
              <p>
                Top rated <strong>4.7</strong> out of 5, based on{" "}
                <strong>2,197</strong> reviews
              </p>
            </div>
          </div>

          {isMobile ? (
            <div className={styles.slider}>
              <Slider {...settings} >
                {assetData.map((item, index) => (
                  <div key={index} style={{ marginInline: "1rem" }}>
                    <div className={styles.card}>
                      <div>
                        <Image
                          src="/icons/stars.svg"
                          alt="stars"
                          width={100}
                          height={20}
                          style={{ marginBottom: "1rem" }}
                        />
                        <p className={styles.title}>{item.title}</p>
                        <p className={styles.content}>{item.content}</p>
                        <p className={styles.date}>{item.date}</p>
                      </div>
                      <div className={styles.imgContainer}>
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={50}
                          height={50}
                          className={styles.img}
                        />
                        <p className={styles.client}>{item.client}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className={styles.cardContainer}>
              {assetData.map((item, index) => (
                <div key={index} className={styles.card}>
                  <div>
                    <Image
                      src="/icons/stars.svg"
                      alt="stars"
                      width={100}
                      height={20}
                      style={{ marginBottom: "1rem" }}
                    />
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.content}>{item.content}</p>
                    <p className={styles.date}>{item.date}</p>
                  </div>
                  <div className={styles.imgContainer}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={50}
                      height={50}
                      className={styles.img}
                    />
                    <p className={styles.client}>{item.client}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
}