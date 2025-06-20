// @ts-nocheck
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import Navbar from './Navbar';

// --- Sample Data: In a real app, this would come from a database ---
const availableTimes = [
  '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];
// --- End Sample Data ---

const BookSession = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };
  
  const footer = selectedDay ? (
    <p className="mt-4 text-center text-secondary/80">You selected <span className="font-bold text-secondary">{format(selectedDay, 'PPP')}</span>.</p>
  ) : (
    <p className="mt-4 text-center text-secondary/80">Please pick a day.</p>
  );

  return (
    <>
      <Navbar />
      <div 
        className="min-h-full bg-cover bg-center bg-no-repeat pt-24 pb-16 flex items-center justify-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528459139293-34fa35338f99?auto=format&fit=crop&q=80&w=2070')" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-accent/90 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
            <h1 className="text-secondary text-4xl font-extrabold mb-2 text-center font-serif">Book a Session</h1>
            <p className="text-secondary/80 text-lg mb-8 text-center">
              Select a day and time that works for you.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Calendar */}
              <div className="flex justify-center">
                <DayPicker
                  mode="single"
                  selected={selectedDay}
                  onSelect={setSelectedDay}
                  footer={footer}
                  disabled={{ dayOfWeek: [0, 6] }} // Disable weekends
                  fromMonth={new Date()} // Prevent booking past dates
                  styles={{
                    head_cell: { color: '#008080' /* secondary */ },
                    caption_label: { color: '#008080', fontWeight: 'bold' },
                    nav_button: { color: '#008080' },
                    day_selected: { backgroundColor: '#008080', color: 'white' },
                    today: { color: '#A8E6Cf' /* primary */, fontWeight: 'bold' },
                  }}
                />
              </div>

              {/* Time Slots */}
              <div className="flex flex-col justify-center">
                <h2 className="text-secondary text-2xl font-bold mb-4 text-center font-serif">Available Times</h2>
                {selectedDay ? (
                  <div className="grid grid-cols-2 gap-4">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`p-3 rounded-lg text-center font-semibold transition-all duration-200 ${
                          selectedTime === time
                            ? 'bg-secondary text-white shadow-lg scale-105'
                            : 'bg-white/70 hover:bg-secondary hover:text-white'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-secondary/70">Please select a date to see available times.</p>
                )}
                {selectedTime && (
                  <button className="mt-8 w-full bg-primary text-secondary font-bold py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
                    Confirm Booking for {selectedTime}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookSession;