import React, { useEffect, useState } from "react";
import Input from "../../elements/input";
import Button from "../../elements/button";
import { sendMessageByEmail } from "../../../utils/mailServicece/contact";

const HomeContact: React.FC = () => {
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
    <section id="contact" className="sl-section-space">
      <div className="sl-container my-10 md:my-20">
       
       <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-20">
       <div className="w-full">
          <h2 className="text-4xl md:text-[48px] font-bold mb-2 leading-tight">
            Let's Navigate the Future Together
          </h2>
          <p className="text-[#5E646B] text-sm md:text-base">
            Have questions or want to learn more about how RiverCode can help
            your business soar to new heights? We'd love to hear from you.
          </p>
          <div className="flex flex-col gap-4 mt-12">
            <div className="flex gap-4 border border-[#D0E0E7] rounded-md p-4 items-center">
              <p className="bg-[#F2FBFF] border border-[#D0E0E7] py-2 px-3 rounded-md">
                <i className="fa-solid fa-phone text-blue text-lg"></i>
              </p>
              <div>
                <p className="text-sm md:text-base">Phone</p>
                <p className="text-base md:text-xl font-bold text-[#253343]">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
            <div className="flex gap-4 border border-[#D0E0E7] rounded-md p-4 items-center">
              <p className="bg-[#F2FBFF] border border-[#DAE7ED] py-2 px-3 rounded-md">
                <i className="fa-regular fa-envelope text-blue text-lg"></i>
              </p>
              <div>
                <p className="text-sm md:text-base">Email</p>
                <p className="text-base md:text-xl font-bold text-[#253343]">
                  info@rivercode.net
                </p>
              </div>
            </div>
            <div className="flex gap-4 border border-[#D0E0E7] rounded-md p-4 items-center">
              <p className="bg-[#F2FBFF] border border-[#DAE7ED] py-2 px-3 rounded-md">
                <i className="fa-solid fa-location-dot text-blue text-lg"></i>
              </p>
              <div>
                <p className="text-sm md:text-base">Address</p>
                <p className="text-base md:text-xl font-bold text-[#253343]">
                  123 Aviation Way, Suite 100
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start border border-[#D0E0E7] rounded-lg py-5 px-3 md:py-8 md:px-8 gap-3 w-full"
        >
          <h4 className="text-[24px] font-bold mb-6">Get in Touch</h4>
          <Input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Full name"
            isRequired={true}
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            isRequired={true}
          />

          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
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
            placeholder="Message.."
            isRequired={true}
          />

          <Button
            title={isLoading ? 'Submitting...' : 'Submit'} 
            type="submit"
            iconPosition="right"
            disabled={!isFormValid || isLoading}
            icon={<i className="fa-solid fa-chevron-right text-xs"></i>}
          />
        </form>
       </div>
       
      </div>
    </section>
  );
};

export default HomeContact;
