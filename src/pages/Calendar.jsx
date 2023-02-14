import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import { formatDate } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'

import { Header } from '../components/Header'
import { useAppContext } from '../components/App/AppContext/AppContext'

export const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([])
  const { colors } = useAppContext()
  const handleDateClick = (selected) => {
    const title = prompt('Enter a new title for new event')
    const calendarApi = selected.view.calendar
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allday: selected.allDay,
      })
    }
  }

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event "${
          selected.view.title || selected.event.title /*selected.event.title*/
        }"`,
      )
    ) {
      selected.event.remove()
    }
  }

  return (
    <Box m='10px'>
      <Header title='Calendar' subtitle='Full calendar Interactive page.' />
      <Box display='flex' justifyContent='space-between'>
        {/* Calendar sidebar */}
        <Box
          flex='1 1 20%'
          backgroundColor={colors.primary[400]}
          p='15px'
          mr='20px'
          borderRadius='4px'
        >
          <Typography variant='h5'>Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: '5px 0',
                  borderRadius: '2px',
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* CALENDAR */}

        <Box flex='1 1 100%' ml='15x'>
          <FullCalendar
            height='75vh'
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: 'prev,next,today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={{
              id: 1234,
              title: 'All day event one',
              date: '2023-02-02',
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
