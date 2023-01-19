import classNames from 'classnames'
import React from 'react'
import { ViewState } from '@devexpress/dx-react-scheduler';

import {
  Scheduler,
  WeekView,
  Toolbar,
  Appointments,
  AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';

// import { ArticleList, PopularTags } from '../components'
import useAuth from './hooks/useAuth'

import appointments from './data/appointments'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
const initialFilters = { tag: '', offset: null, feed: false }

const messages = {
  allDay: 'Temps plein',
}

function App() {
  const { isAuth } = useAuth()
  const [filters, setFilters] = React.useState({ ...initialFilters, feed: isAuth })

  React.useEffect(() => {
    setFilters({ ...initialFilters, feed: isAuth })
  }, [isAuth])

  function onTagClick(tag) {
    setFilters({ ...initialFilters, tag })
  }

  function onGlobalFeedClick() {
    setFilters(initialFilters)
  }

  function onFeedClick() {
    setFilters({ ...initialFilters, feed: true })
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
              onChange={()=>{}}
              renderInput={(params) => <TextField {...params} />}
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
                {filters?.tag && (
                  <li className="nav-item">
                    <a className="nav-link active"># {filters?.tag}</a>
                  </li>
                )}
              </ul>
            </div>
            {/*<ArticleList filters={filters} />*/}
          </div>
          {/*<div className="col-md-3">*/}
          {/*  <PopularTags onTagClick={onTagClick} />*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  )
}

export default App
