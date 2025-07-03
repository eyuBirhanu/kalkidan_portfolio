import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import Notification from "./Notification";

interface FormInputs {
  "user-name": string;
  email: string;
  subject: string;
  message: string;
}

interface NotificationState {
  message: string;
  type: "success" | "error" | null;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const [notification, setNotification] = useState<NotificationState>({
    message: "",
    type: null,
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);
    setNotification({ message: "", type: null }); // Clear previous notification

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch("https://formspree.io/f/mldeykee", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setNotification({
          message: "Message sent successfully!",
          type: "success",
        });
        reset();
      } else {
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        setNotification({
          message: "Failed to send message. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setNotification({
        message: "An error occurred. Please check your connection.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseNotification = () => {
    setNotification({ message: "", type: null });
  };

  const inputClass =
    "bg-[#1D1D1D] w-full h-12 outline-none border text-white/80 rounded-lg px-2 focus:border-white/40";
  const errorBorderClass = "border-red-500/50";
  const defaultBorderClass = "border-transparent";

  return (
    <>
      {notification.type && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={handleCloseNotification}
        />
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full sm:w-fit text-paragraph font-Lato flex justify-center"
      >
        <div className="w-full sm:w-98 flex flex-col gap-6 bg-[#0B0B0B] p-6 rounded-md">
          <div className="flex flex-col gap-2">
            {/* Name */}
            <div className="flex flex-col">
              <label className="ps-2" htmlFor="user-name">
                Name
              </label>
              <input
                {...register("user-name", { required: "Name is required" })}
                id="user-name"
                className={`${inputClass} ${
                  errors["user-name"] ? errorBorderClass : defaultBorderClass
                }`}
                disabled={isSubmitting}
              />
              {errors["user-name"] && (
                <span className="text-red-500 text-sm ps-2 pt-1">
                  {errors["user-name"].message}
                </span>
              )}
            </div>
            {/* Email */}
            <div className="flex flex-col">
              <label className="ps-2" htmlFor="email">
                E-mail
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                id="email"
                type="email"
                className={`${inputClass} ${
                  errors.email ? errorBorderClass : defaultBorderClass
                }`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <span className="text-red-500 text-sm ps-2 pt-1">
                  {errors.email.message}
                </span>
              )}
            </div>
            {/* Subject */}
            <div className="flex flex-col">
              <label className="ps-2" htmlFor="subject">
                Subject
              </label>
              <input
                {...register("subject", { required: "Subject is required" })}
                id="subject"
                className={`${inputClass} ${
                  errors.subject ? errorBorderClass : defaultBorderClass
                }`}
                disabled={isSubmitting}
              />
              {errors.subject && (
                <span className="text-red-500 text-sm ps-2 pt-1">
                  {errors.subject.message}
                </span>
              )}
            </div>
            {/* Message */}
            <div className="flex flex-col">
              <label className="ps-2" htmlFor="message">
                Message
              </label>
              <textarea
                {...register("message")}
                id="message"
                className={`bg-[#1D1D1D] w-full min-h-24 outline-none border text-white/80 rounded-lg px-2 py-2 focus:border-white/40 ${
                  errors.message ? errorBorderClass : defaultBorderClass
                }`}
                disabled={isSubmitting}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm ps-2 pt-1">
                  {errors.message.message}
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-accent-color text-lg font-Oxanium font-bold w-full px-10 py-2 text-dark-gray rounded-lg hover:bg-accent-color/85 disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "SENDING..." : "SEND"}
          </button>
        </div>
      </form>
    </>
  );
}
