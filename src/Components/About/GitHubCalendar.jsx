import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import GitHubCalendar from 'react-github-calendar';
import { Trans } from 'react-i18next';

const GitHubCalendarComponent = ({ username }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);


  return (
    <div data-aos="fade-right">
      <h2 className="section__title" style={{ marginTop: "2em" }}>
      <Trans i18nKey="coding" components={[<span className="different" key="0" />]} />
      </h2>
      <GitHubCalendar
        username="Lautaro-R-collins"
        blockSize={15}
        blockMargin={5}
      />
    </div>
  );
};

export default GitHubCalendarComponent;

