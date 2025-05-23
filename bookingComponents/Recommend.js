import Image from "next/image";
import styles from "./Recommend.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import sliderData from "../jsons/sliderData.json";
import { Box, useMediaQuery } from '@mui/material';

function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
          borderRadius: "50%",
          width: 40,
          height: 40,
          position: "absolute",
          right: '-70px',
          top: '75%',
          transform: "translateY(-75%)",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        <Image src='/icons/sliderarrow.svg' alt="Prev" width={60} height={60} style={{
        border: "1px solid #DDDEE1",
        borderRadius: "50%",
      }}/>
      </div>
    );
}

function PrevArrow(props) {
const { onClick } = props;
return (
  <div
    onClick={onClick}
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "transparent",
      borderRadius: "50%",
      width: 40,
      height: 40,
      position: "absolute",
      left: '-70px',
      top: '75%',
      transform: "translateY(-75%) rotate(180deg)",
      cursor: "pointer",
      zIndex: 1,
    }}
  >
    <Image
      src="/icons/sliderarrow.svg"
      alt="Prev"
      width={60}
      height={60}
      style={{
        border: "1px solid #DDDEE1",
        borderRadius: "50%",
      }}
    />
  </div>
);
}

export default function Recommend() {
  const isMobile = useMediaQuery("(max-width:780px)");

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: isMobile ? 1 : 2,
      slidesToScroll: isMobile ? 1 : 2,
      arrows: !isMobile,
      dots: !isMobile,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    };    

    return (
      <div className={styles.recommend}>
        <div className="container">
          <div className={styles.heading}>
            <div className={styles.left}>
              <h2>98% of travelers recommend us</h2>
              <p>
                This underlines our commitment to provide total customer
                satisfaction
              </p>
            </div>
            <div className={styles.right}>
              <Image
                src="/icons/toprated.svg"
                alt="toprated"
                width={120}
                height={56}
              />
              <Image
                src="/icons/reviewcenter.svg"
                alt="reviewcenter"
                width={120}
                height={56}
              />
              <Image
                src="/icons/sitejabber.svg"
                alt="sitejabber"
                width={120}
                height={56}
              />
              <Image
                src="/icons/google.svg"
                alt="google"
                width={120}
                height={56}
              />
            </div>
          </div>

          <div className={styles.slider}>
            <Slider {...settings}>
              {isMobile
                ? sliderData
                    .reduce(
                      (rows, key, index) =>
                        (index % 2 === 0
                          ? rows.push([key])
                          : (rows[rows.length - 1].push(key), rows)) && rows,
                      []
                    )
                    .map((pair, idx) => (
                      <div key={idx}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                          }}
                        >
                          {pair.map((item, idx2) => (
                            <div key={idx2} className={styles.card}>
                              <div className={styles.imgContainer}>
                                <Box
                                  sx={{
                                    width: 64,
                                    height: 64,
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                  }}
                                >
                                  <Image
                                    src={item.img}
                                    alt={item.name}
                                    width={64}
                                    height={64}
                                    style={{ objectFit: "cover" }}
                                  />
                                </Box>
                                <div>
                                  <p className={styles.name}>{item.name}</p>
                                  <Image
                                    src="/icons/stars.svg"
                                    alt="stars"
                                    width={100}
                                    height={30}
                                  />
                                </div>
                              </div>
                              <div className={styles.commentContainer}>
                                <div className={styles.blank}></div>
                                <p className={styles.comment}>{item.comment}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                : sliderData.map((item, idx) => (
                    <div key={idx}>
                      <div className={styles.card}>
                        <div className={styles.imgContainer}>
                          <Box
                            sx={{
                              width: 64,
                              height: 64,
                              borderRadius: "50%",
                              overflow: "hidden",
                            }}
                          >
                            <Image
                              src={item.img}
                              alt={item.name}
                              width={64}
                              height={64}
                              style={{ objectFit: "cover" }}
                            />
                          </Box>
                          <div>
                            <p className={styles.name}>{item.name}</p>
                            <Image
                              src="/icons/stars.svg"
                              alt="stars"
                              width={100}
                              height={30}
                            />
                          </div>
                        </div>
                        <div className={styles.commentContainer}>
                          <div className={styles.blank}></div>
                          <p className={styles.comment}>{item.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
            </Slider>
          </div>
        </div>
      </div>
    );
}