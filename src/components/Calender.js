import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    return (
        <div id="calender" className='h-screen flex justify-center items-center' >
            <DayPicker />;
        </div>
    );
};

export default Calender;