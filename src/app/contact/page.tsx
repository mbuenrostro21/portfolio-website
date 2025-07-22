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
      <div className="relative min-h-screen">
        {/* Background Image with Black Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('/palm-trees.svg')` }}
          >
            <div className="w-full h-full bg-[var(--port-blue)]/60" />
          </div>
        </div>
  
        {/* Foreground Content */}
        <div className="relative z-10">
          <NavBar />
          <div className="flex flex-col justify-center items-center font-anta">
            <div className="bg-[var(--port-white)] mt-12 h-[500px] w-[700px] shadow-2xl rounded-lg flex flex-col items-center">
                <h1 className="text-4xl text-[var(--port-blue)] my-12">Contact Me</h1>
                <form className="flex flex-col text-[var(--port-blue)]/70 gap-12 w-3/4" onSubmit={handleSubmit} ref={formRef}>
                    <input 
                        className="border-b-1 ps-2"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        disabled={isLoading}
                        required
                    />
                    <input
                        className="border-b-1 ps-2"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        disabled={isLoading}
                        required
                    />
                    <textarea
                        className="border-b-1 ps-2 min-h-[100px] max-h-[100px]"
                        id="message"
                        name="message"
                        placeholder="Message"
                        disabled={isLoading}
                        required
                    />
                    <div className="flex flex-col items-center justify-center">
                    <button 
                        className={`${
                          isSubmitted 
                            ? 'bg-green-500 text-white border-green-500' 
                            : 'bg-[var(--light-blue)] text-[var(--port-purple)] border-[var(--port-purple)]'
                        } rounded-sm w-36 h-12 font-anta border transition-colors duration-300`}
                        type="submit" 
                        disabled={isLoading || isSubmitted}
                      >
                          {isLoading ? 'Sending...' : isSubmitted ? 'Successfully Submitted!' : 'Hire Me'}
                      </button>
                    </div>
                </form>
            </div>
          </div>
        </div>
            <Footer />
      </div>
    );
  }
  