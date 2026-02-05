'use client'
import { NavBar } from "../../../components/NavBar";
import { Footer } from "../../../components/Footer";
import { useState, useRef } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
   

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (response.ok) {
        console.log("Email sent successfully");
        // Reset form or show success message
        formRef.current?.reset();
        // Show success message
        setIsSubmitted(true);
        // Reset success message after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 10000);
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  }
      

    return (
      <div className="relative min-h-screen flex flex-col">
        {/* Background Image with Black Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('/palm-trees-deep.png')` }}
          >
            <div className="w-full h-full bg-[var(--night-blue)]/20" />
          </div>
        </div>
  
        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <NavBar />
          <div className="flex flex-col justify-center items-center font-anta flex-1 px-4 py-8 md:py-12 mb-8">
            <div className="bg-[var(--port-white)] w-full max-w-[700px] md:w-[700px] md:h-[500px] shadow-2xl rounded-lg flex flex-col items-center p-6 sm:p-8 md:p-0 md:justify-center">
                <h1 className="text-3xl sm:text-4xl text-[var(--port-blue)] mb-8 md:my-12">Contact Me</h1>
                <form className="flex flex-col text-[var(--port-blue)]/70 gap-8 sm:gap-10 md:gap-12 w-full sm:w-3/4" onSubmit={handleSubmit} ref={formRef}>
                    <input 
                        className="border-b-1 ps-2 py-2 md:py-0 text-base"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        disabled={isLoading}
                        required
                    />
                    <input
                        className="border-b-1 ps-2 py-2 md:py-0 text-base"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        disabled={isLoading}
                        required
                    />
                    <textarea
                        className="border-b-1 ps-2 py-2 md:py-0 min-h-[100px] max-h-[100px] text-base"
                        id="message"
                        name="message"
                        placeholder="Message"
                        disabled={isLoading}
                        required
                    />
                    <div className="flex flex-col items-center justify-center mt-2 sm:mt-4 md:mt-0">
                    <button 
                        className={`${
                          isSubmitted 
                            ? 'bg-white-500 text-white border-white-500' 
                            : 'bg-[var(--light-blue)] text-[var(--port-purple)] border-[var(--port-purple)]'
                        } rounded-sm w-full sm:w-48 md:w-36 h-12 font-anta border transition-colors duration-300 text-base`}
                        type="submit" 
                        disabled={isLoading || isSubmitted}
                      >
                          {isLoading ? 'Sending...' : isSubmitted ? 'Successfully Submitted!' : 'Hire Me'}
                      </button>
                    </div>
                </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }