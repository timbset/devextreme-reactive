/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import React from 'react';
import { ViewState } from '@devexpress/dx-react-scheduler';

import {
  Scheduler,
  WeekView,
  Toolbar,
  Appointments,
  AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';

import TextField from '@mui/material/TextField/index.js';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker/index.js';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/index.js';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns/index.js';

// import { ArticleList, PopularTags } from '../components'

import useAuth from './hooks/useAuth.js';
import appointments from './data/appointments.js';

const initialFilters = { tag: '', offset: null, feed: false };

const messages = {
  allDay: 'Temps plein',
};

function App() {
  const { isAuth } = useAuth();
  const [filters, setFilters] = React.useState({ ...initialFilters, feed: isAuth });

  React.useEffect(() => {
    setFilters({ ...initialFilters, feed: isAuth });
  }, [isAuth]);

  // function onTagClick(tag) {
  //   setFilters({ ...initialFilters, tag });
  // }

  function onGlobalFeedClick() {
    setFilters(initialFilters);
  }

  function onFeedClick() {
    setFilters({ ...initialFilters, feed: true });
  }

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              value={new Date()}
              onChange={() => {}}
              renderInput={params => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>
      <Scheduler
        data={appointments}
        locale="fr-FR"
        height={660}
      >
        <ViewState
          defaultCurrentDate="2018-06-27"
        />
        <WeekView
          startDayHour={9}
          endDayHour={19}
        />
        <Toolbar />
        <Appointments />
        <AllDayPanel
          messages={messages}
        />
      </Scheduler>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                {isAuth && (
                  <li className="nav-item">
                    <button
                      onClick={onFeedClick}
                      type="button"
                      className={classNames('nav-link', {
                        active: filters.feed,
                      })}
                    >
                      Your Feed
                    </button>
                  </li>
                )}
                <li className="nav-item">
                  <button
                    type="button"
                    className={classNames('nav-link', {
                      active: !filters?.tag && !filters.feed,
                    })}
                    onClick={onGlobalFeedClick}
                  >
                    Global Feed
                  </button>
                </li>
              </ul>
            </div>
            {/* <ArticleList filters={filters} /> */}
          </div>
          {/* <div className="col-md-3"> */}
          {/*  <PopularTags onTagClick={onTagClick} /> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
