import styles from "./Main.module.css";
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import { useState, useEffect } from "react";
import { Typography, TextField, MenuItem, Select, FormControl, InputBase, InputAdornment, useMediaQuery, Box, Button, Modal } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import Image from "next/image";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CustomSelect = styled(Select)(({ theme }) => ({
    color: "#fff",
    backgroundColor: "#343541",
    borderRadius: "8px",
    "& .MuiSelect-outlined": {
      border: "none",
    },
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
}));

const countryCodes = [
    { code: "+1", label: "https://flagsapi.com/US/shiny/64.png" },
    { code: "+91", label: "https://flagsapi.com/IN/shiny/64.png" },
    { code: "+44", label: "https://flagsapi.com/GB/shiny/64.png" },
];
// const countryCodes = [
//     { code: "+1", label: "🇺🇸" },
//     { code: "+91", label: "🇮🇳" },
//     { code: "+44", label: "🇬🇧" },
// ];

export default function Main() { 
    const isMobile = useMediaQuery("(max-width:1200px)");

    const [tripType, setTripType] = useState("");
    const [travelClass, setTravelClass] = useState("");
    const [travelerCount, setTravelerCount] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [departureDate, setDepartureDate] = useState(null);
    const [countryCode, setCountryCode] = useState("+1");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bookingData, setBookingData] = useState(null);
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
      const data = JSON.parse(localStorage.getItem("bookingData"));
      setBookingData(data);
      setOpen(true);
    };
    
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("bookingData"));
        if (storedData) {
          setTripType(storedData.tripType || "");
          setTravelClass(storedData.travelClass || "");
          setTravelerCount(storedData.travelerCount || "");
          setFrom(storedData.from || "");
          setTo(storedData.to || "");
          setDepartureDate(storedData.departureDate ? dayjs(storedData.departureDate) : null);
          setCountryCode(storedData.countryCode || "+1");
          setPhoneNumber(storedData.phoneNumber || "");
          setName(storedData.name || "");
          setEmail(storedData.email || "");
        }
    }, []);

    const saveBookingData = (newData) => {
      const currentData = JSON.parse(localStorage.getItem("bookingData")) || {};
      const updatedData = { ...currentData, ...newData };
      localStorage.setItem("bookingData", JSON.stringify(updatedData));
    };
    
    const handleGetFreeQuote = () => {
      const bookingData = {
        tripType,
        travelClass,
        travelerCount,
        from,
        to,
        departureDate: departureDate ? departureDate.toISOString() : null,
        countryCode,
        phoneNumber,
        name,
        email,
      };
      localStorage.setItem("bookingData", JSON.stringify(bookingData));
      handleOpen();
    };    

    return (
      <div className={styles.main}>
        <div className="container">
          <div className={styles.mainContent}>
            <div className={styles.left}>
              <div className={styles.top}>
                <div className={styles.info}>
                  <div className={styles.leftInfo}>
                    <Box sx={{ textAlign: "center" }}>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          mt: 2,
                          backgroundColor: "#F1C494",
                          color: "#171D2E",
                        }}
                      >
                        Offer Ends on May 7
                      </Button>
                    </Box>
                    <p className={styles.pTag}>
                      {from} - {to}
                    </p>
                    <p className={styles.subtext}>
                      Business Class, Round-Trip, Total
                    </p>
                  </div>
                  <div className={styles.rightInfo}>
                    <Image
                      src="/icons/lowest.svg"
                      alt="lowest"
                      width={80}
                      height={80}
                    />
                    <div>
                      <p className={styles.text}>
                        old price ₹<span>92,898</span>
                      </p>
                      <p className={styles.price}>₹72,460</p>
                    </div>
                  </div>
                </div>

                <div style={{ marginBlock: "22px" }}>
                  <p className={styles.horizontalDivider}></p>
                </div>

                <div className={styles.exclusive}>
                  <Image
                    src="/icons/exclusive.svg"
                    alt="exclusive"
                    width={68}
                    height={33}
                  />
                  <p className={styles.exclusiveprice}>
                    Exclusive Deal Up to 70% Off Online Price
                  </p>
                </div>
              </div>

              <div className={styles.middle}>
                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    height: "2px",
                    width: "33%",
                    marginRight: "2px",
                  }}
                ></div>
                <Typography
                  sx={{
                    color:
                      "color-mix(in srgb, #FFFFFF calc((calc(calc(0.08 * 1000) / 100) * 100%)), transparent)",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "1.5",
                    textAlign: "center",
                    textTransform: "uppercase",
                  }}
                >
                  Other deals to {to}
                </Typography>
                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    height: "2px",
                    width: "33%",
                    marginLeft: "2px",
                  }}
                ></div>
              </div>

              <div className={styles.bottom}>
                <div className={styles.airlineCard}>
                  <div className={styles.cardLeft}>
                    <Image
                      src="/icons/emirates.svg"
                      alt="Emirates Airlines"
                      width={100}
                      height={60}
                    />
                    <p className={styles.name}>Emirates</p>
                  </div>
                  <div className={styles.cardRight}>
                    <p className={styles.details}>Business class, RT, total</p>
                    <p className={styles.pricing}>₹ 83,913</p>
                  </div>
                </div>
                <div className={styles.airlineCard}>
                  <div className={styles.cardLeft}>
                    <Image
                      src="/icons/qatar.svg"
                      alt="Qatar Airlines"
                      width={100}
                      height={60}
                    />
                    <p className={styles.name}>Emirates</p>
                  </div>
                  <div className={styles.cardRight}>
                    <p className={styles.details}>Business class, RT, total</p>
                    <p className={styles.pricing}>₹ 72,460</p>
                  </div>
                </div>
                <div className={styles.airlineCard}>
                  <div className={styles.cardLeft}>
                    <Image
                      src="/icons/singapore.svg"
                      alt="Singapore Airlines"
                      width={100}
                      height={60}
                    />
                    <p className={styles.name}>Emirates</p>
                  </div>
                  <div className={styles.cardRight}>
                    <p className={styles.details}>Business class, RT, total</p>
                    <p className={styles.pricing}>₹ 132,282</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <Box
                borderRadius={4}
                sx={{
                  width: "100%",
                  padding: "24px 40px",
                  margin: "auto",
                  '@media (max-width: 600px)': {
                    padding: "16px 16px",
                  },
                }}
              >
                <Stack spacing={2}>
                  {isMobile ? (
                    <div className={styles.requestCall}>
                      <Stack
                        sx={{ textAlign: "center", paddingBottom: "15px" }}
                      >
                        <Typography
                          sx={{
                            color: "#FFF",
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "1.3",
                            textTransform: "uppercase",
                          }}
                        >
                          Request a Callback
                        </Typography>
                        <Typography
                          sx={{
                            color: "#FFF",
                            fontWeight: "500",
                            fontSize: "14px",
                            lineHeight: "1.3",
                          }}
                        >
                          Enter phone number to get a callback
                        </Typography>
                      </Stack>
                    </div>
                  ) : (
                    <div className={styles.callOption}>
                      <Stack>
                        <Typography
                          sx={{
                            color: "#FFF",
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "1.2",
                            textTransform: "uppercase",
                          }}
                        >
                          Call Us Now
                        </Typography>
                        <Typography
                          sx={{
                            color: "#F1C494",
                            fontWeight: "600",
                            fontSize: "16px",
                            lineHeight: "1.2",
                            textTransform: "uppercase",
                          }}
                        >
                          Save Up To 70% Off
                        </Typography>
                      </Stack>
                      <Button
                        variant="contained"
                        startIcon={<PhoneIcon />}
                        sx={{
                          backgroundColor: "transparent",
                          color: "#F1C494",
                          border: "1px solid #F1C494",
                          fontWeight: 700,
                          fontSize: "16px",
                          paddingX: 3,
                          paddingY: 2,
                        }}
                      >
                        +18336190908
                      </Button>
                    </div>
                  )}
                  <div className={styles.subtext}>
                    <div
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        height: "2px",
                        width: "16px",
                        marginRight: "2px",
                      }}
                    ></div>
                    <Typography
                      sx={{
                        color:
                          "color-mix(in srgb, #FFFFFF calc((calc(calc(0.08 * 1000) / 100) * 100%)), transparent)",
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "1.3",
                        textAlign: "center",
                      }}
                    >
                      Or fill out the form and our agent will contact you
                    </Typography>
                    <div
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        height: "2px",
                        width: "16px",
                        marginLeft: "2px",
                      }}
                    ></div>
                  </div>
                  <FormControl fullWidth variant="outlined">
                    <div className={styles.displayNone}>
                      <div className={styles.dropdowns}>
                        <CustomSelect
                          value={tripType}
                          onChange={(e) => {
                            setTripType(e.target.value);
                            saveBookingData({ tripType: e.target.value });
                          }}
                          displayEmpty
                          MenuProps={{
                            PaperProps: {
                              sx: {
                                backgroundColor: "#fff",
                                color: "#000",
                                borderRadius: 2,
                              },
                            },
                          }}
                          input={<InputBase />}
                          sx={{
                            flex: 1,
                            height: 40,
                            paddingLeft: 1,
                          }}
                        >
                          <MenuItem value="roundtrip">Round Trip</MenuItem>
                          <MenuItem value="oneway">One Way</MenuItem>
                          <MenuItem value="multicity">Multi City</MenuItem>
                        </CustomSelect>
                        <CustomSelect
                          value={travelerCount}
                          onChange={(e) => {
                            setTravelerCount(e.target.value);
                            saveBookingData({ travelerCount: e.target.value });
                          }}
                          displayEmpty
                          MenuProps={{
                            PaperProps: {
                              sx: {
                                backgroundColor: "#fff",
                                color: "#000",
                                borderRadius: 2,
                              },
                            },
                          }}
                          input={<InputBase />}
                          sx={{
                            flex: 1,
                            height: 40,
                            paddingLeft: 1,
                          }}
                        >
                          <MenuItem value="1">1 Traveler</MenuItem>
                          <MenuItem value="2">2 Travelers</MenuItem>
                          <MenuItem value="3">3 Travelers</MenuItem>
                        </CustomSelect>
                        <CustomSelect
                          value={travelClass}
                          onChange={(e) => {
                            setTravelClass(e.target.value);
                            saveBookingData({ travelClass: e.target.value });
                          }}
                          displayEmpty
                          MenuProps={{
                            PaperProps: {
                              sx: {
                                backgroundColor: "#fff",
                                color: "#000",
                                borderRadius: 2,
                              },
                            },
                          }}
                          input={<InputBase />}
                          sx={{
                            flex: 1,
                            height: 40,
                            paddingLeft: 1,
                          }}
                        >
                          <MenuItem value="Premium Economy">
                            Premium Economy
                          </MenuItem>
                          <MenuItem value="Business">Business</MenuItem>
                          <MenuItem value="First">First</MenuItem>
                        </CustomSelect>
                      </div>
                      <Box
                        sx={{ display: "flex", gap: 2, marginBottom: "8px" }}
                      >
                        <TextField
                          fullWidth
                          placeholder="From"
                          size="large"
                          value={from}
                          onChange={(e) => {
                            setFrom(e.target.value);
                            saveBookingData({ from: e.target.value });
                          }}
                          sx={{
                            backgroundColor: "#fff",
                            borderRadius: 1,
                          }}
                        />
                        <TextField
                          fullWidth
                          placeholder="To"
                          size="large"
                          value={to}
                          onChange={(e) => {
                            setTo(e.target.value);
                            saveBookingData({ to: e.target.value });
                          }}
                          sx={{
                            backgroundColor: "#fff",
                            borderRadius: 1,
                          }}
                        />
                      </Box>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                          components={["DatePicker"]}
                          sx={{
                            paddingTop: 0,
                            marginBottom: "10px",
                            cursor: "pointer",
                          }}
                        >
                          <DatePicker
                            label="Departure Date"
                            value={departureDate}
                            onChange={(newValue) => {
                              setDepartureDate(newValue);
                              saveBookingData({
                                departureDate: newValue
                                  ? newValue.toISOString()
                                  : null,
                              });
                            }}
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
                    </div>

                    <Box sx={{ display: "flex", gap: 2, marginBottom: "8px" }}>
                      <TextField
                        fullWidth
                        placeholder="Enter your email"
                        size="large"
                        sx={{
                          backgroundColor: "#fff",
                          borderRadius: 1,
                        }}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          saveBookingData({ email: e.target.value });
                        }}
                      />
                      <TextField
                        fullWidth
                        placeholder="Enter your name"
                        size="large"
                        sx={{
                          backgroundColor: "#fff",
                          borderRadius: 1,
                          "@media (max-width: 1200px)": {
                            display: "none",
                          },
                        }}
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          saveBookingData({ name: e.target.value });
                        }}
                      />
                    </Box>

                    <TextField
                      fullWidth
                      placeholder="70 123 4567"
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                        saveBookingData({ phoneNumber: e.target.value });
                      }}
                      size="large"
                      sx={{
                        backgroundColor: "#fff",
                        borderRadius: 1,
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start" sx={{ gap: 1 }}>
                            <Select
                              value={countryCode}
                              onChange={(e) => {
                                setCountryCode(e.target.value);
                                saveBookingData({ countryCode: e.target.value });
                              }}
                              variant="standard"
                              disableUnderline
                              sx={{
                                ".MuiSelect-select": {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 0.5,
                                  pr: 0,
                                  cursor: "pointer",
                                },
                              }}
                            >
                              {countryCodes.map((option) => (
                                <MenuItem key={option.code} value={option.code}>
                                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Image
                                      src={option.label}
                                      alt={option.code}
                                      width={20}
                                      height={20}
                                    />
                                    {option.code}
                                  </Box>
                                </MenuItem>
                              ))}
                            </Select>
                            <Box
                              sx={{
                                height: 24,
                                width: "1px",
                                backgroundColor: "#ccc",
                                marginLeft: 1,
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Box sx={{ textAlign: "center" }}>
                      <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        sx={{
                          mt: 2,
                          backgroundColor: "#1A7064",
                          textTransform: "none",
                          cursor: "pointer",
                          padding: "14px"
                        }}
                        onClick={handleGetFreeQuote}
                      >
                        Get a Free Quote
                      </Button>
                      <Typography
                        variant="body2"
                        sx={{
                          mt: 2,
                          display: "inline-block",
                          textAlign: "center",
                          lineHeight: 1.3,
                          color:
                            "color-mix(in srgb, #FFFFFF calc((calc(calc(0.08 * 1000) / 100) * 100%)), transparent)",
                          fontSize: "11px",
                        }}
                      >
                        <strong>100% Safe. No purchase required. </strong>I
                        agree to provide my phone number and to be contacted by
                        clicking “Get a Free Quote.” Your{" "}
                        <span
                          style={{
                            textDecoration: "underline",
                            textUnderlineOffset: "2px",
                          }}
                        >
                          privacy
                        </span>{" "}
                        is respected.{" "}
                        <span
                          style={{
                            textDecoration: "underline",
                            textUnderlineOffset: "2px",
                          }}
                        >
                          Terms of Service.
                        </span>
                      </Typography>
                    </Box>
                  </FormControl>
                </Stack>
              </Box>
            </div>
          </div>
          <div className={styles.bottomIcons}>
            <div className={styles.iconsDiv}>
              <div className={styles.icon}>
                <Image
                  src="/icons/confidence.svg"
                  alt="confidence"
                  width={100}
                  height={60}
                />
                <p className={styles.pTag}>
                  Book With <br />
                  Confidence
                </p>
              </div>
              <div className={styles.icon}>
                <Image
                  src="/icons/guarantee.svg"
                  alt="guarantee"
                  width={100}
                  height={60}
                />
                <p className={styles.pTag}>
                  Lowest Fare <br />
                  Guarantee
                </p>
              </div>
            </div>
            <div className={styles.iconsDiv}>
              <div className={styles.icon}>
                <Image
                  src="/icons/callback.svg"
                  alt="callback"
                  width={100}
                  height={60}
                />
                <p className={styles.pTag}>
                  Instant <br />
                  Callback
                </p>
              </div>
              <div className={styles.icon}>
                <Image src="/icons/pay.svg" alt="pay" width={100} height={60} />
                <p className={styles.pTag}>
                  Book Now, <br />
                  Pay Later
                </p>
              </div>
            </div>
            <div className={styles.iconsDiv}>
              <div className={styles.icon}>
                <Image
                  src="/icons/fare.svg"
                  alt="fare"
                  width={100}
                  height={60}
                />
                <p className={styles.pTag}>
                  24 Hours <br />
                  Fare Lock
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              background: "linear-gradient(220deg, #1E1E2B 14.51%, #45455B 85.49%)",
              color: "#fff",
              padding: 4,
              borderRadius: 2,
              maxWidth: 500,
              margin: "auto",
              mt: "10%",
              boxShadow: 24,
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                marginBottom: 2,
                color: "#fff",
                fontSize: "24px",
                fontWeight: 600,
                borderRadius: 1,
              }}
            >
              Booking Data
            </Typography>

            {bookingData ? (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography><strong>Trip Type:</strong> {bookingData.tripType}</Typography>
                <Typography><strong>Travel Class:</strong> {bookingData.travelClass}</Typography>
                <Typography><strong>Traveler Count:</strong> {bookingData.travelerCount}</Typography>
                <Typography><strong>From:</strong> {bookingData.from}</Typography>
                <Typography><strong>To:</strong> {bookingData.to}</Typography>
                <Typography><strong>Departure Date:</strong> {new Date(bookingData.departureDate).toLocaleDateString()}</Typography>
                <Typography><strong>Phone:</strong> {bookingData.countryCode} {bookingData.phoneNumber}</Typography>
                <Typography><strong>Name:</strong> {bookingData.name}</Typography>
                <Typography><strong>Email:</strong> {bookingData.email}</Typography>
              </Box>
            ) : (
              <Typography>No data found...</Typography>
            )}
          </Box>
        </Modal>
      </div>
    );
}