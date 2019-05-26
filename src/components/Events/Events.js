import React from "react";
import { Container } from "../../utils/animations";
import { useHttpGet } from "../../hooks/http";
import { GET_EVENTS_URL } from "../../config/http-config";
import { Event } from "../Events/Event/Event";

const Events = props => {
  const [isLoading, returnedEvents] = useHttpGet(GET_EVENTS_URL, [
    props.loadedEvents
  ]);

  const selectedEvents = returnedEvents;

  let content = <p>Loading events...</p>;

  if (!isLoading && selectedEvents && selectedEvents.length > 0) {
    content = "HI";
  }

  // } else if (!isLoading && (!selectedEvents || selectedEvents.length === 0)) {
  //   content = <p>Could not fetch any data.</p>;
  // }

  return content;

  // let eventsPageContent = (
  //   <Container>
  //     <div className="container">
  //       <section className="section">
  //         <div className="columns">
  //           <div className="column">
  //             <h1 className="is-size-2 has-text-centered">LAS VEGAS EVENTS</h1>
  //             {eventContent}
  //           </div>
  //         </div>
  //       </section>
  //     </div>
  //   </Container>
  // );

  // return eventsPageContent;
};

export default Events;
