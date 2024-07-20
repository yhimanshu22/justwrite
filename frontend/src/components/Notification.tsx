import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Notification success

export const notifySuccess = (message: string) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

// Notification for errors

export const notifyError = (message: string) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

// Exporting ToastContainer to use in your App component
export const NotificationContainer = () => (
    <ToastContainer />
);

export default NotificationContainer;
