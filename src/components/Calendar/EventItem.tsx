import React, { useState, useRef, useEffect } from 'react';
import { UserEvent, deleteUserEvent, updateUserEvent } from '../../redux/user-events';
import { useDispatch } from 'react-redux';
import { getTime } from '../../lib/utils';

interface Props {
  event: UserEvent;
}

const EventItem: React.FC<Props> = ({ event }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteUserEvent(event.id));
  };
  const [editable, setEditable] = useState(false);
  const handleTitleClick = () => {
      setEditable(true);
  }
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
      if (editable) {
          inputRef.current?.focus();
      }
  }, [editable]);
  const [title, setTitle] = useState(event.title);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
  }
  const handleBlur = () => {
      if (title !== event.title) {
          dispatch(updateUserEvent({
              ...event,
              title
          })
        );
      }
      setEditable(false);
  }
  return (
    <div className="calendar-event">
      <div className="calendar-event-info">
        <div className="calendar-event-time">{getTime(event.dateStart)} - {getTime(event.dateEnd)}</div>
        <div className="calendar-event-title" onClick={handleTitleClick}>
           {editable ? (
            <input 
            type="text"
            ref={inputRef}
            value={title}
            onChange={handleChange}
            onBlur={handleBlur}
            />
           ) : (
           <span>{event.title}</span>
           )}
        </div>
      </div>
      <button
        className="calendar-event-delete-button"
        onClick={handleDeleteClick}
      >
        &times;
      </button>
    </div>
  );
};

export default EventItem;