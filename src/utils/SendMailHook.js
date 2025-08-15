import emailjs from '@emailjs/browser';

const SendMailHook = async (formRef) => {
  try {
    await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILSERVICEID,
      process.env.NEXT_PUBLIC_EMAILSERVICETEMPLATE,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILPUBLICKEY
    );
  } catch (error) {
    console.error('FAILED...', error.text);
        toast.error('Failed to send. Please try again.', {
          position: 'top-right',
          theme: 'colored',
        });
  }
};

export default SendMailHook;
