import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

export const sendMessageByEmail = async (formData) => {
  
  try {
    if (!process.env.VITE_EMAILJS_SERVER_ID) {
      throw new Error('Missing NEXT_PUBLIC_EMAILJS_SERVER_ID environment variable');
    }
    if (!process.env.VITE_EMAILJS_CONTACT_TEMPLATE) {
      throw new Error('Missing NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE environment variable');
    }
    await emailjs.send(
      process.env.VITE_EMAILJS_SERVER_ID,
      process.env.VITE_EMAILJS_CONTACT_TEMPLATE!, // Add '!' to assert non-null assertion
      formData,
      process.env.VITE_EMAILJS_USER_ID
    );
    toast.success('🎉 Message sent successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return true;
  } catch (error) {
    toast.error('❌ Failed to send message. Please try again.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return false;
  }
};