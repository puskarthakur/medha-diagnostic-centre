import React from "react";
import EventIcon from '@mui/icons-material/Event';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { Button } from "bootstrap";


export function StaticCard() {
    return(
        <div>
              <Card >
                <CardActions>
                    <Button>
                    <EventIcon></EventIcon>
                   <p>Book an appointment</p>
                    </Button>
                    <Button>
                    <EventIcon></EventIcon>
                   <p>Book an appointment</p>
                    </Button>
                    <Button>
                    <WhatsAppIcon></WhatsAppIcon>
                   <p>Chat on WhatsApp</p>
                    </Button>
                   
                </CardActions>
            </Card>
        </div>
    )
}