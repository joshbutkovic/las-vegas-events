import React from "react";
import { Container } from "../../utils/animations";
import { useHttpGet } from "../../hooks/http";
import { GET_EVENTS_URL } from "../../config/http-config";
import Event from "../Events/Event/Event";
import "../../components/Events/Events.css";

const Events = props => {
  const [isLoading, returnedEvents] = useHttpGet(GET_EVENTS_URL, [
    props.loadedEvents
  ]);

  const selectedEvents = returnedEvents;

  let content = <p>Loading events...</p>;

  if (!isLoading && selectedEvents && selectedEvents.length > 0) {
    console.log(selectedEvents);
    const eventComponents = selectedEvents.map(event => (
      <div class="container is-widescreen event-container">
        <div class="notification">
          <Event event={event} />
        </div>
      </div>
    ));

    content = (
      <Container>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column">
                <h1 className="is-size-2 has-text-centered">
                  LAS VEGAS EVENTS
                </h1>
                {eventComponents}
              </div>
            </div>
          </section>
        </div>
      </Container>
    );
  } else if (!isLoading && (!selectedEvents || selectedEvents.length === 0)) {
    content = <p>No Events returned</p>;
  }

  return content;
};

export default Events;
