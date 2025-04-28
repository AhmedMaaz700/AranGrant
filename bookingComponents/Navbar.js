import Image from "next/image";
import styles from "./Navbar.module.css";
import { Box, Button, useMediaQuery  } from "@mui/material";
import Link from "next/link";

export default function Navbar() { 
  const isMobile = useMediaQuery("(max-width:780px)");   
    return (
      <div className={styles.navbar}>
        <div className="container">
          <div className={styles.navbarContent}>
            <div className={styles.left}>
              <Link href="/" style={{ display: "inline-block" }}>
                <Image
                  src="/icons/logo.svg"
                  alt="Logo"
                  width={105}
                  height={40}
                />
              </Link>
            </div>
            <div className={styles.right}>
              
              {isMobile ? (
                // Mobile version
                <Box
                  display="flex"
                  gap={1}
                  backgroundColor="transparent"
                  p={1}
                  borderRadius={2}
                >
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      backgroundColor: "transparent",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "12px",
                      letterSpacing: "0.5px",
                      paddingX: 0,
                    }}
                  >
                    FREE PHONE<br />
                    ONLY DEALS 24/7
                  </Button>
                  <Box
                    component="img"
                    src="/icons/call.svg"
                    alt="phone"
                    sx={{
                      backgroundColor: "#0E7C68",
                      color: "#fff",
                      borderRadius: 2,
                      paddingX: 2,
                      paddingY: 1,
                    }}
                  />
                </Box>
              ) : (
                // Desktop version
                <Box
                  display="flex"
                  gap={1}
                  backgroundColor="#393948"
                  p={1}
                  borderRadius={2}
                >
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      backgroundColor: "transparent",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "12px",
                      letterSpacing: "0.5px",
                      paddingX: 3,
                    }}
                  >
                    FREE PHONE ONLY DEALS 24/7
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={
                      <Box
                        component="img"
                        src="/icons/call.svg"
                        alt="phone"
                        sx={{ width: 20, height: 20 }}
                      />
                    }
                    sx={{
                      backgroundColor: "#0E7C68",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "16px",
                      paddingX: 3,
                      "&:hover": { backgroundColor: "#0E7C68" },
                    }}
                  >
                    +18336190908
                  </Button>
                </Box>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}