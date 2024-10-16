import React, { useEffect, useState } from "react";
import Input from "../../elements/input";
import Button from "../../elements/button";
import { sendMessageByEmail } from "../../../utils/mailServicece/contact";

const ContactUs: React.FC = () => {
  const initialFormData = {
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setIsFormValid(isValid);
  }, [formData]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const success = await sendMessageByEmail(formData);
    if (success) {
        setFormData(initialFormData);
    }
    setIsLoading(false);
 };


  return (
    <section id="contact" className="sl-section-space relative mb-10">
      <div className="absolute inset-0 xl:bg-cover bg-center z-0 transform scale-x-[-1]" style={{backgroundImage: "url('./assets/images/global-reach.png')"}}>
         <div className="absolute inset-0 bg-blue opacity-90"></div>
      </div>

      <div className="sl-container flex flex-col md:flex-row justify-between items-center gap-8 my-10 md:my-20  relative z-10">
        <div className="w-full md:w-[600px]">
          <h2 className="text-4xl md:text-[48px] font-bold mb-2 leading-tight text-white"> How to contact with us? </h2>
          <p className="text-white text-sm md:text-base"> 
              Minimizing downtime and potential lost revenue means Centarus’ support solutions are engineered toward being a productive and profitable choice. If you want efficient, effective IT solutions.
            </p>
          <div className="flex flex-col gap-4 mt-12">

          <div className="flex gap-4 items-start">
              <p className="bg-[#E5EEF54D] border border-[#E5EEF54D] h-11 w-11 rounded-full flex justify-center items-center">
                <i className="fa-solid fa-location-dot text-white text-xl"></i>
              </p>
              <div>
                <p className="text-base md:text-xl font-bold text-white">Map Location</p>
                <p className="text-sm md:text-base text-white mt-2">
                  123 Aviation Way, Suite 100 <br />
                  Find us on google map
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <p className="bg-[#E5EEF54D] border border-[#E5EEF54D] h-11 w-11 rounded-full flex justify-center items-center">
                <i className="fa-solid fa-phone text-white text-lg"></i>
              </p>
              <div>
                <p className="text-base md:text-xl font-bold text-white">Contact Number</p>
                <p className="text-sm md:text-base text-white mt-2">
                  +1 (555) 123-4567 <br />
                  +1 (555) 123-4567
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <p className="bg-[#E5EEF54D] border border-[#E5EEF54D] h-11 w-11 rounded-full flex justify-center items-center">
                 <i className="fa-regular fa-envelope text-white text-lg"></i>
              </p>
              <div>
                <p className="text-base md:text-xl font-bold text-white">Mail Address</p>
                <p className="text-sm md:text-base text-white mt-2">
                  info@rivercode.net <br />
                  info@rivercode.net
                </p>
              </div>
            </div>           

          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start gap-3 w-full md:w-[480px]"
        >
          <h4 className="text-[24px] font-bold mb-6 text-white">Get in Touch</h4>
          <div className="flex gap-3">
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your name"
                isRequired={true}
              />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your mail"
                isRequired={true}
              />
          </div>

          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone number"
            isRequired={true}
          />
          <Input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Company"
            isRequired={true}
          />
          <Input
            type="textarea"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your comment"
            isRequired={true}
          />

          <Button
             title={isLoading ? 'Submitting...' : 'Submit'} 
            type="submit"
            disabled={!isFormValid || isLoading}
          />
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
