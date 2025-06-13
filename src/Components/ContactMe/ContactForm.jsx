import axios from 'axios';
import { Ban, Loader } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [sending, setSending] = useState(false);

  const onSubmit = async (data) => {
    console.log('Form Data:', data); // Debug
    try {
      setSending(true);
      await axios.post('https://elite-states.vercel.app/api/homes/contact', data, {
        headers: { 'Content-Type': 'application/json' },
      });
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      console.error('Submission error:', error.response?.data || error.message);
      toast.error(error.response?.data?.message || 'Failed to send the message.');
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-center space-y-6 mx-auto border w-full p-4 rounded-lg dark:border-[#172635]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Name Field */}
      <div>
        <input
          className={`w-[20.6rem] md:w-[35rem] lg:w-96 mx-auto p-3 rounded-md border focus:outline-0 dark:bg-transparent dark:border-[#172635] dark:text-white-deep ${
            errors.name ? 'border-red-500' : ''
          }`}
          type="text"
          placeholder="Full Name"
          {...register('name', { required: 'Full Name is required' })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1 flex gap-1 items-center">
            <Ban /> {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <input
          className={`w-[20.6rem] md:w-[35rem] lg:w-96 mx-auto p-3 rounded-md border focus:outline-0 dark:bg-transparent dark:border-[#172635] dark:text-white-deep ${
            errors.email ? 'border-red-500' : ''
          }`}
          type="email"
          placeholder="Email Address"
          {...register('email', {
            required: 'Email Address is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email address',
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 flex gap-1 items-center">
            <Ban /> {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <input
          className={`w-[20.6rem] md:w-[35rem] lg:w-96 mx-auto p-3 rounded-md border focus:outline-0 dark:bg-transparent dark:border-[#172635] dark:text-white-deep ${
            errors.phone ? 'border-red-500' : ''
          }`}
          type="tel"
          placeholder="Phone Number"
          {...register('phone', { required: 'Phone number is required' })}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1 flex gap-1 items-center">
            <Ban /> {errors.phone.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <textarea
          className={`w-[20.6rem] md:w-[35rem] lg:w-96 mx-auto p-3 rounded-md border resize-none focus:outline-0 dark:bg-transparent dark:border-[#172635] dark:text-white-deep ${
            errors.message ? 'border-red-500' : ''
          }`}
          rows="8"
          placeholder="Your Message"
          {...register('message', { required: 'Message is required' })}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1 flex gap-1 items-center">
            <Ban /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={sending}
        className={`w-full flex items-center justify-center button cursor-pointer ${
          sending ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {sending ? <Loader size={25} className="animate-spin m-auto py-1" /> : 'SUBMIT'}
      </button>
    </form>
  );
};

export default ContactForm;
