import React from "react";
import Banner from '../banner/Banner'
import './About.css';
import { Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import IconTest from '@mui/icons-material/AssignmentTurnedIn';
import IconBuilding from '@mui/icons-material/LocationCity';
import IconLocation from '@mui/icons-material/LocationOn';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bannerImage from '../../images/aboutusbackgroundimage.avif';
import Card from "../common/Card";
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';


export default function About() {

    const AboutCount = styled('div')(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: theme.spacing(5),
    }));

    const theme = createTheme({
        palette: {
            text: {
                primary: '#000', // Replace with your desired primary text color
            },
        },
    });

    const genericCards = [
        {
            iconClass: faMicroscope,
            heading: 'Extensive Network',
            paragraph: 'We have our Central Lab in Mumbai; four satellite labs across Mumbai, Thane, and Navi Mumbai; several regional labs in Pune, Nagpur, Nashik, Aurangabad, Indore, Jabalpur and Goa; and twelve labs in reputed hospitals across Mumbai, Pune and Madhya Pradesh.'
        },
        {
            iconClass: faMicroscope,
            heading: 'Logistics',
            paragraph: 'We have excellent logistics management support offered by a team of 150+ members and a collaboration with a leading national courier company that looks after compliance with IATA norms and maintains the sample’s integrity throughout transportation.'
        },
        {
            iconClass: faMicroscope,
            heading: 'Wide Range of Services',
            paragraph: 'We provide diagnostic services in the fields of biochemistry, hematology, immunology, clinical pathology, serology, molecular, microbiology, histopathology, cytology, flow cytometry, and others.'
        },
        {
            iconClass: faMicroscope,
            heading: 'Infrastructure',
            paragraph: 'We use top-notch, fully automated instruments and machines from globally renowned brands like Roche, Biomeriux, Horiba, Sysmex, Johnson & Johnson, etc.'
        },
        {
            iconClass: faMicroscope,
            heading: 'Support',
            paragraph: 'We use top-notch, fully automated instruments and machines from globally renowned brands like Roche, Biomeriux, Horiba, Sysmex, Johnson & Johnson, etc.'
        }
    ]


    const SectionContent = styled('div')(({ theme }) => ({
        color: theme.palette.text.primary,
    }));

    const FounderImage = styled('img')(({ theme }) => ({
        maxWidth: '100%',
    }));

    const CustomMicroscopeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
            <path d="M12 6a5.953 5.953 0 0 0-5.83 4H4a1 1 0 0 0 0 2h1v2H4a1 1 0 0 0 0 2h1v2H4a1 1 0 0 0 0 2h1v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2h1a1 1 0 0 0 0-2h-1v-2h1a1 1 0 0 0 0-2h-1v-2a5.953 5.953 0 0 0-4.17-5.65A5.953 5.953 0 0 0 12 6zm0 2a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4z" />
        </svg>
    );


    return (
        <div>
            <div>
                <Banner
                    icon={false} // Pass true or false to display or hide the arrow icon
                    text="ABOUT US" // The text to be displayed in the banner
                    imageUrl={bannerImage} // The URL of the banner image
                    imageHeight="12rem" // The height of the banner image
                />
            </div>
            <ThemeProvider theme={theme}>
                <Box className="container">
                    <Grid container alignItems="center">
                        <Grid item xs={12} md={8} lg={7}>
                            <SectionContent>
                                <Typography variant="h2" gutterBottom>
                                    Inception
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    One of the biggest names for diagnostics in India, Medha Diagnostics center first took off in 1994 as a
                                    small pathology lab at Lokhandwala, Andheri West, Mumbai, with the intent of delivering trailblazing,
                                    high-quality diagnostic services as a friendly neighborhood pathology lab. Over the last 28 years, we have
                                    built a network of 250+ centers in more than sixteen cities of India.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    With more than 4,500 tests across various specializations, best-in-class infrastructure, panel of experts,
                                    and a strong will to unburden healthcare, Suburban Diagnostics has come to be known for its efficient
                                    processes that strive towards minimal error and customer centricity.
                                </Typography>
                            </SectionContent>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} mt={4} mt-md={0}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <AboutCount>
                                        <CustomMicroscopeIcon fontSize="large" />
                                        <Typography variant="h3" gutterBottom>
                                            1000+
                                        </Typography>
                                        <Typography variant="subtitle1">Home Visits Per Day</Typography>
                                    </AboutCount>
                                    <AboutCount>
                                        <IconTest fontSize="large" />
                                        <Typography variant="h3" gutterBottom>
                                            4500+
                                        </Typography>
                                        <Typography variant="subtitle1">Tests</Typography>
                                    </AboutCount>
                                </Grid>
                                <Grid item xs={6}>
                                    <AboutCount>
                                        <IconBuilding fontSize="large" />
                                        <Typography variant="h3" gutterBottom>
                                            250+
                                        </Typography>
                                        <Typography variant="subtitle1">Centers</Typography>
                                    </AboutCount>
                                    <AboutCount>
                                        <IconLocation fontSize="large" />
                                        <Typography variant="h3" gutterBottom>
                                            15+
                                        </Typography>
                                        <Typography variant="subtitle1">Cities</Typography>
                                    </AboutCount>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box className="aboutUsAboutFounder">
                    <div className="header-base" />
                    <div className="about-us-about-founder section-padding-lg ">
                        <div className="container">
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={12} md={4} lg={3} mt={4} mt-md={0}>
                                    <div className="about-us-founder-info">
                                        <div className="img-wrap">
                                            <FounderImage
                                                src="https://www.suburbandiagnostics.com/Content/assets/images/founder-sanjay-arora.jpg"
                                                alt="Dr. krishan - Founder"
                                            />
                                        </div>
                                        <div className="about-us-founder-details">
                                            <Typography variant="h2" className="mb-1 name" style={{ fontSize: '1.75rem' }}>
                                                Dr. krishan
                                            </Typography>
                                            <Typography variant="body1" className="mb-1 designation">
                                                Founder
                                            </Typography>
                                            <Typography variant="body1" className="mb-0">
                                                MBBS, DPB, MD (Path)
                                            </Typography>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={8} lg={9}>
                                    <SectionContent className="section-content light-content mt-4 mt-md-0">
                                        <div className="section-heading" >
                                            <Typography variant="h2" className="mb-2" style={{ fontSize: '1.75rem' }}>
                                                About the Founder
                                            </Typography>
                                        </div>
                                        <Typography variant="body1" paragraph>
                                            Our Founder and Managing Director, Dr. Sanjay Arora, is an alumnus of the Grant Medical College and JJ
                                            Hospital, Mumbai with a special interest in Cytopathology. Dr. Sanjay Arora trained from the esteemed Tata
                                            Hospital, Johns Hopkins Hospital and Henry Ford Hospital, USA. The very embodiment of passion and
                                            perfection, Dr. Arora's 'first love' has been a microscope. He also holds an interest in other areas like
                                            Clinical Lab Management. Looking at his determination to provide better health diagnostic services, he was
                                            felicitated and honoured with the 100 Most Impactful Healthcare Leaders Award by the World Health and
                                            Wellness Congress in 2018. Dr. Arora has featured in Forbes India Marquee Leaders in Healthcare, 2019 and
                                            got the VCCircle Healthcare Investment Award, 2015. He was acknowledged with the 'Lifetime Achievement
                                            Award' by IES Management College and Research Centre, 2018. Recently, Dr. Arora was honored as the
                                            Influential Leader of New India 2021 by Teammarksmen in association with CNN News 18 for his exceptional
                                            leadership, especially when the pandemic presented several operational and financial challenges. His belief
                                            of 'staying accessible' to the patient and 'impacting health outcomes' are founding principles at Suburban
                                            Diagnostics. Even today, consumer-centricity remains at the core of all our offerings and processes.
                                        </Typography>
                                    </SectionContent>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Box>
                <Box className="section-padding-lg pt-0 px-0">
                    <Grid container justifyContent="center" style={{ backgroundColor: '#ebedec' }}>
                        <Grid item xs={12}>
                            <img
                                src="https://www.suburbandiagnostics.com/images/our-network.jpg"
                                alt="Our Network"
                                style={{ width: '100%' }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
            <div>
                <div className="containerBox">
                    <div className="section-content myheader">
                        <h3 >Services</h3>
                    </div>
                    <div row row-eq-height>
                        <Grid container spacing={3}>
                            {genericCards.map((card, index) => (
                                <Grid key={index} item xs={12} md={4}>
                                    <Card
                                        iconClass={card.iconClass}
                                        heading={card.heading}
                                        paragraph={card.paragraph}
                                        buttonName={"KNOW MORE"}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                    <div className="bottom-line" />
                </div>
            </div>

        </div>

    )
}