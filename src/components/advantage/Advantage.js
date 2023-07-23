import React from "react";
import Featurecard from "../feature/Featurecard";
import './Advantage.css'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import consult from '../../images/consult.png'
import medicine from '../../images/medicine.png'
import microscope from '../../images/microscope.png'
import ct_icon from '../../images/ct_icon.png'
import medical_person from '../../images/medical_person.jpg'
import PlanTable from "./PlanTable";


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Advantage() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div style={{ position: 'relative', top: '128px', overflow: "hidden" }}>
      <div>
      <PlanTable/>
      </div>

      <div className="px-4 py-2 ques-content">
        <h4 className="py-2 ">Frequently Asked Questions</h4>
        <p>To help you navigate our site better and make your shopping experience easier, we have provided answers
          to some frequently asked questions. You are always welcome to call our customer service if your question remains unanswered.</p>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography >In which cities are the services available?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography  className="ques-content">
              Our services are currently present in Nellore
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>How long is my Medha Advantage Card valid for?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              5 Years
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Can I cancel / withdraw my Plan?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It is not possible to cancel the Medha Advantage Plan during the tenure of the plan.

              For any assistance you can contact our customer care
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="px-4">
        <h4 className="center py-3">Terms & Conditions</h4>
        <p>We understand that navigating through our website and shopping can be overwhelming at times. For your convenience, we have compiled a list of frequently asked questions. If your question is not answered, our customer service team is always available to help you.</p>
        <p>These Terms of Use (“Terms”) have been developed in accordance with the Information Technology (Intermediaries
          Guidelines) Rules, 2011, under the Information Technology Act, 2000. The purpose of these Terms is to
          regulate the terms and conditions of usage and access to our prepaid cards. A physical or digital signature is
          not required to validate these Terms.</p>
        <p>Welcome to Medha Diagnostics Advantage, a prepaid card that offers exclusive benefits on services provided by
          Medha Diagnostics Health Services Limited and/or its affiliates (collectively referred to as “Medha Diagnostics”).</p>
        <p>By availing our services, you agree to be bound by these Terms of Use without limitation. You also acknowledge and agree that we may modify any of these terms at any time, and your continued use of our services after any modifications shall constitute your acceptance of the modified terms.</p>
        <p>You can purchase a prepaid card and become a participant by clicking here, contacting our customer care executive, or visiting any Medha Diagnostics diagnostic centre or pharmacy stores in select areas. These Terms of Use are between you and Medha Diagnostics Health Services Limited and/or its affiliates and
          govern our respective rights and obligations. Please note that your use of our diagnostic app and medhadiagnosticcentre.com website, as well as the purchase of a prepaid card, are subject to all other applicable terms, conditions, limitations, and requirements.
          If you purchase a Medha Diagnostics Advantage prepaid card, you accept these terms, conditions, limitations,
          and requirements by default.</p>
        <h5>Purchase of Medha Diagnostics Advantage Pre-Paid Card</h5>
        <div>
          <ul>
            <li>
              Any person aged 18 years or above is eligible to purchase a Medha Diagnostics Advantage pre-paid card
            </li>
            <li>
              A person below 18 years is eligible to become a non primary participant as part of a Family subscription plan
            </li>
          </ul>
        </div>
        <p>Pre-paid card amount, plan tenure, cooling off period for plan benefits, the number of participants
          that can participate in a Medha Diagnostics Advantage plan will vary from plan-to-plan.</p>
        <p>Please read the plan specific Terms of Use and FAQs before subscribing to any plan.Medha Diagnostics Advantage participants are required to present a valid photo identification
          issued by the central government of India including the Aadhar Card, PAN Card or Passport with details of full name, and age/DOB</p>
        <p>The plan details, benefits, pre-paid card amount and tenures for each plan are available here</p>
        <h5>Activation of Medha Diagnostics Advantage Plan</h5>
        <p>Upon successful submission of participant details and payment of the applicable pre-paid card amount made through medhadiagnosticcentre.com website or Medha Diagnostics Mart app, Medha Diagnostics
          diagnostics centres,  and approval by Medha Diagnostics, the application for Medha Diagnostics Advantage will get activated</p>
        <h5>Conditions of Participation in Medha Diagnostics Advantage Plan</h5>
        <div>
          <ul>
            <li>
              Approval under the plans is at the sole discretion of Medha Diagnostics.
              Medha Diagnostics reserves the right to accept or refuse any applicant, at its own discretion and without cause
            </li>
            <li>
              All plans are subject to any and all rules adopted by Medha Diagnostics. These rules may be amended from time to time without notice
            </li>
            <li>
              The plan benefits are non – transferable in any form or fashion
            </li>
            <li>
              Medha Diagnostics holds the right to request the participant to present a valid photo ID as proof before providing any service with benefits
            </li>
            <li>
              Medha Diagnostics holds the right to deny the service if it is found that the pre-paid card is being used by a wrong person; or verification
              of the Medha Diagnostics Advantage participant is not possible; or in case of any other detected misuse of the pre-paid card
            </li>
          </ul>
        </div>
        <h5>Renewal and Cancellation of Medha Diagnostics Advantage Plan</h5>
        <p>
          Renewal benefits and fees will be with respect to the plan prices of the respective plan at the time of renewal
        </p>
        <p>
          You may cancel your paid Medha Diagnostics Advantage plan within 7 (Seven) business days of purchase, for a full refund of your fee, provided no benefits of the plan have been used by you and on your account. If you cancel the Medha Diagnostics
          Advantage plan at any other time, no refund will be issued and the amount in the pre-paid card will stand forfeited forever
        </p>

        <h5>Payment of Pre-paid Card Amount</h5>
        <p>
          Plan applications and pre-paid card amount will be
          accepted online at medhadiagnosticcentre.com, Medha Diagnostics Mart app, Medha Diagnostics diagnostics centers or as specified
        </p>

        <h5>Promotions, e-mails and SMS</h5>
        <p>
          By purchasing Medha Diagnostics Advantage plan, you consent to be contacted by us via phone calls
          and/or SMS notifications or emails related to the services provided by Medha Diagnostics, and/or updates
          about new offers and promotions.
          We may sometimes offer promotional pre-paid cards to certain persons, which are subject to these Terms
          except as otherwise stated in the relevant promotional offer
        </p>

        <h5>Changes to the Terms and Conditions</h5>
        <p>
          Medha Diagnostics at its discretion may change the Terms of Use,
          Conditions of Sale and Privacy Notice, or any aspect of Medha Diagnostics Advantage plans, without prior notice
        </p>
        <p>
          If you continue to be a participant of Medha Diagnostics Advantage after the changes to these terms,
          it is deemed as your acceptance to these changes. You may cancel your plan if you do not agree to the changes
        </p>
      </div>
    </div>
  )
}