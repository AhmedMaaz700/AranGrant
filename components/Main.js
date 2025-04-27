import styles from "./Main.module.css";
import Image from "next/image";
import { Button, TextField, MenuItem, Box, ToggleButton, ToggleButtonGroup, Grid } from "@mui/material";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Main() {
    const router = useRouter();
    const [tripType, setTripType] = useState('roundtrip');
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [departureDate, setDepartureDate] = useState(null);
    const [travelerCount, setTravelerCount] = useState('1');
    const [travelClass, setTravelClass] = useState('Business');

    const handleTripChange = (event, newTrip) => {
        if (newTrip !== null) setTripType(newTrip);
    };

    const handleSubmit = () => {
        localStorage.setItem('bookingData', JSON.stringify({ 
            tripType: tripType,
            from: from, 
            to: to,
            departureDate: departureDate ? departureDate.format('YYYY-MM-DD') : null,
            travelerCount: travelerCount,
            travelClass: travelClass,

        }));
        router.push('/booking');
    }

    return (
      <div className={styles.main}>
        <div className="container">
          <div className={styles.mainContainer}>
            <div className={styles.mainContent}>
              <h1>Business Class Flights</h1>
              <p>Save up to 70%^ on international business class flights</p>
            </div>
            <div className={styles.formContainer}>
              <Box
                sx={{
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <ToggleButtonGroup
                  value={tripType}
                  exclusive
                  onChange={handleTripChange}
                  // sx={{ mb: 2, gap: '12px' }}
                >
                  {["roundtrip", "oneway", "multicity"].map((type) => (
                    <ToggleButton
                      key={type}
                      value={type}
                      disableRipple
                      sx={{
                        textTransform: "none",
                        fontWeight: 600,
                        color: "#fff",
                        backgroundColor: "transparent",
                        border: "1px solid #fff",
                        transition: "all 0.3s ease",
                        "&.Mui-selected": {
                          backgroundColor: "#fff",
                          color: "#171D2E",
                          border: "none",
                          fontWeight: 400,
                          "&:hover": {
                            backgroundColor: "#fff",
                            color: "#171D2E",
                            border: "none",
                          },
                        },
                        "&:hover": {
                          backgroundColor: "transparent",
                          border: "1px solid #fff",
                        },
                      }}
                    >
                      {type === "roundtrip"
                        ? "Round Trip"
                        : type === "oneway"
                        ? "One Way"
                        : "Multi City"}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>

                <Grid container spacing={2} direction="column">
                  {/* 1st row */}
                  <Grid item>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <TextField
                        fullWidth
                        placeholder="From"
                        size="large"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        sx={{ backgroundColor: "#fff", borderRadius: 1 }}
                      />
                      <TextField
                        fullWidth
                        placeholder="To"
                        size="large"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        sx={{ backgroundColor: "#fff", borderRadius: 1 }}
                      />
                    </Box>
                  </Grid>

                  {/* 2nd row */}
                  <Grid item>
                    <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
                      {/* Left half: DatePicker */}
                      <Box sx={{ width: "50%" }} >
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                          <DemoContainer components={["DatePicker"]} sx={{ paddingTop: 0 }}>
                            <DatePicker
                              label="Departure Date"
                              value={departureDate}
                              onChange={(newValue) => setDepartureDate(newValue)}
                              disablePast
                              slotProps={{
                                textField: {
                                  fullWidth: true,
                                  size: "large",
                                  sx: {
                                    backgroundColor: "#fff",
                                    borderRadius: 1,
                                  },
                                },
                              }}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </Box>

                      {/* Right half: Traveler & Business equally */}
                      <Box sx={{ width: "50%", display: "flex", gap: 2 }}>
                        <TextField
                          fullWidth
                          select
                          size="large"
                          value={travelerCount}
                          onChange={(e) => setTravelerCount(e.target.value)}
                          sx={{ backgroundColor: "#fff", borderRadius: 1 }}
                        >
                          <MenuItem value="1">1 Traveler</MenuItem>
                          <MenuItem value="2">2 Travelers</MenuItem>
                          <MenuItem value="3">3 Travelers</MenuItem>
                        </TextField>
                        <TextField
                          fullWidth
                          select
                          size="large"
                          value={travelClass}
                          onChange={(e) => setTravelClass(e.target.value)}
                          sx={{ backgroundColor: "#fff", borderRadius: 1 }}
                        >
                          <MenuItem value="Premium Economy">Premium Economy</MenuItem>
                          <MenuItem value="Business">Business</MenuItem>
                          <MenuItem value="First">First</MenuItem>
                        </TextField>
                      </Box>
                    </Box>
                  </Grid>

                  {/* 3rd row */}
                  <Grid item>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={handleSubmit}
                      sx={{
                        backgroundColor: "#f58426",
                        height: 50,
                        borderRadius: 1,
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "1rem",
                        "&:hover": { backgroundColor: "#e26d00" },
                      }}
                    >
                      Search Flights
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/icons/singapore.svg"
                alt="Singapore Airlines"
                width={100}
                height={60}
              />
              <Image
                src="/icons/emirates.svg"
                alt="Emirates Airlines"
                width={100}
                height={60}
              />
              <Image
                src="/icons/qatar.svg"
                alt="Qatar Airlines"
                width={100}
                height={60}
              />
            </div>
          </div>
        </div>
      </div>
    );
}