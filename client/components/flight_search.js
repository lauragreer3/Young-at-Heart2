import React, { useState, useEffect } from 'react';

function FlightSearch(props) {
    const [hasSearched, setHasSearched] = useState(false);

    function handleFlightSearch() {
        setHasSearched(true);
    }

    return (
        <div data-skyscanner-widget="FlightSearchWidget"
            data-locale="en-US"
            data-currency="USD"
            data-destination-name="Orlando"
            data-origin-iataCode="props.origin_iata_code"
            data-destination-iataCode="MCO"
            data-colour="props.colour"
            data-font-colour="props.font_colour"
            data-button-colour="props.button_colour"
            data-button-label="props.button_label"
            data-button-text-size="props.button.text_size"
            data-powered-by-size="props.powered_by_size"
            data-widget-scale="1.0"
            data-flight-outbound-date="props.outbound_date"
            data-flight-inbound-date="props.inbound_date"
            data-target="_blank"
            data-market="US"
            >
        </div>
    );
}