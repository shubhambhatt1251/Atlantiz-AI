import emailjs from '@emailjs/browser';

// EmailJS configuration - you'll need to replace these with your actual values
const EMAILJS_SERVICE_ID = 'service_ck7qam7'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID_NEWSLETTER = 'template_8k84ltf'; // Replace with your newsletter template ID
const EMAILJS_TEMPLATE_ID_DEMO = 'template_8k84ltf'; // Replace with your demo request template ID
const EMAILJS_PUBLIC_KEY = 'aSqnXqdYgSzGB_MfJ'; // Replace with your EmailJS public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface NewsletterFormData {
  fullName: string;
  email: string;
  company?: string;
}

export interface DemoFormData {
  fullName: string;
  email: string;
  company?: string;
}

export const sendNewsletterEmail = async (formData: NewsletterFormData) => {
  try {
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      company: formData.company || 'Not provided',
      form_type: 'Newsletter Signup',
      message: `New newsletter signup from ${formData.fullName}`,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_NEWSLETTER,
      templateParams
    );

    console.log('Newsletter email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Failed to send newsletter email:', error);
    return { success: false, error };
  }
};

export const sendDemoRequestEmail = async (formData: DemoFormData) => {
  try {
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      company: formData.company || 'Not provided',
      form_type: 'Demo Request',
      message: `New demo request from ${formData.fullName}`,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_DEMO,
      templateParams
    );

    console.log('Demo request email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Failed to send demo request email:', error);
    return { success: false, error };
  }
};
