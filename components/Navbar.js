import Image from "next/image";
import styles from "./Navbar.module.css";
import { Box, Button, useMediaQuery  } from "@mui/material";
import Link from "next/link";

export default function Navbar() {  
  const isMobile = useMediaQuery("(max-width:1024px)");    
    return (
      <div className={styles.navbar}>
        <div className="container">
          <div className={styles.navbarContent}>
            <div className={styles.left}>
              <Box className={styles.menuItems}>
                <Link href="/" style={{ display: "inline-block" }}>
                  <Image
                    src="/icons/logo.svg"
                    alt="Logo"
                    width={105}
                    height={40}
                  />
                </Link>
                <p>Hotels</p>
                <p>Help</p>
                {isMobile && <p>My Trips</p>}
              </Box>
              <Box className={styles.mobileMenuItems}>
                <Box
                  component="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  sx={{ fill: "#fff" }}
                >
                  <rect x="3" y="6" width="18" height="2" rx="1" />
                  <rect x="3" y="11" width="14" height="2" rx="1" />
                  <rect x="3" y="16" width="18" height="2" rx="1" />
                </Box>

                <Link href="/" style={{ display: "inline-block" }}>
                  <Image
                    src="/icons/logo.svg"
                    alt="Logo"
                    width={105}
                    height={40}
                  />
                </Link>
              </Box>
            </div>
            <div className={styles.right}>
              {isMobile ? (
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
              ) : (
                <>
                  <Button
                    variant="outlined"
                    className={styles.button}
                    sx={{ color: "#fff", border: "1px solid #fff" }}
                  >
                    My Trip
                  </Button>
                  <div className={styles.call}>
                    <div>
                      <p>Phone-only deals</p>
                      <div className={styles.call}>
                        <Image
                          src="/icons/phone.svg"
                          alt="phone"
                          width={16}
                          height={16}
                        />
                        <p> Call: +18336190908</p>
                      </div>
                    </div>
                    <Image
                      src="/consultant.png"
                      alt="consultant"
                      width={56}
                      height={56}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}