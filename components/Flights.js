import styles from "./Flights.module.css";
import { fontSize, styled } from '@mui/system';
import { useState } from 'react';
import { Tabs, Tab, Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import flightsData from '../jsons/flightsData.json';

const CustomTabs = styled(Tabs)(({ theme }) => ({
    minHeight: 'auto',
    margin: '2rem 0',
    justifyContent: 'center',
    '& .MuiTabs-flexContainer': {
        display: 'flex',
        justifyContent: 'center',
    },
    '& .MuiTabs-indicator': {
        display: 'none',
    },
    [theme.breakpoints.down('480')]: {
      padding: '0 1rem',
    },
}));
  
const CustomTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  minHeight: 'auto',
  fontWeight: 500,
  padding: '6px 16px',
  borderRadius: '10px',
  border: '1px solid #DEE0E7',
  marginRight: theme.spacing(1),
  color: '#333',
  backgroundColor: '#fff',
  '&.Mui-selected': {
      backgroundColor: '#3A3E4A',
      color: '#fff',
      fontWeight: 400,
  },
  [theme.breakpoints.down('480')]: {
    padding: '2px 0 ',
  },
}));

export default function Flights() {
    const tabs = ['Africa', 'Middle East', 'South Asia'];
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const handleChange = (event, newValue) => {
        setSelectedTab(tabs[newValue]);
    };

    const filteredCities = flightsData.filter(city => city.tag === selectedTab);

    return (
      <div className={styles.flights}>
        <div className="container">
          <h2>
            Affordable Business Class <span>Flights</span>
          </h2>
          <p className={styles.pTag}>
            Arangrant’s negotiated contracts and agreements with major airlines
            enable us to provide cheap flights business class, and first-class
            offers with discounts of up to 70%. Our primary goal is to earn
            customer loyalty and trust and establish an enviable reputation for
            quality travel planning &amp; booking service.
          </p>

          <CustomTabs value={tabs.indexOf(selectedTab)} onChange={handleChange}>
            {tabs.map((tab, index) => (
              <CustomTab key={tab} label={tab} />
            ))}
          </CustomTabs>

          <div className={styles.cardsWrapper}>
            {filteredCities.map((city, index) => (
              <Card
                key={index}
                className={styles.card}
                elevation={0}
                sx={{
                  transition: "box-shadow 0.3s ease",
                  "&:hover": {
                    boxShadow:
                      "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  className={styles.cardImage}
                  image={city.img}
                  alt={city.city}
                />
                <CardContent
                  className={styles.cardContent}
                  sx={{
                    padding: "0px",
                    paddingTop: "16px",
                    paddingBottom: "0px",
                    '@media (max-width: 780px)': {                     
                      paddingBottom: "0px !important",
                    },
                  }}
                >
                  <div>
                    <Typography variant="h6" fontWeight={600} fontSize='18px' sx={{
                      '@media (max-width: 780px)': {
                        fontSize: '16px',
                      },
                    }}
                    >{city.city}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{
                      '@media (max-width: 780px)': {
                        fontSize: '13px',
                      },
                    }}>
                      {city.type}
                    </Typography>
                  </div>
                  <div className={styles.bookingDetails}>
                    <Typography variant="h6" fontWeight={600} fontSize='28px' sx={{
                      '@media (max-width: 780px)': {
                        fontSize: '25px',
                      },
                    }}>
                      ₹{city.price.toLocaleString()}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#1a5d1a",
                        "&:hover": { backgroundColor: "#1A7064" },
                      }}
                    >
                      Book
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
}