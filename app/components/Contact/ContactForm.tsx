"use client"
import { useState, useEffect } from "react"
import React from "react"

export default function ContactForm() {

  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (isSubmitted || isLoading) return;
    
    setIsLoading(true);
    setResult("");
    
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "83850b7d-58a3-4438-b180-a6dfeb4ddd28");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Thank you for your message! We'll get back to you soon.");
        setIsSubmitted(true);
        // Store submission in localStorage to prevent duplicate submissions
        localStorage.setItem('contactFormSubmitted', new Date().toISOString());
        // Reset form
        event.target.reset();
      } else {
        setResult("Something went wrong. Please try again or call us directly.");
      }
    } catch (error) {
      console.error(error);
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Check if form was already submitted recently
  useEffect(() => {
    const lastSubmission = localStorage.getItem('contactFormSubmitted');
    if (lastSubmission) {
      const submissionTime = new Date(lastSubmission);
      const now = new Date();
      const hoursSinceSubmission = (now.getTime() - submissionTime.getTime()) / (1000 * 60 * 60);
      
      // Prevent submission for 24 hours
      if (hoursSinceSubmission < 24) {
        setIsSubmitted(true);
        setResult("You've already submitted a message recently. Please wait 24 hours before submitting again.");
      } else {
        // Clear old submission
        localStorage.removeItem('contactFormSubmitted');
      }
    }
  }, []);


  return (
    <div className='w-full'>
      <form className="flex flex-row w-full flex-wrap" onSubmit={onSubmit}>
        <div className="flex flex-col gap-2 w-1/2 pr-2">
            <input 
              name="name" 
              className="text-primary-blue placeholder-light-blue p-2 rounded bg-white/50 w-full disabled:opacity-50" 
              type="text" 
              placeholder="Name" 
              disabled={isLoading || isSubmitted}
              required 
            />
            <input 
              name="email" 
              className="placeholder-light-blue text-primary-blue p-2 rounded bg-white/50 w-full disabled:opacity-50" 
              type="email" 
              placeholder="Email" 
              disabled={isLoading || isSubmitted}
              required 
            />
            <input 
              name="phone" 
              className="text-primary-blue placeholder-light-blue p-2 rounded bg-white/50 w-full disabled:opacity-50" 
              type="tel" 
              placeholder="Phone" 
              disabled={isLoading || isSubmitted}
            />
        </div>
        <div className="w-1/2">
            <textarea 
              name="message" 
              className="text-primary-blue placeholder-light-blue w-full h-full p-2 rounded bg-white/50 pl-2 disabled:opacity-50" 
              placeholder="Message" 
              disabled={isLoading || isSubmitted}
              required 
            />
        </div>
        <div className="w-full mt-4 flex justify-end items-center gap-4">
            <button 
              type="submit" 
              className="bg-light-blue text-white px-8 py-2 font-bold rounded hover:bg-light-blue/80 transition-colors hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              disabled={isLoading || isSubmitted}
            >
              {isLoading && (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white "></div>
              )}
              {isLoading ? "Sending..." : isSubmitted ? "Submitted" : "Submit"}
            </button>
        </div>
        {result && (
          <div className={`w-full mt-4 p-3 rounded text-center ${
            result.includes("Thank you") 
              ? "bg-green-500/20 text-green-100 border border-green-500/50" 
              : "bg-red-500/20 text-red-100 border border-red-500/50"
          }`}>
            {result}
          </div>
        )}
      </form>
    </div>
  )
}