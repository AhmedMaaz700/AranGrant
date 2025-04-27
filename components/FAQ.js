import styles from "./FAQ.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faqData from '../jsons/accordionData.json';

export default function FAQ() {    
    return (
      <div className={styles.FAQ}>
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          {faqData.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <Typography component="span">{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.content}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}         
        </div>
      </div>
    );
}