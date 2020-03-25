import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PersonIcon from "@material-ui/icons/Person";
import BookIcon from "@material-ui/icons/Book";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Quote from "components/Typography/Quote.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills({ data, guestbook }) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4, lg: 2 },
                  contentGrid: { xs: 12, sm: 8, md: 8, lg: 10 }
                }}
                tabs={[
                  {
                    tabButton: "Obituary",
                    tabIcon: PersonIcon,
                    tabContent: (
                      <span>
                        <p>{data.obituary}</p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Biography",
                    tabIcon: LibraryBooksIcon,
                    tabContent: (
                      <span>
                        <p>{data.biography}</p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Guestbook",
                    tabIcon: BookIcon,
                    tabContent: <MessageList msgs={guestbook}></MessageList>
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

function MessageList({ msgs }) {
  return msgs.map(msg => <MessageBody msg={msg}></MessageBody>);
}

function MessageBody({ msg }) {
  return (
    <blockquote>
      <Quote
        text={msg.message}
        author={`${msg.guestName}  ${new Date(msg.createdAt).toLocaleDateString(
          "en-US"
        )}`}
      />
    </blockquote>
  );
}
