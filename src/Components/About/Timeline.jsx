import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import GitHubCalendarComponent from './GitHubCalendar';
import { Trans } from 'react-i18next';
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import { ThemeContext } from "../../Context/theme";
import MenuBookIcon from "@material-ui/icons/MenuBook";


export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#23283e");
    } else {
      setlinecolor("#ffffff");
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          <Trans i18nKey="title2" components={[<span className="different" key="0" />]} />
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date= {"2009 - 2013"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-fg-alt)`,
            }} 
            contentArrowStyle={{
              borderRight: "10px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: `3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              <Trans i18nKey="lin1" components={[<span className="different" key="0" />]} />
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              <Trans i18nKey="lin01" components={[<span className="different" key="0" />]} />
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"2015 - 2017"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "10px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              <Trans i18nKey="lin2" components={[<span className="different" key="0" />]} />
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Walmart Argentina
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"2019 - 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "10px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              <Trans i18nKey="lin3" components={[<span className="different" key="0" />]} />
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              <Trans i18nKey="lin03" components={[<span className="different" key="0" />]} />
            </h4>
            <p data-aos="fade-right">
            <Trans i18nKey="lin13" components={[<span className="different" key="0" />]} />
            </p> 
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"2020 - 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "10px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              <Trans i18nKey="lin4" components={[<span className="different" key="0" />]} />
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              <Trans i18nKey="lin04" components={[<span className="different" key="0" />]} />
            </h4>
            <p data-aos="fade-right">
             <Trans i18nKey="lin14" components={[<span className="different" key="0" />]} />
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"2023 - 2025"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "10px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon  />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              <Trans i18nKey="lin5" components={[<span className="different" key="0" />]} />
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              <Trans i18nKey="lin05" components={[<span className="different" key="0" />]} />
            </h4>
            <p data-aos="fade-right">
            <Trans i18nKey="lin15" components={[<span className="different" key="0" />]} />
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "10px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<MenuBookIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              <Trans i18nKey="lin6" components={[<span className="different" key="0" />]} />
            </h3>
            <p data-aos="fade-right">
            <Trans i18nKey="lin06" components={[<span className="different" key="0" />]} />
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Agosto 2023 - Actualidad"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,

              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "10px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              <Trans i18nKey="lin7" components={[<span className="different" key="0" />]} />
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              <Trans i18nKey="lin07" components={[<span className="different" key="0" />]} />
            </h4>
            <p data-aos="fade-right">
            <Trans i18nKey="lin17" components={[<span className="different" key="0" />]} />
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <GitHubCalendarComponent />
    </>
  );
};