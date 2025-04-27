import { Button, Typography } from "@mui/material";
import styles from "./Main.module.css";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import { useState, useEffect } from "react";
import { TextField, MenuItem, Select, FormControl, InputBase, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import Image from "next/image";

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
    { code: "+1", label: "🇺🇸" },
    { code: "+91", label: "🇮🇳" },
    { code: "+44", label: "🇬🇧" },
];

export default function Main() {    
    const [tripType, setTripType] = useState("");
    const [travelClass, setTravelClass] = useState("");
    const [travelerCount, setTravelerCount] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [departureDate, setDepartureDate] = useState(null);
    const [countryCode, setCountryCode] = useState("+1");
    const [phoneNumber, setPhoneNumber] = useState("");

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("bookingData"));
        if (storedData) {
          setTripType(storedData.tripType || "");
          setTravelClass(storedData.travelClass || "");
          setTravelerCount(storedData.travelerCount || "");
          setFrom(storedData.from || "");
          setTo(storedData.to || "");
          setDepartureDate(dayjs(storedData.departureDate));
        }
    }, []);

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
                        sx={{ mt: 2, backgroundColor: "#F1C494", color: '#171D2E' }}
                      >
                        Offer Ends on May 7
                      </Button>
                    </Box>
                    <p className={styles.pTag}>{from} - {to}</p>
                    <p className={styles.subtext}>Business Class, Round-Trip, Total</p>
                  </div>
                  <div className={styles.rightInfo}>
                    <Image
                      src="/icons/lowest.svg"
                      alt="lowest"
                      width={80}
                      height={80}
                    />
                    <div>
                        <p className={styles.text}>old price ₹<span>92,898</span></p>
                        <p className={styles.price}>₹72,460</p>
                    </div>
                  </div>
                </div>
                <div className={styles.exclusive}>
                <Image
                      src="/icons/exclusive.svg"
                      alt="exclusive"
                      width={68}
                      height={33}
                    />
                <p className={styles.exclusiveprice}>Exclusive Deal Up to 70% Off Online Price</p>
                </div>
              </div>
              <div className={styles.bottom}></div>
            </div>
            <div className={styles.right}>
              <Box
                borderRadius={2}
                sx={{
                  width: "100%",
                  maxWidth: "450px",
                  padding: "24px 40px",
                  background:
                    "linear-gradient(220deg, #1E1E2B 14.51%, #45455B 85.49%)",
                  minWidth: "460px",
                  margin: "auto",
                }}
              >
                <Stack spacing={2}>
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
                          onChange={(e) => setTripType(e.target.value)}
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
                          onChange={(e) => setTravelerCount(e.target.value)}
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
                          onChange={(e) => setTravelClass(e.target.value)}
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
                          onChange={(e) => setFrom(e.target.value)}
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
                          onChange={(e) => setTo(e.target.value)}
                          sx={{
                            backgroundColor: "#fff",
                            borderRadius: 1,
                          }}
                        />
                      </Box>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                          components={["DatePicker"]}
                          sx={{ paddingTop: 0, marginBottom: "10px" }}
                        >
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
                      />
                      <TextField
                        fullWidth
                        placeholder="Enter your name"
                        size="large"
                        sx={{
                          backgroundColor: "#fff",
                          borderRadius: 1,
                        }}
                      />
                    </Box>

                    <TextField
                      fullWidth
                      placeholder="70 123 4567"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
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
                              onChange={(e) => setCountryCode(e.target.value)}
                              variant="standard"
                              disableUnderline
                              sx={{
                                ".MuiSelect-select": {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 0.5,
                                  paddingRight: 0,
                                },
                              }}
                            >
                              {countryCodes.map((option) => (
                                <MenuItem key={option.code} value={option.code}>
                                  {option.label} {option.code}
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
                        sx={{ mt: 2, backgroundColor: "#1A7064" }}
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
      </div>
    );
}