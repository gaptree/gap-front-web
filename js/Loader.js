import { GapEvent } from 'gap-front-event';
import { allElem } from './selector';

const EventName = 'gap-load';

class Loader {
  constructor() {
    this.event = new GapEvent();

    document.ready(() => {
      this.load();
    });
  }

  onLoad(listener) {
    this.event.on(EventName, listener);
  }

  load() {
    allElem(`[${EventName}]`).forEach((elem) => {
      this.event.trigger(EventName, elem);
    });
  }
}

export default Loader;
