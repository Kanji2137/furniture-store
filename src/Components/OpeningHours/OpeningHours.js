import Modal from "../Modal/Modal";

function ModalContent({ handleClose }) {
  return (
      <Modal onClose={handleClose}>
        <div className="openingHoursWrapper">
          <h1>Open Hours</h1>
          <div className="openingHours--group">
            <div className="openingHours--row openingHours--row__head">
              <div className="openingHours--row">
                <div className="openingHours--content">
                  <b>Day of the week</b>
                </div>

                <div className="openingHours--content">
                                <span>
                                    <b>London</b>
                                    <br />
                                    54 Druid St{" "}
                                </span>
                </div>
              </div>
            </div>

            <div className="openingHours--row">
              <div className="openingHours--content">
                <b>Monday – Friday</b>
              </div>

              <div className="openingHours--hours">
                <span>11:00 – 19:00</span>
              </div>
            </div>

            <div className="openingHours--row">
              <div className="openingHours--content">
                <b>Saturday</b>
              </div>

              <div className="openingHours--hours">
                <span>10:00 – 18:00</span>
              </div>
            </div>

            <div className="openingHours--row">
              <div className="openingHours--content">
                <b>Sunday</b>{" "}
              </div>

              <div className="openingHours--hours">
                <span>11:00 – 16:00</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
  );
}

export default ModalContent;