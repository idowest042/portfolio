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
    try {
      setSending(true);
      await axios.post('https://formspree.io/f/mdkkpzouya', data, {
        headers: { 'Content-Type': 'application/json' },
      });
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error(error.message || 'Failed to send the message.');
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="flex flex-col items-center justify-center space-y-6 mx-auto border w-full p-4 rounded-lg dark:border-[#172635]" onSubmit={handleSubmit(onSubmit)}>
      {/* Full Name Field */}
      <div>
        <input
          className={`w-[20.6rem] input focus:outline-0 md:w-[35rem] lg:w-96 mx-auto dark:bg-transparent border dark:border-solid dark:border-[#172635] dark:text-white-deep p-3 rounded-md ${
            errors.fullName ? 'border-red-500' : ''
          }`}
          type="text"
          placeholder="Full Name"
          {...register('fullName', { required: 'Full Name is required' })}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1 flex gap-1 items-center">
            {' '}
            <Ban /> {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Email Address Field */}
      <div>
        <input
          className={`w-[20.6rem] input focus:outline-0 md:w-[35rem] lg:w-96 mx-auto dark:bg-transparent border dark:border-solid p-3 rounded-md dark:border-[#172635] dark:text-white-deep ${
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

      {/* Message Field */}
      <div>
        <textarea
          className={`w-[20.6rem] textarea focus:outline-0 lg:w-96 resize-none mx-auto dark:bg-transparent p-3 rounded-md border dark:border-solid dark:border-[#172635] dark:text-white-deep md:w-[35rem] ${
            errors.message ? 'border-red-500' : ''
          }`}
          cols="30"
          rows="8"
          placeholder="Your Message"
          {...register('message', { required: 'Message is required' })}></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1 flex gap-1 items-center">
            <Ban /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button type="submit" disabled={sending} className={`button cursor-pointer w-full flex items-center justify-center ${sending ? 'opacity-70 cursor-not-allowed' : ''}`}>
        {sending ? <Loader size={25} className="animate-spin m-auto py-1" /> : 'SUBMIT'}
      </button>
    </form>
  );
};

export default ContactForm;
